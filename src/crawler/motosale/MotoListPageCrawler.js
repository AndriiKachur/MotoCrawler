module.exports = MotoListPageCrawler;

const Crawler = require('crawler'),
	jsdom = require('jsdom'),
	motoPageCrawler = require('./MotoPageCrawler'),
	enums = require('../../common/enums'),
	logger = require('../../common/logger')();

const SELECTOR_ADS_TITLE = 'div > div> table > tbody > tr > td > h2 > a';

let pageNumber = 0;


const crawler = new Crawler({
    jQuery: jsdom,
    forceUTF8: true,
    maxConnections : 30,
    callback : function (error, result, $) {
        if (error) {
			logger.warn(error, arguments);
			return;
        }

        $(SELECTOR_ADS_TITLE).each(function(index, a) {
            motoPageCrawler(enums.domains.motosale +  $(a).attr('href'));
        });
    }
});

function MotoListPageCrawler(url) {
	logger.log(pageNumber++, 'list page parsing');

    crawler.queue(url);
}




