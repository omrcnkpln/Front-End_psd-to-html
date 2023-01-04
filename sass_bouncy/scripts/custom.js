$(function(){

    $('#header').height($(window).height());

    $(window).resize(function(){
       var height = $(window).height();
        $('#header').css("height",height + "px");
    })

    $('#tab-content ul li').hide();
    $('#tab-content ul li:first').show();

    $('ul.tab-menu li:first').addClass('active');
    $('ul.tab-menu li').click(function(){
        index = $(this).index();
        $('#tab-content ul li').fadeOut(450);
        $('#tab-content ul li:eq('+ index +')').fadeIn(450);
        $('ul.tab-menu li').removeClass('active');
        $(this).addClass('active');
    })

    $('.tab-menu ul li:first').addClass('active');
    $('.tab-menu ul li.web').click(function () {
        $('.tab').hide();
        $('.web-c').show(500);
        $('.tab-menu ul li').removeClass('active');
        $(this).addClass('active');
    });
    $('.tab-menu ul li.print').click(function () {
        $('.tab').fadeOut();
        $('.print-c').fadeIn(500);
        $('.tab-menu ul li').removeClass('active');
        $(this).addClass('active');
    })
    $('.tab-menu ul li.identy').click(function () {
        $('.tab').fadeOut(500);
        $('.identy-c').fadeIn(500);
        $('.tab-menu ul li').removeClass('active');
        $(this).addClass('active');
    })
    $('.tab-menu ul li.branding').click(function () {
        $('.tab').fadeOut(500);
        $('.branding-c').fadeIn(500);
        $('.tab-menu ul li').removeClass('active');
        $(this).addClass('active');
    })
    $('.tab-menu ul li.html').click(function () {
        $('.tab').fadeOut(500);
        $('.html-c').fadeIn(500);
        $('.tab-menu ul li').removeClass('active');
        $(this).addClass('active');
    })
    $('.tab-menu ul li.wordpress').click(function () {
        $('.tab').fadeOut(500);
        $('.wordpress-c').fadeIn(500);
        $('.tab-menu ul li').removeClass('active');
        $(this).addClass('active');
    })
    $('.tab-menu ul li.all').click(function () {
        $('.tab').fadeOut();
        $('.tab').fadeIn(500);
        $('.tab-menu ul li').removeClass('active');
        $(this).addClass('active');
    })




    // sslider
    var toplamSlider = $('.team-item').size();
    var itemWidth = $('.team-item').width();
    var toplamWidth = toplamSlider * itemWidth;
    var deger = 0;

    $('div.team').css("width",toplamWidth + "px");

    for(var i = 1;i <= toplamSlider;i++){
        $('ul.slider-button').append('<li>' + i + '</li>')
    }

    $('ul.slider-button li:first').addClass('active');

    $('ul.slider-button li').stop().click(function () {
        index = $(this).index();
        yeniWidth = itemWidth * index;
        $('div.team').animate({marginLeft:"-" + yeniWidth + "px"},500);
        deger = index;
        $('ul.slider-button li').removeClass('active');
        $(this).addClass('active');
    });


    // slider
    var totalSlider = $('.slider-item').size();
    var liWidth = $('.slider-item').outerWidth();
    var totalWidth = toplamSlider * liWidth;
    var deger = 0;

    $('div.slider').css("width",totalWidth + "px");

    for(var a = 1;a <= totalSlider;a++){
        $('ul.slider-button-down').append('<li>' + a + '</li>')
    }

    $('ul.slider-button-down li:first').addClass('active');

    $('ul.slider-button-down li').stop().click(function () {
        index = $(this).index();
        totalNew = liWidth * index;
        $('div.slider').animate({marginLeft:"-" + totalNew + "px"},500);
        deger = index;
        $('ul.slider-button-down li').removeClass('active');
        $(this).addClass('active');
    })


    // slider
    var Slidertoplam = $('div.up-item').size();
    var liHeight = 690;
    var totalHeight = toplamSlider * liHeight;
    var deger = 0;
    var sure = 2000;

    $('div.up').css("height",totalHeight + "px");

    for(var e = 1;e <= Slidertoplam;e++){
        $('ul.slider-buton').append('<li>' + e + '</li>')
    }

    $('ul.slider-buton li:first').addClass('active');

    $('ul.slider-buton li').stop().click(function () {
        index = $(this).index();
        totalHe = liHeight * index;
        $('div.up').animate({marginTop:"-" + totalHe + "px"},500);
        deger = index;
        $('ul.slider-buton li').removeClass('active');
        $(this).addClass('active');
    })


    $('.boxes').hide();
    $('.boxes:first').show();

    $('section.details .icons ul li:first').addClass('active');
    $('section.details .icons ul li').click(function () {
        indis = $(this).index();
        $('.boxes').hide(0);
        $('.boxes:eq('+ indis +')').fadeIn(650);
        $('section.details .icons ul li').removeClass('active');
        $(this).addClass('active');
    })


    $('.menu ul li a,a.down').bind('click',function(e){
        var link = $(this);

        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top
        }, 1500);
        e.preventDefault();
    });

})