
function Enums() {
    var ctx = this;

    this.documents = {
        fake: 'fake_documents',
        unregistered: 'unregistered',
        registered: 'registered',
        invoice: 'ready_for_registration'
    };

    this.type = {
        classic: 'classic',
        sport: 'sport',
        street: 'street',
        sportTourist: 'sport tourist',
        enduro: 'enduro',
        chopper: 'chopper'
    };

    this.region = {
        kharkiv: 'kharkiv'
        //todo: add more
    };

}

module.exports = new Enums();