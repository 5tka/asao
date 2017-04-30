console.log('hello from script.js');
var windowSize = document.documentElement.clientWidth;
var windowHeight = document.documentElement.clientHeight;


$(document).ready(function(){
    /*xeon */
    var width = document.documentElement.clientWidth;

    function js_posHmenu () {
         if (width >=60) {
            if ($('.container').width() - $('.js_posHmenu').offset().left <= 300) {
                $('.js_posHmenu').addClass('right');
            } else {
                $('.js_posHmenu').removeClass('right');
            }
            if ($('.js_posHmenu').hasClass('right')) {
                $('.js_posHmenu').find('.hmenu').css('width', $('.js_posHmenu').offset().left + $('.js_posHmenu').width() - 15 )
            } else {
                $('.js_posHmenu').find('.hmenu').css('width', $('.container').width() - $('.js_posHmenu').offset().left - 15);
            }
        } else if (width >= 1240) {
             $('.js_posHmenu').find('.hmenu').css('width','');
        } else {
            $('.js_posHmenu').removeClass('right');
            $('.js_posHmenu').find('.hmenu').css('width', $('.container').width()).css('left', $('.js_posHmenu').offset().left * (-1)+15 );
        }
    }

    $(window).resize(function(event) {
        /* Act on the event */
        width = document.documentElement.clientWidth;
        if (width > 700 && width <= 1009) {
            $('.hiddenmenu-table').css('width', width-30-200)
        }
        else if (width >= 1009 && width <=1280 ){
            $('.hiddenmenu-table').css('width', width-30-400)
        }
        /* шапка ПРОИЗВОДИТЕЛИ*/
        js_posHmenu ();


    });

    js_posHmenu ();

    if (width > 700 && width <= 1009) {
        $('.hiddenmenu-table').css('width', width-30-200)
    }
    else if (width >= 1009 && width <=1280 ){
        $('.hiddenmenu-table').css('width', width-30-400)
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

    // $('.producers-slider').bxSlider(optProducers);
    /* /producers js */
    var itemsNum = 0;
    var owl = $('.producers-slider');

    owl.on('initialized.owl.carousel', function(event) {
        var itemCount =  event.item.count;
        var size      = event.page.size;
        var dragLength = 100 / (itemCount/size);
        console.log(itemCount+'+size'+size);
        var owlThis = $(this);
        console.log(owlThis.next('.range'));
        owlThis.closest('.js_prodSlider-wrap').find('.range').ionRangeSlider({
        type: "single",
        min: 1,
        max: itemCount - (size - 1),
        keyboard: true,
        step: 1,
        from: 1,
        onChange: function (data) {
          //owl.trigger('changed.owl.carousel', [???]);
              owlTo = (data.from) - 1;
              console.log("Позиция ползунка: " + owlTo);
              owlThis.trigger('to.owl.carousel', [owlTo, 500, true]);
        }
      });

      $(this).closest('.js_prodSlider-wrap').find('.irs-slider.single').css('width', dragLength + "%")

    });

    //Слайдер
    owl.owlCarousel({
        loop:false,
        margin:10,
        dots: false,
        slideBy:1,
        items: 6,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            500:{
                items:3
            },
            600:{
                items:4
            },
            700:{
                items:5
            },
            900:{
                items:6
            }
        }
    });

    // owl.on('dragged.owl.carousel', function(event) {
    //     var itemCount =  event.item.count;
    //       var size      = event.page.size;
    //       var curItem = event.item.index + 1;
    //       var dragLength = 100 / (itemCount/size);
    //       var parent=$(this).closest('.js_prodSlider-wrap');
    //       console.log(curItem);
    //         parent.find('.range').data("ionRangeSlider").update({from: curItem});
    //         parent.find('.irs-slider.single').css('width', dragLength + "%");
    // });

    owl.on('resized.owl.carousel', function(event) {
        var itemCount =  event.item.count;
        var size      = event.page.size;
        var curItem = event.item.index + 1;
        var dragLength = 100 / (itemCount/size);
        var parent=$(this).closest('.js_prodSlider-wrap');
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
        e.preventDefault();
        $('.products__cat-item.opened').removeClass('opened');
        var parentLI=$(this).closest('.products__cat-item');
        if (parentLI.hasClass('opened')) {
            parentLI.find('.hiddenmenu-table').hide();
            return false;
        }
        $('.hiddenmenu-table').hide();
        parentLI.addClass('opened').find('.hiddenmenu-table').show();

        return false;
    })

    $('.block__notation-link').click(function(event) {
        /* Act on the event */
        var parentBl=$(this).closest('.hiddenmenu-blocks-wrap')
        parentBl.find('.block__notation-link.active').removeClass('active');
        parentBl.find('.block__info-content.active').removeClass('active');
        $(this).addClass('active');
        parentBl.find('.block__info-content').eq($(this).data('num')).addClass('active');

    });

    $('.cats .cat-title').click(function (event) {
        if (width<=1024 && width > 440) {
            $('.cats-toggle').fadeToggle();
        }
        if (width<=440) {
            $(this).next('.cats-toggle').slideToggle();
        }
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

    $('.accord .catalogs-item .page-aside-list .page-aside-link--active').click(function(e){

        e = event.preventDefault();

        $(this).nextAll().stop(true).slideToggle("slow");

    });
    $('.footer-block__caption').click(function(e){
        e = event.preventDefault();

        $(this).nextAll().stop(true).slideToggle('slow')
    });





}); // document.ready
