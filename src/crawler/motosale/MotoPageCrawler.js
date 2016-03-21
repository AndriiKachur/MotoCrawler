var Crawler = require('crawler'),
    jsdom = require('jsdom'),
    url = require('url'),
    modelNormalizer = require('./modelNormalizer'),
    database = require('../../common/database');

var SELECTOR_MAIN_MOTO_INFO = 'div.main > table > tbody > tr > td[colspan="2"] a',
    SELECTOR_PRICE = 'div.main > table table td > b',
    SELECTOR_ENGINE_CC = 'td:contains("Объём двигателя") + td[valign="middle"]',
    SELECTOR_DOCUMENTS = 'td:contains("Документы") + td[valign="middle"]',
    SELECTOR_THEME = 'td:contains("Тема") + td[valign="middle"]',
    SELECTOR_MESSAGE = 'td:contains("Сообщение") + td[valign="top"]';

function MotoPageCrawler(url) {
    var crawler = new Crawler({
        jQuery: jsdom,
        forceUTF8: true,
        maxConnections : 1,
        callback : function (error, result, $) {
            if (error) {
                console.warn(error, arguments);
            }

            var info = extractMainMotoInfo($);

            if (!info) {
                console.warn('Cant parse main info', url);
                return;
            }

            info.url = url;
            info = modelNormalizer(info);

            database.saveMotoInfo(info);
        }
    });

    crawler.queue(url);
}

module.exports = MotoPageCrawler;


function extractMainMotoInfo($) {
    var infoElems = $(SELECTOR_MAIN_MOTO_INFO),
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
        documents: $(SELECTOR_DOCUMENTS).text(),
        title: $(SELECTOR_THEME).text(),
        message: messageElement.text()
    };
}


