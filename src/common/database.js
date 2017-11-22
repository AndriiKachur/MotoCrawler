module.exports = Database;

const MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
	logger = require('./logger')();

let validMotos = 0,
	invalidMotos = 0,
    updatedMotos = 0,
    database = null,
    motoCollection = null,
    wrongMotosCollection = null,
    url = 'mongodb://127.0.0.1:27017/motos';


MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    database = db;
    motoCollection = database.collection('motos');
    wrongMotosCollection = database.collection('wrongMotos');

    log("DATABASE connected correctly to MongoDB server.");
});

function Database() {
    warn('DATABASE Closing connection');
    database.close();
}

Database.saveMotoInfo = function(moto) {
    if (!isMotoInfoValid(moto)) {
        ++invalidMotos;
        warn('Not valid moto info', moto);
        wrongMotosCollection.insertOne(moto);

        return Promise.resolve();

    } else {

        //TODO: get from db, define is update needed

        return getMotoDuplicateCount(moto).then(function(duplicateCount) {
            let isExists = duplicateCount > 0;

            if (!isExists) {
            	++validMotos;
                log('TODO: saving moto to db', moto.url);
                saveMotoInfo(moto);
            } else {
            	++updatedMotos;
                warn('Moto already exists', moto.url);
                updateMoto(moto);
            }
        });
    }
};

function saveMotoInfo(data) {
    motoCollection.insertOne(data, function (err, result) {
        assert.equal(err, null);
    });
}

function updateMoto(data) {
    motoCollection.updateOne({url: data.url}, data, function (err, result) {
       assert.equal(err, null);
    });
}

function isMotoInfoValid(data) {
    return data.title && data.documents && data.manufacture && data.region && data.url;
}

function getMotoDuplicateCount(data) {
    return motoCollection.find({
            url: data.url
        }).count();
}

function log(...args) {
	logger.log.apply(console, [validMotos, updatedMotos, invalidMotos, args]);
}

function warn(...args) {
	logger.warn.apply(console, [validMotos, updatedMotos, invalidMotos, args]);
}