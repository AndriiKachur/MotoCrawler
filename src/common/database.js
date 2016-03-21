
var counter = 0;

module.exports = Database;

function Database() {

}

Database.saveMotoInfo = function(moto) {
    console.info(++counter, 'TODO: saving moto to mongo', moto);
};
