console.log('hello from script.js');
var windowSize = document.documentElement.clientWidth;
var windowHeight = document.documentElement.clientHeight;
$(document).ready(function(){

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