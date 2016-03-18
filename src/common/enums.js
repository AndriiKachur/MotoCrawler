
function Enums() {

    this.documents = {
        fake: 'fake_documents',
        unregistered: 'unregistered',
        registered: 'registered',
        invoice: 'ready_for_registration',
        absent: 'no_documents',
        import: 'ne_rastamogen'
    };

    this.type = {
        other: 'other',
        skuter: 'skuter',
        classic: 'classic',
        sport: 'sport',
        street: 'street',
        sportTourist: 'sport tourist',
        tourist: 'tourist',
        enduro: 'enduro',
        chopper: 'chopper',
        custom: 'custom',
        trike: 'trike',
        quadro: 'quadro'
    };

    this.states = {
        ukraine: {
            any: "any",
            vinnitsa: "Vinnitsa",
            dnepropetrovsk: "Dnepropetrovsk",
            donetsk: "Donetsk",
            gitomir: "Zhitomir",
            zaporozie: "Zaporozie",
            ivanofrankovsk: "Ivano-Frankovsk",
            kerch: "Kerch",
            kiev: "Kiev",
            kirovograd: "Kirovograd",
            kremenchyg: "Kremenchyg",
            krivoirog: "Krivoi Rog",
            crimia: "Crimea",
            lygansk: "Lygansk",
            lyck: "Lyck",
            lviv: "Lviv",
            melitopol: "Melitopol",
            nikolaev: "Nikolaev",
            odessa: "Odessa",
            poltava: "Poltava",
            rovno: "Rovno",
            sevastopol: "Sevastopol",
            simferopol: "Simferopol",
            symi: "Symi",
            ternopol: "Ternopol",
            uzgorod: "Uzhgorod",
            feodosia: "Feodosia",
            kharkiv: "Kharkov",
            herson: "Kherson",
            hmelnitskii: "Khme",
            cherkassi: "Cherkassi",
            chernigov: "Chernigov",
            chernovtsi: "Chernovtsi"
        }
    };



}

module.exports = new Enums();