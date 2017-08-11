module.exports = MotosaleCrawler;

const Crawler = require('crawler'),
    jsdom = require('jsdom/lib/old-api'),
    motoListPageCrawler = require('./MotoListPageCrawler'),
    enums = require('../../common/enums'),
	logger = require('../../common/logger')();

const MOTOSALE_DOMAIN = enums.domains.motosale,
    DEFAULT_PAGE_LIST_PARAMS = '?search=moto&model=&price[min]=&price[max]=&city=&in[min]=&in[max]=&run=&v=&type_obj=1&offset=',
    SELECTOR_MAX_PAGE = 'a:contains("Следующая")';


function MotosaleCrawler() {
	logger.log('motosale crawler started');

    let siteCrawler = new Crawler({
        forceUTF8: true,
        jQuery: jsdom,
        maxConnections : 10,
        callback : function (error, result, done) {
        	const $ = result.$;

            if (error) {
				logger.warn(error);
				done();
				return;
            }

            let maximumMotoPageCount = parseInt( $(SELECTOR_MAX_PAGE).first().prev().text() ) - 1,
                nextPageListUrl = null,
                i = 0;

            if (!isNaN(maximumMotoPageCount) && maximumMotoPageCount > 0) {

				logger.log(maximumMotoPageCount, 'pages found');

                for (i = 0; i <= maximumMotoPageCount; ++i) {
                    nextPageListUrl = MOTOSALE_DOMAIN + DEFAULT_PAGE_LIST_PARAMS + i * 10;
                    motoListPageCrawler(nextPageListUrl);

                    //TODO: break for parse 1 page only, debug
                    //if (i > 2) break;

                }

            }

            done();

        }
    });

    siteCrawler.queue(MOTOSALE_DOMAIN + DEFAULT_PAGE_LIST_PARAMS + '0');
}

