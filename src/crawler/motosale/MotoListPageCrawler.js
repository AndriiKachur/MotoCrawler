var Crawler = require('crawler'),
    jsdom = require('jsdom'),
    motoPageCrawler = require('./MotoPageCrawler'),
    enums = require('../../common/enums');

var SELECTOR_MAIN_MOTO_INFO = 'div.main > table > tbody > tr > td[colspan="2"] a',
    SELECTOR_PRICE = 'div.main > table table td > b',
    SELECTOR_ENGINE_CC = 'td:contains("Объём двигателя") + td[valign="middle"]',
    SELECTOR_DOCUMENTS = 'td:contains("Документы") + td[valign="middle"]';

var c = 0;

function MotoListPageCrawler(url) {
    var crawler = new Crawler({
        jQuery: jsdom,
        forceUTF8: true,
        maxConnections : 1,
        callback : function (error, result, $) {
            if (error) {
                console.warn(error, arguments);
            }

            $('div > div> table > tbody > tr > td > h2 > a').each(function(index, a) {
                motoPageCrawler(enums.domains.motosale +  $(a).attr('href'));
            });
        }
    });

    console.log(c++, 'list page parsing');

    crawler.queue(url);
}

module.exports = MotoListPageCrawler;



