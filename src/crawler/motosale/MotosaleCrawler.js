var Crawler = require('crawler'),
    url = require('url'),
    jsdom = require('jsdom'),
    motoListPageCrawler = require('./MotoListPageCrawler'),
    enums = require('../../common/enums');

var MOTOSALE_DOMAIN = enums.domains.motosale,
    DEFAULT_PAGE_LIST_PARAMS = '?search=moto&model=&price[min]=&price[max]=&city=&in[min]=&in[max]=&run=&v=&type_obj=1&offset=',
    SELECTOR_MAX_PAGE = 'a:contains("Следующая")';


module.exports = MotosaleCrawler;

function MotosaleCrawler() {
    console.log('motosale crawler started');


    var c = new Crawler({
        forceUTF8: true,
        jQuery: jsdom,
        maxConnections : 10,
        callback : function (error, result, $) {

            if (error) {
                console.warn(error);
            }

            var maximumMotoPageCount = parseInt( $(SELECTOR_MAX_PAGE).first().prev().text() ) - 1,
                nextPageListUrl = null,
                i = 0;

            if (!isNaN(maximumMotoPageCount) && maximumMotoPageCount > 0) {

                console.log(maximumMotoPageCount, 'pages found');

                for (i = 0; i <= maximumMotoPageCount; ++i) {
                    nextPageListUrl = MOTOSALE_DOMAIN + DEFAULT_PAGE_LIST_PARAMS + i * 10;
                    motoListPageCrawler(nextPageListUrl);

                    if (i > 2) {
                        break;
                    }

                }

            }

        }
    });

    c.queue(MOTOSALE_DOMAIN + DEFAULT_PAGE_LIST_PARAMS + '0');
}

