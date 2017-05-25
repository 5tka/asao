console.log('hello from script.js');
var windowSize = document.documentElement.clientWidth;
var windowHeight = document.documentElement.clientHeight;


$(document).ready(function(){
    /*xeon */
    var width = document.documentElement.clientWidth;

    /* карточка товару      */
    $("a.js_pagenav").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 60;
        $("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800);
        return false;
    });

    $('.js_full-height').click(function(event) {
        event.preventDefault();
            $(this).closest('.js_limited-height').find('.js_limited-height__object').toggleClass('opened');;
        return false;
    })

    $('.js_accordion-init').click(function(event) {
        event.preventDefault();
            if ($(this).closest('.js_accordion-item').hasClass('opened')) {
                $(this).next('.js_accordion-toggled').slideUp();
            } else {
                $(this).next('.js_accordion-toggled').slideDown();
            }
            $(this).closest('.js_accordion-item').toggleClass('opened');
        return false;
    });
    $('.js_accordion-slideUp').click(function(event) {
        event.preventDefault();
            $(this)
                .closest('.js_accordion-item')
                .toggleClass('opened')
                .find('.js_accordion-toggled').slideUp();
    });

    $('.js_production-slider').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        onInitialized: function (event) {
            $(event.target).removeClass('common-slider');
        },
        responsive:{
            0:{
                items: 1
            },
            500:{
                items: 2
            },
            800:{
                items: 3
            },
            900: {
                items: 4
            }
        }
    });

    $('.prod-card__preview-slider').owlCarousel({
        items: 3,
        nav: true,
        margin: 10,
        dots: false,
        onInitialized: function (event) {
            $(event.target).removeClass('common-slider');
        },
        responsive:{
            0:{
                items: 1
            },
            500:{
                items: 2
            },
            600:{
                items: 3
            },
            768:{
                items: 4
            },
            980: {
                items: 3
            }
        }
    });

    /* табы карточка товаров */
    $('.js_tabs-navigation .js_tabs-link').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        var parent = $(this).closest('.js_tabs');
            parent.find('.activated').removeClass('activated');
            parent.find($(this).addClass('activated').attr('href')).slideDown('fast', function (){
                $(this).addClass('activated').attr('style', '');
            })
        return false;
    });

    /* адаптивное меню */
    $('.js_menu-init').click(function(event) {
        /* Act on the event */
        event.preventDefault();
            $('.adaptive-menu__wrap').addClass('opened');
        return false;
    });
    $('.js_menu-close').click(function(event) {
        /* Act on the event */
        event.preventDefault();
            $('.adaptive-menu__wrap').removeClass('opened');
        return false;
    });


    function js_posHmenu() {
        var hmenu = $('.js_posHmenu').find('.hmenu'); // скрытое меню
        console.log('зашел'+width);
        if (width > 1239) {
            $('.js_posHmenu').removeClass('right').find('.hmenu').css('width','');
            return false;
        }
        if (width >380) {
            if (width >740) {
                if ($('.main .container').width() - $('.js_posHmenu').offset().left <= 300) {
                    $('.js_posHmenu').addClass('right');
                } else {
                    $('.js_posHmenu').removeClass('right');
                }
                if ($('.js_posHmenu').hasClass('right')) {
                    hmenu.css('width', $('.js_posHmenu').offset().left + $('.js_posHmenu').width() - 15 )
                } else {
                    hmenu.css('width', $('.main .container').width() - $('.js_posHmenu').offset().left);
                }
            } else {
                hmenu.css('width', $('.main .container').width() - 30 );
            }
        }
    }

    $(window).resize(function(event) {
        /* Act on the event */
        width = document.documentElement.clientWidth;
        hiddenmenuTable();
        /* шапка ПРОИЗВОДИТЕЛИ*/
        js_posHmenu();
    });

    js_posHmenu();
    function hiddenmenuTable() {
        if (width > 700 && width <= 1009) {
            $('.hiddenmenu-table').css('width', width-30-200)
        }
        else if (width >= 1009 && width <=1280 ){
            $('.hiddenmenu-table').css('width', width-30-400)
        }
    }
    hiddenmenuTable();
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

    // $('.producers-slider').bxSlider(optProducers);
    /* /producers js */
    var itemsNum = 0;
    var owl = $('.js_producersSlider').length ? $('.js_producersSlider'): $('.js_photoSlider') ;

    owl.on('initialized.owl.carousel', function(event) {
        var itemCount =  event.item.count;
        var size      =  event.page.size;
        var dragLength = 100 / (itemCount/size);
        // console.log(itemCount+'+size'+size);
        var owlThis = $(this);
        // console.log(owlThis.next('.range'));
        owlThis.closest('.js_scrollSlider-wrap').find('.range').ionRangeSlider({
        type: "single",
        min: 1,
        max: itemCount - (size - 1),
        keyboard: true,
        step: 1,
        from: 1,
        onChange: function (data) {
          //owl.trigger('changed.owl.carousel', [???]);
              owlTo = (data.from) - 1;
              // console.log("Позиция ползунка: " + owlTo);
              owlThis.trigger('to.owl.carousel', [owlTo, 500, true]);
        }
      });

      $(this).closest('.js_scrollSlider-wrap').find('.irs-slider.single').css('width', dragLength + "%")

    });

    var options = $('.js_producersSlider').length ? 6 : 5;
    owl.owlCarousel({
        loop:false,
        margin: options == 6 ? 10 : 0, // 10 для производителей и 0 для фотогалереи со скроллом
        dots: false,
        slideBy:1,
        items: options,
        responsiveClass:true,
        responsive:{
            0:{
                items: 1
            },
            500:{
                items: 2
            },
            600:{
                items: options -2
            },
            700:{
                items: options - 1
            },
            900:{
                items: options
            }
        }
    });

    //Слайдер


    // owl.on('dragged.owl.carousel', function(event) {
    //     var itemCount =  event.item.count;
    //       var size      = event.page.size;
    //       var curItem = event.item.index + 1;
    //       var dragLength = 100 / (itemCount/size);
    //       var parent=$(this).closest('.js_scrollSlider-wrap');
    //       console.log(curItem);
    //         parent.find('.range').data("ionRangeSlider").update({from: curItem});
    //         parent.find('.irs-slider.single').css('width', dragLength + "%");
    // });

    owl.on('resized.owl.carousel', function(event) {
        var itemCount =  event.item.count;
        var size      = event.page.size;
        var curItem = event.item.index + 1;
        var dragLength = 100 / (itemCount/size);
        var parent=$(this).closest('.js_scrollSlider-wrap');
        parent.find('.range').data("ionRangeSlider").update({
            max: itemCount - (size - 1),
            from: curItem
        });
        parent.find('.irs-slider.single').css('width', dragLength + "%");
    });

    /* /producers js */


    $('.grayscale').gray();
    $('.grayscale').hover(function() {
            $(this).addClass('grayscale-off');
        },
        function() {
            $(this).removeClass('grayscale-off');
        }
    )

    $('.products__cat-link').on('click',function(e){
        if (width>380) {
            e.preventDefault();
                var parentLI=$(this).closest('.products__cat-item');
                if (parentLI.hasClass('opened')) { // проверяем не был ли нажат повторно тот же пункт меню
                    parentLI.find('.hiddenmenu-table').hide();
                    return false;
                }
                $('.products__cat-item.opened').removeClass('opened');
                $('.hiddenmenu-table').hide();
                parentLI.addClass('opened').find('.hiddenmenu-table').show();
            return false;
        }
    })

    $('.block__notation-link').click(function(event) {
        /* Act on the event */
        var parentBl=$(this).closest('.hiddenmenu-blocks-wrap')
        parentBl.find('.block__notation-link.active').removeClass('active');
        parentBl.find('.block__info-content.active').removeClass('active');
        $(this).addClass('active');
        parentBl.find('.block__info-content').eq($(this).data('num')).addClass('active');

    });

    $('.mainpage__сats .cat-title').click(function (event) {
        if(width <= 1024 && width > 380 ){
            $('.cats-toggle').stop(true).slideToggle();
        } else {
            $('.cats-toggle').not($(this).next('.cats-toggle')).slideUp();
            $(this).next('.cats-toggle').stop(true).slideDown();
            console.log($(this).next('.cats-toggle'));
        }

    })
    $('.secondary__сats .cat-title').click(function (event) {
        $(this).closest('.cats').toggleClass('opened');
        $(this).next('.cats-toggle').stop(true).slideToggle();
    })
    /* end xeon */

    var slider;
    slider = $('.main .bestsellerItems-slider').bxSlider({
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


    $('.montag-items-slider').bxSlider({
        pager:!1,
        nextText:"",
        prevText:"",
        minSlides:1,
        maxSlides:3,
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

    var b_link = $('.bonus-info-title span') // клас стиля ссылки
	b_link.click( function(){
		b_link.removeClass('b-info--active')   // клас активной ссылки
		$(this).addClass('b-info--active')
	})
    $('.bonus-info-1 .b-info-1').click(function(){
        $('.bonus-info-1 .b-info-content-1').addClass('df');
        $('.bonus-info-1 .b-info-content-2').addClass('dn');
        $('.bonus-info-1 .b-info-content-2').removeClass('df');
    });
    $('.bonus-info-1 .b-info-2').click(function(){
        $('.bonus-info-1 .b-info-content-2').addClass('df');
        $('.bonus-info-1 .b-info-content-1').addClass('dn');
        $('.bonus-info-1 .b-info-content-1').removeClass('df');
    });
    $('.bonus-info-2 .b-info-1').click(function(){
        $('.bonus-info-2 .b-info-content-1').addClass('df');
        $('.bonus-info-2 .b-info-content-2').addClass('dn');
        $('.bonus-info-2 .b-info-content-2').removeClass('df');
    });
    $('.bonus-info-2 .b-info-2').click(function(){
        $('.bonus-info-2 .b-info-content-2').addClass('df');
        $('.bonus-info-2 .b-info-content-1').addClass('dn');
        $('.bonus-info-2 .b-info-content-1').removeClass('df');
    });


    // personal
    
    $('.personal-login-data .ld-1').click(function(){
        
        $('.personal-login-data .ld-1').addClass('ld--active');  
        $('.personal-login-data .ld-2').removeClass('ld--active');  
        $('.personal-login-info.ld-2').addClass('dn');
        $('.personal-login-info.ld-1').removeClass('dn');      

    });
    $('.personal-login-data .ld-2').click(function(){
        
        $('.personal-login-data .ld-2').addClass('ld--active');  
        $('.personal-login-data .ld-1').removeClass('ld--active');  
        $('.personal-login-info.ld-1').addClass('dn');
        $('.personal-login-info.ld-2').removeClass('dn');      

    });


    $('.accord .catalogs-item .page-aside-list .page-aside-link--active').click(function(e){

        e = event.preventDefault();

        $(this).nextAll().stop(true).slideToggle("slow");

    });
    $('.footer-block__caption').click(function(e){
        e = event.preventDefault();

        $(this).nextAll().stop(true).slideToggle('slow')
    });





}); // document.ready
