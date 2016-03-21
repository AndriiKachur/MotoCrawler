
function Enums() {

    this.domains = {
        motosale: 'http://www.motosale.com.ua/'
    };

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
            vinnytsia: "Vinnytsia",
            dnepropetrovsk: "Dnipropetrovsk",
            donetsk: "Donetsk",
            zhytomyr: "zhytomyr",
            zaporizhzhia: "Zaporizhzhia",
            ivanoFrankivsk: "Ivano-Frankivsk",
            kerch: "Kerch",
            kyiv: "Kyiv",
            kirovohrad: "Kirovohrad",
            kremenchyg: "Kremenchyg",
            kryvyiRih: "Kryvyi Rih",
            crimia: "Crimea",
            luhansk: "luhansk",
            lutsk: "Lutsk",
            lviv: "Lviv",
            melitopol: "Melitopol",
            mykolaiv: "Mykolaiv",
            odesa: "Odesa",
            poltava: "Poltava",
            rivne: "Rivne",
            sevastopol: "Sevastopol",
            simferopol: "Simferopol",
            sumy: "Sumy",
            ternopil: "Ternopil",
            uzhhorod: "Uzhhorod",
            feodosia: "Feodosia",
            kharkiv: "Kharkiv",
            kherson: "Kherson",
            khmelnytskyi: "Khmelnytskyi",
            cherkasy: "Cherkasy",
            chernihiv: "Chernihiv",
            chernivtsi: "Chernivtsi"
        }
    };



}

module.exports = new Enums();