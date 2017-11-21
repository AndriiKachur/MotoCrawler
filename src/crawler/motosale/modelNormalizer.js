module.exports = ModelNormalizer;

const enums = require('../../common/enums'),
    extendFn = require('util')._extend,
    ukraineStates = enums.states.ukraine,
    registrationStates = enums.documents,
    motoType = enums.type;

const regionTransformMap = {
        "Любой": ukraineStates.any,
        "Винница": ukraineStates.vinnytsia,
        "Днепропетровск": ukraineStates.dnepropetrovsk,
        "Донецк": ukraineStates.donetsk,
        "Житомир": ukraineStates.zhytomyr,
        "Запорожье": ukraineStates.zaporizhzhia,
        "Ивано-Франковск": ukraineStates.ivanoFrankivsk,
        "Керчь": ukraineStates.kerch,
        "Киев": ukraineStates.kyiv,
        "Кировоград": ukraineStates.kirovohrad,
        "Кременчуг": ukraineStates.kremenchyg,
        "Кривой Рог": ukraineStates.kryvyiRih,
        "Крым": ukraineStates.crimia,
        "Луганск": ukraineStates.luhansk,
        "Луцк": ukraineStates.lutsk,
        "Львов": ukraineStates.lviv,
        "Мелитополь": ukraineStates.melitopol,
        "Николаев": ukraineStates.mykolaiv,
        "Одесса": ukraineStates.odesa,
        "Полтава": ukraineStates.poltava,
        "Ровно": ukraineStates.rivne,
        "Севастополь": ukraineStates.sevastopol,
        "Симферополь": ukraineStates.simferopol,
        "Сумы": ukraineStates.sumy,
        "Тернополь": ukraineStates.ternopil,
        "Ужгород": ukraineStates.uzhhorod,
        "Феодосия": ukraineStates.feodosia,
        "Харьков": ukraineStates.kharkiv,
        "Херсон": ukraineStates.kherson,
        "Хмельницкий": ukraineStates.khmelnytskyi,
        "Черкассы": ukraineStates.cherkasy,
        "Чернигов": ukraineStates.chernihiv,
        "Черновцы": ukraineStates.chernivtsi,
        "Каменец-Подольский": ukraineStates.kamenetsPodolski,
        "Краматорск": ukraineStates.kramatorsk,
        "Бердянск": ukraineStates.berdyansk,
        "Каменское": ukraineStates.kamenskoe,
        "Мариуполь": ukraineStates.mariupol
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


function ModelNormalizer(object) {
    let copy = extendFn({}, object);

    copy.region = regionTransformMap[object.region];
    copy.documents = documentsTransformMap[object.documents];
    copy.type = typeTransformMap[object.type];
    copy.price = isNaN(object.price) ? 0 : object.price;

    return copy;
}
