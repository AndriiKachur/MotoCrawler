
var counter = 0;

function Database() {

}

Database.saveMotoInfo = function(moto) {
    console.info(++counter, 'TODO: saving moto to mongo', moto);
};

module.exports = Database;