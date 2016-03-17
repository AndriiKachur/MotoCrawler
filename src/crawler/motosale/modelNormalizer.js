var enums = require('../../common/enums'),
    extendFn = require('util')._extend,
    ukraineStates = enums.states.ukraine,
    registrationStates = enums.documents;


var statesMap = {
        "Любой": ukraineStates.any,
        "Винница": ukraineStates.vinnitsa,
        "Днепропетровск": ukraineStates.dnepropetrovsk,
        "Донецк": ukraineStates.donetsk,
        "Житомир": ukraineStates.gitomir,
        "Запорожье": ukraineStates.zaporozie,
        "Ивано-Франковск": ukraineStates.ivanofrankovsk,
        "Керчь": ukraineStates.kerch,
        "Киев": ukraineStates.kiev,
        "Кировоград": ukraineStates.kirovograd,
        "Кременчуг": ukraineStates.kremenchyg,
        "Кривой Рог": ukraineStates.krivoirog,
        "Крым": ukraineStates.crimia,
        "Луганск": ukraineStates.lygansk,
        "Луцк": ukraineStates.lyck,
        "Львов": ukraineStates.lviv,
        "Мелитополь": ukraineStates.melitopol,
        "Николаев": ukraineStates.nikolaev,
        "Одесса": ukraineStates.odessa,
        "Полтава": ukraineStates.poltava,
        "Ровно": ukraineStates.rovno,
        "Севастополь": ukraineStates.sevastopol,
        "Симферополь": ukraineStates.simferopol,
        "Сумы": ukraineStates.symi,
        "Тернополь": ukraineStates.ternopol,
        "Ужгород": ukraineStates.uzgorod,
        "Феодосия": ukraineStates.feodosia,
        "Харьков": ukraineStates.kharkiv,
        "Херсон": ukraineStates.herson,
        "Хмельницкий": ukraineStates.hmelnitskii,
        "Черкассы": ukraineStates.cherkassi,
        "Чернигов": ukraineStates.chernigov,
        "Черновцы": ukraineStates.chernovtsi
    },
    registrationMap = {
        'Без документов': registrationStates.absent,
        'Модель не для дорог общего пользования': registrationStates.absent,
        'Не растаможен(есь зарубежные доки)': registrationStates.import,
        '"Свои" документы(деланые)': registrationStates.fake,
        'Снят с учета': registrationStates.unregistered,
        'Стоит на укр.учете': registrationStates.registered,
        'Справка-счет на покупателя': registrationStates.invoice
    };


function ModelNormalizer(object) {
    var copy = extendFn({}, object);

    copy.region = statesMap[object.region];
    copy.documents = registrationMap[object.documents];

    return copy;
}

module.exports = modelNormalizer;