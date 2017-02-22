console.log('hello from script.js');
var windowSize = document.documentElement.clientWidth;
var windowHeight = document.documentElement.clientHeight;
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

    var slider;
    slider = $('#main .bestsellerItems-slider').bxSlider({
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
