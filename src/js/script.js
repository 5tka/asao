console.log('hello from script.js');
$(document).ready(function(){
    /*xeon */
    var width = document.documentElement.clientWidth;
    $(window).resize(function(event) {
        /* Act on the event */
        width = document.documentElement.clientWidth;
        if (width<=1024 && width>700) {
            $('.hiddenmenu-table').css('width', width-30-192)
        }
    });

    if (width<=1024 && width>700) {
        $('.hiddenmenu-table').css('width', width-30-192)
    }
    $('.block__notation-title .close').click(function(e){
        $(this).closest('.hiddenmenu-table').hide();
    })
    $('.js_select').select2({
    	minimumResultsForSearch: Infinity
    });

    $('.main-slider').bxSlider({
        pager:!1,
        nextText:"",
        prevText:"",
        infiniteLoop: !1
    });
    var optProducers={};
    if (width>=1240) {
        optProducers = {
            pager:!1,
            nextText:"",
            prevText:"",
            infiniteLoop: !1,
            slideMargin: 42,
             slideWidth: 160 ,
            minSlides:6,
            maxSlides:6,
            moveSlides:2
        }
    } else if (width<1240 && width >700) {
        optProducers = {
            pager:!1,
            nextText:"",
            prevText:"",
            infiniteLoop: !1,
            slideMargin: 58,
             slideWidth: 160 ,
            minSlides:4,
            maxSlides:4,
            moveSlides:2
        }
    } else if (width <=700) {
        optProducers = {
            pager:!1,
            nextText:"",
            prevText:"",
            infiniteLoop: !1,
            slideMargin: 70,
             slideWidth: 160 ,
            minSlides:2,
            maxSlides:2,
            moveSlides:2
        }
    }
    $('.producers-slider').bxSlider(optProducers);

    $('.grayscale').gray();
    $('.grayscale').hover(function() {
            $(this).addClass('grayscale-off');
        },
        function() {
            $(this).removeClass('grayscale-off');
        }
    )

    $('.products__cat-link').on('click',function(e){
        e.preventDefault();
        if ($(this).next('.hiddenmenu-table').css('display')=='block') {
            $(this).next('.hiddenmenu-table').hide();
            return false;
        }
        $('.hiddenmenu-table').hide();
        $(this).next('.hiddenmenu-table').show();

        return false;
    })
    $('.cats .cat-title').click(function (event) {
        if (width<=1024 && width > 440) {
            $('.cats-toggle').fadeToggle();
        }
        if (width<=440) {
            $(this).next('.cats-toggle').slideToggle();
        }
    })
    /* end xeon */

    $('.bestsellerItems-slider').bxSlider({
        slideWidth: 205,
        // slideWidth: 194,
        // infiniteLoop: false,
        // slideMargin: 15,
        pager:!1,
        nextText:"",
        prevText:"",
        minSlides:1,
        maxSlides:4,
        moveSlides:1,
    });
    var all = $('.double__slider-wrap .title') // клас стиля ссылки
	all.click( function(){
		all.removeClass('title--active')   // клас активной ссылки
		$(this).addClass('title--active')
	})
    $('.slide-ev2').parent().parent().addClass('dn');
    $('.title-ev1').click(function(){
        $('.slide-ev2')
            .parent()
            .parent()
            .removeClass('db')
            .addClass('dn');

        $('.slide-ev1')
            .parent()
            .parent()
            .removeClass('dn')
            .addClass('db');
    });
    $('.title-ev2').click(function(){
        $('.slide-ev2')
            .parent()
            .parent()
            .removeClass('dn')
            .addClass('db');

        $('.slide-ev1')
            .parent()
            .parent()
            .removeClass('db')
            .addClass('dn');
    });
});
