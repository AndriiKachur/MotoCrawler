var enums = require('../../common/enums'),
    extendFn = require('util')._extend,
    ukraineStates = enums.states.ukraine,
    registrationStates = enums.documents,
    motoType = enums.type;


var regionTransformMap = {
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

    documentsTransformMap = {
        'Без документов': registrationStates.absent,
        'Модель не для дорог общего пользования': registrationStates.absent,
        'Не растаможен(есь зарубежные доки)': registrationStates.import,
        '"Свои" документы(деланые)': registrationStates.fake,
        'Снят с учета': registrationStates.unregistered,
        'Стоит на укр.учете': registrationStates.registered,
        'Справка-счет на покупателя': registrationStates.invoice
    },

    typeTransformMap = {
        'Cнегоход': motoType.other,
        'Гидроцикл': motoType.other,
        'Кастом': motoType.custom,
        'Квадроцикл': motoType.quadro,
        'Классик': motoType.classic,
        'Кросс': motoType.other,
        'Макси-Скутер': motoType.skuter,
        'Неоклассик': motoType.classic,
        'Питбайк': motoType.other,
        'Скутер': motoType.skuter,
        'Спорт': motoType.sport,
        'Спорт-турист': motoType.sportTourist,
        'Супер-мото': motoType.other,
        'Трайк': motoType.trike,
        'Триал-мото': motoType.other,
        'Турист': motoType.tourist,
        'Чоппер': motoType.chopper,
        'Эндуро': motoType.enduro
    };


function modelNormalizer(object) {
    var copy = extendFn({}, object);

    copy.region = regionTransformMap[object.region];
    copy.documents = documentsTransformMap[object.documents];
    copy.type = typeTransformMap[object.type];
    copy.price = isNaN(object.price) ? 0 : object.price;

    return copy;
}

module.exports = modelNormalizer;