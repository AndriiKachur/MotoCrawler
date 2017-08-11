module.exports = MotoPageCrawler;

const Crawler = require('crawler'),
    jsdom = require('jsdom'),
    modelNormalizer = require('./ModelNormalizer'),
    database = require('../../common/database'),
	logger = require('../../common/logger')();

const SELECTOR_MAIN_MOTO_INFO = 'div.main > table > tbody > tr > td[colspan="2"] a',
    SELECTOR_PRICE = 'div.main > table table td > b',
    SELECTOR_ENGINE_CC = 'td:contains("Объём двигателя") + td[valign="middle"]',
    SELECTOR_DOCUMENTS = 'td:contains("Документы") + td[valign="middle"]',
    SELECTOR_THEME = 'td:contains("Тема") + td[valign="middle"]',
    SELECTOR_MESSAGE = 'td:contains("Сообщение") + td[valign="top"]',
	SELECTOR_YEAR = 'td:contains("Год выпуска") + td[valign="middle"]';


function MotoPageCrawler(url) {
    pageCrawler.queue(url);
}


let pageCrawler = new Crawler({
    jQuery: jsdom,
    forceUTF8: true,
    maxConnections : 100,
    callback : function (error, result, $) {
        if (error) {
			logger.warn(error, arguments);
			return;
        }

        let url = $.ajaxSettings.url,
            info = extractMainMotoInfo($);

        if (!info) {
			logger.warn('Cant parse main info', url);
            return;
        }

        info.url = url;
        info = modelNormalizer(info);

        database.saveMotoInfo(info);
    }
});

function extractMainMotoInfo($) {
    let infoElems = $(SELECTOR_MAIN_MOTO_INFO),
        messageElement = $(SELECTOR_MESSAGE).first();

    if (!infoElems.length) {
        return;
    }

    messageElement.find('#anti_parser').remove();

    return {
        type: infoElems[0].text,
        region: infoElems[1].text,
        manufacture: infoElems[2].text,
        model: infoElems[3].text,
        price: parseInt( $(SELECTOR_PRICE).text() ),
        cc: parseInt( $(SELECTOR_ENGINE_CC).text() ),
		year: parseInt( $(SELECTOR_YEAR).text() ),
        documents: $(SELECTOR_DOCUMENTS).text(),
        title: $(SELECTOR_THEME).text(),
        message: messageElement.text()
    };
}


