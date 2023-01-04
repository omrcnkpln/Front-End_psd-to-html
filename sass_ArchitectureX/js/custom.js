$(function() {

	
	var sHeight = $('ul.icons').outerHeight();
	$('ul.icons').css("margin-top","-" + sHeight + "px");

	var tWidth = $('.tab-button').outerWidth() / 2;
	$('.tab-button').css("margin-left","-" + tWidth + "px");

	// slider
	$('.slide').hide();
	$('.slide:first').show();
	var toplamSlider = $('.slider-item .slide').size();
	for(var i = 1;i <= toplamSlider;i++){
		$('ul.circles').append('<li>'+ i +'</li>');
	}

	$('ul.circles li:first').addClass("active");
	$('ul.circles li').stop().click(function(){
		var index = $(this).index();
		$('.slide').fadeOut(750);
		$(".slide:eq(" + index + ")").fadeIn(750);
		$('ul.circles li').removeClass("active");
		$(this).addClass("active");
		sifir = index;

	});

	var sifir = 0;
	var toplamLi = $('.slide').size();
	$.dondur = function(){
			$('ul.circles li').removeClass("active");
			$('.slide').fadeOut(750);

		if(sifir < toplamLi - 1){
			sifir++;
			$('.slide').fadeOut(750);
			$(".slide:eq("+ sifir +")").fadeIn(750);
			$('ul.circles li:eq('+ sifir +')').addClass("active");

		}else{
			sifir = 0;
			$('.slide:first').fadeIn(750);
			$('ul.circles li:first').addClass("active");
		}

	}

	var sliderDondur = setInterval('$.dondur()',2500);

	$('ul.circles').hover(function(){

		clearInterval(sliderDondur);

	},function(){
		sliderDondur = setInterval('$.dondur()',3000);
	});

	$('.slide').hover(function(){

		clearInterval(sliderDondur);

	},function(){
		sliderDondur = setInterval('$.dondur()',3000);
	})


	var deger = $('ul.circles li').outerWidth(true);
	$('ul.circles').css("margin-left","-" + deger + "px");

})