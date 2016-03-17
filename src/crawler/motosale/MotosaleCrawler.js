var Crawler = require('crawler'),
    url = require('url'),
    motoPageCrawler = require('./MotoPageCrawler');

var MOTOSALE_DOMAIN = 'http://www.motosale.com.ua/';

function MotosaleCrawler() {
    console.log('motosale crawler started');


    var c = new Crawler({
        forceUTF8: true,
        maxConnections : 10,
        callback : function (error, result, $) {
            $('div > div> table > tbody > tr > td > h2 > a').each(function(index, a) {
                motoPageCrawler(MOTOSALE_DOMAIN +  $(a).attr('href'));
            });
        }
    });

    c.queue(MOTOSALE_DOMAIN + '?search=moto&model=&price[min]=&price[max]=&city=&in[min]=&in[max]=&run=&v=&type_obj=1');

}

module.exports = MotosaleCrawler;