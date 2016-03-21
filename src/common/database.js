var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var counter = 0,
    database = null,
    motoCollection = null,
    url = 'mongodb://127.0.0.1:27017/test';

module.exports = Database;

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    database = db;
    motoCollection = database.collection('motos');

    console.log("DATABASE connected correctly to MongoDB server.");
});

function Database() {
    console.warn('DATABASE Closing connection');
    database.close();
}

Database.saveMotoInfo = function(moto) {
    if (!isMotoInfoValid(moto)) {
        ++counter;
        console.warn(counter, 'Not valid moto info', moto);
    } else {
        getMotoDuplicateCount(moto).then(function(duplicateCount) {
            var isExists = duplicateCount > 0;
            ++counter;

            if (!isExists) {
                console.info(counter, 'TODO: saving moto to mongo', moto);
                saveMotoInfo(moto);
            } else {
                console.warn(counter, 'Moto already exists', moto);
            }
        });
    }
};

function saveMotoInfo(data) {
    motoCollection.insertOne(data, function (err, result) {
        assert.equal(err, null);
    });
}

function isMotoInfoValid(data) {
    return data.title && data.documents && data.manufacture && data.region && data.url && data.model;
}

function getMotoDuplicateCount(data) {
    return motoCollection.find({
            url: data.url
        }).count();
}