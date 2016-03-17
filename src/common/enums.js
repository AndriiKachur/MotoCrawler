
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
        enduro: 'enduro',
        chopper: 'chopper',
        custom: 'custom',
        trike: 'trike',
        quadro: 'quadro'
    };

    this.states = {
        ukraine: {
            any: "Любой",
            vinnitsa: "Винница",
            dnepropetrovsk: "Днепропетровск",
            donetsk: "Донецк",
            gitomir: "Житомир",
            zaporozie: "Запорожье",
            ivanofrankovsk: "Ивано-Франковск",
            kerch: "Керчь",
            kiev: "Киев",
            kirovograd: "Кировоград",
            kremenchyg: "Кременчуг",
            krivoirog: "Кривой Рог",
            crimia: "Крым",
            lygansk: "Луганск",
            lyck: "Луцк",
            lviv: "Львов",
            melitopol: "Мелитополь",
            nikolaev: "Николаев",
            odessa: "Одесса",
            poltava: "Полтава",
            rovno: "Ровно",
            sevastopol: "Севастополь",
            simferopol: "Симферополь",
            symi: "Сумы",
            ternopol: "Тернополь",
            uzgorod: "Ужгород",
            feodosia: "Феодосия",
            kharkiv: "Харьков",
            herson: "Херсон",
            hmelnitskii: "Хмельницкий",
            cherkassi: "Черкассы",
            chernigov: "Чернигов",
            chernovtsi: "Черновцы"
        }
    };



}

module.exports = new Enums();