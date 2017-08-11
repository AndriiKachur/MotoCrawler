module.exports = MotoListPageCrawler;

const Crawler = require('crawler'),
	jsdom = require('jsdom/lib/old-api'),
	motoPageCrawler = require('./MotoPageCrawler'),
	enums = require('../../common/enums'),
	logger = require('../../common/logger')();

const SELECTOR_ADS_TITLE = 'div > div> table > tbody > tr > td > h2 > a';

let pageNumber = 0;


const crawler = new Crawler({
    jQuery: jsdom,
    forceUTF8: true,
    maxConnections : 30,
    callback : function (error, result, done) {
		const $ = result.$;

        if (error) {
			logger.warn(error, arguments);
			done();
			return;
        }

        $(SELECTOR_ADS_TITLE).each(function(index, a) {
            motoPageCrawler(enums.domains.motosale +  $(a).attr('href'));
        });

        done();
    }
});

function MotoListPageCrawler(url) {
	logger.log(pageNumber++, 'list page parsing');

    crawler.queue(url);
}




