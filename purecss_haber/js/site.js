$(function() {
	// MANŞET ALANI
	$("ul#sayfalama > li:first").addClass("aktif");
	$("ul#manset li").hide();
	$("ul#manset li:first").show();
	var toplamLi = $("ul#manset li").length;
	var deger = 0;
	$("ul#sayfalama > li").hover(function() {
		var indis = $(this).index();
		$("ul#manset li").hide();
		$("ul#manset li:eq("+indis+")").fadeIn(250);
		$("ul#sayfalama > li").removeClass("aktif");
		$(this).addClass("aktif");
		deger = indis;
		return false;
	});
	$.dondur = function () {
		$("ul#sayfalama > li").removeClass("aktif");
		$("ul#manset li").hide();
		if (deger < toplamLi -1) {
			deger++;
			$("ul#manset li:eq("+deger+")").fadeIn(250);
			$("ul#sayfalama > li:eq("+deger+")").addClass("aktif");
		}else {
			deger = 0;
			$("ul#manset li:first").fadeIn(250);
			$("ul#sayfalama > li:first").addClass("aktif");
		}
		return false
	}
	var sliderDondur = setInterval('$.dondur()',5000);
	$(".manset").hover(function() {
		clearInterval(sliderDondur);
	},function() {
		sliderDondur = setInterval('$.dondur()',5000);
	});

	// VIP FİRMALAR
	var sliderKapsayici = $('.firmaList');
	var sliderCount = $('ul#firmaList li',sliderKapsayici).length;
	var sliderUlKapsayici = $('ul#firmaList',sliderKapsayici);
	var sliderWidth = 154;
	var degers = 0;
	sliderUlKapsayici.width(sliderWidth * sliderCount);
	$(".solContent > .vipF > .vipFu > span.sonraki").click(function() {
		if (degers < sliderCount -1) {
			degers = degers + 1;
			sliderUlKapsayici.animate({marginLeft:'-'+degers*sliderWidth+'px'});
		}else {
			degers = 0;
			sliderUlKapsayici.animate({marginLeft:'-'+degers*sliderWidth+'px'});
		}
		return false
	});
	$(".solContent > .vipF > .vipFu > span.onceki").click(function() {
		if (degers > 0) {
			degers = degers -1;
			sliderUlKapsayici.animate({marginLeft:'-'+degers*sliderWidth+'px'});
		}else {
			degers = sliderCount - 1;
			sliderUlKapsayici.animate({marginLeft:'-'+degers*sliderWidth+'px'});
		}
		return false;
	});
	$.fDondur = function () {
		if (degers < sliderCount -1) {
			degers = degers + 1;
			sliderUlKapsayici.animate({marginLeft:'-'+degers*sliderWidth+'px'});
		}else {
			degers = 0;
			sliderUlKapsayici.animate({marginLeft:'-'+degers*sliderWidth+'px'});
		}
		return false
	}
	var fDondurs = setInterval('$.fDondur()',3000);
	$(".solContent > .vipF").hover(function() {
		clearInterval(fDondurs);
	},function() {
		fDondurs = setInterval('$.fDondur()',3000);
	});

	// KARMA HABERLER
	$('.solContent > .kHaber > .kHaberMenu > ul#kHaberMenu > li').click(function() {
		if (!$(this).hasClass('aktif')) {
			$('.solContent > .kHaber > .kHaberMenu > ul#kHaberMenu > li').removeClass('aktif');
			$(this).addClass('aktif');
			$('.solContent > .kHaber > .kHaberList .karma').slideUp().eq($(this).index()).slideDown();
		}
		return false;
	});

	// ŞEHİR FIRSATLARI
	var sehirKapsayici = $('.sehirKapsa');
	var sehirCount = $('ul.firsatSlide li',sehirKapsayici).length;
	var sehirUlKapsayici = $('ul.firsatSlide',sehirKapsayici);
	var sehirWidth = 344;
	var sehirDeger = 0;
	sehirUlKapsayici.width(sehirWidth * sehirCount);
	$(".sagContent > .sehirFirsat > .firsatSlider > span.sonraki").click(function() {
		if (sehirDeger < sehirCount -1) {
			sehirDeger = sehirDeger + 1;
			sehirUlKapsayici.animate({marginLeft:'-'+sehirDeger*sehirWidth+'px'});
		}else {
			sehirDeger = 0;
			sehirUlKapsayici.animate({marginLeft:'-'+sehirDeger*sehirWidth+'px'});
		}
		return false
	});
	$(".sagContent > .sehirFirsat > .firsatSlider > span.onceki").click(function() {
		if (sehirDeger > 0) {
			sehirDeger = sehirDeger -1;
			sehirUlKapsayici.animate({marginLeft:'-'+sehirDeger*sehirWidth+'px'});
		}else {
			sehirDeger = sehirCount - 1;
			sehirUlKapsayici.animate({marginLeft:'-'+sehirDeger*sehirWidth+'px'});
		}
		return false;
	});
	$.sDondur = function () {
		if (sehirDeger < sehirCount -1) {
			sehirDeger = sehirDeger + 1;
			sehirUlKapsayici.animate({marginLeft:'-'+sehirDeger*sehirWidth+'px'});
		}else {
			sehirDeger = 0;
			sehirUlKapsayici.animate({marginLeft:'-'+sehirDeger*sehirWidth+'px'});
		}
		return false
	}
	var sDondurs = setInterval('$.sDondur()',5000);
	$(".firsatSlider").hover(function() {
		clearInterval(sDondurs);
	},function() {
		sDondurs = setInterval('$.sDondur()',5000);
	});

	// BURÇLAR
	var burcKapsayici = $('.burcKapsa');
	var burcCount = $('ul.burcList li',burcKapsayici).length;
	var burcUlKapsayici = $('ul.burcList',burcKapsayici);
	var burcWidth = 344;
	var burcDegers = 0;
	burcUlKapsayici.width(burcWidth * burcCount);
	$(".sagContent > .burclar > .burcUst > span.sonraki").click(function() {
		if (burcDegers < burcCount -1) {
			burcDegers = burcDegers + 1;
			burcUlKapsayici.animate({marginLeft:'-'+burcDegers*burcWidth+'px'});
		}else {
			burcDegers = 0;
			burcUlKapsayici.animate({marginLeft:'-'+burcDegers*burcWidth+'px'});
		}
		return false
	});
	$(".sagContent > .burclar > .burcUst > span.onceki").click(function() {
		if (burcDegers > 0) {
			burcDegers = burcDegers -1;
			burcUlKapsayici.animate({marginLeft:'-'+burcDegers*burcWidth+'px'});
		}else {
			burcDegers = burcCount - 1;
			burcUlKapsayici.animate({marginLeft:'-'+burcDegers*burcWidth+'px'});
		}
		return false;
	});
	$.bDondur = function () {
		if (burcDegers < burcCount -1) {
			burcDegers = burcDegers + 1;
			burcUlKapsayici.animate({marginLeft:'-'+burcDegers*burcWidth+'px'});
		}else {
			burcDegers = 0;
			burcUlKapsayici.animate({marginLeft:'-'+burcDegers*burcWidth+'px'});
		}
		return false
	}
	var bDondurs = setInterval('$.bDondur()',5000);
	$(".burclar").hover(function() {
		clearInterval(bDondurs);
	},function() {
		bDondurs = setInterval('$.bDondur()',5000);
	});

	// EMLAK VİTRİNİ
	$('.content .emlakVitrin > .vitrinUst > ul.vitrinMenu > li').click(function() {
		if (!$(this).hasClass('aktif')) {
			$('.content .emlakVitrin > .vitrinUst > ul.vitrinMenu > li').removeClass('aktif');
			$(this).addClass('aktif');
			$('.content .emlakVitrin > .vitrinKapsa .vitrin').slideUp().eq($(this).index()).slideDown();
		}
		return false;
	});
	var emlakKapsayici = $('.vitrin');
	var emlakCount = $('ul.vitrinList li',emlakKapsayici).length;
	var emlakUlKapsayici = $('ul.vitrinList',emlakKapsayici);
	var emlakWidth = 165;
	var emlakDegers = 0;
	emlakUlKapsayici.width(emlakWidth * emlakCount);
	$(".content .emlakVitrin > .vitrinUst > span.sonraki").click(function() {
		if (emlakDegers < emlakCount -1) {
			emlakDegers = emlakDegers + 1;
			emlakUlKapsayici.animate({marginLeft:'-'+emlakDegers*emlakWidth+'px'});
		}else {
			emlakDegers = 0;
			emlakUlKapsayici.animate({marginLeft:'-'+emlakDegers*emlakWidth+'px'});
		}
		return false
	});
	$(".content .emlakVitrin > .vitrinUst > span.onceki").click(function() {
		if (emlakDegers > 0) {
			emlakDegers = emlakDegers -1;
			emlakUlKapsayici.animate({marginLeft:'-'+emlakDegers*emlakWidth+'px'});
		}else {
			emlakDegers = emlakCount - 1;
			emlakUlKapsayici.animate({marginLeft:'-'+emlakDegers*emlakWidth+'px'});
		}
		return false;
	});
	var emlakKapsayici2 = $('.vitrin');
	var emlakCount2 = $('ul.vitrinList2 li',emlakKapsayici2).length;
	var emlakUlKapsayici2 = $('ul.vitrinList2',emlakKapsayici2);
	var emlakWidth2 = 165;
	var emlakDegers2 = 0;
	emlakUlKapsayici2.width(emlakWidth2 * emlakCount2);
	$(".content .emlakVitrin > .vitrinUst > span.sonraki").click(function() {
		if (emlakDegers2 < emlakCount2 -1) {
			emlakDegers2 = emlakDegers2 + 1;
			emlakUlKapsayici2.animate({marginLeft:'-'+emlakDegers2*emlakWidth2+'px'});
		}else {
			emlakDegers2 = 0;
			emlakUlKapsayici2.animate({marginLeft:'-'+emlakDegers2*emlakWidth2+'px'});
		}
		return false
	});
	$(".content .emlakVitrin > .vitrinUst > span.onceki").click(function() {
		if (emlakDegers2 > 0) {
			emlakDegers2 = emlakDegers2 -1;
			emlakUlKapsayici2.animate({marginLeft:'-'+emlakDegers2*emlakWidth2+'px'});
		}else {
			emlakDegers2 = emlakCount2 - 1;
			emlakUlKapsayici2.animate({marginLeft:'-'+emlakDegers2*emlakWidth2+'px'});
		}
		return false;
	});
	var emlakKapsayici3 = $('.vitrin');
	var emlakCount3 = $('ul.vitrinList3 li',emlakKapsayici3).length;
	var emlakUlKapsayici3 = $('ul.vitrinList3',emlakKapsayici3);
	var emlakWidth3 = 165;
	var emlakDegers3 = 0;
	emlakUlKapsayici3.width(emlakWidth3 * emlakCount3);
	$(".content .emlakVitrin > .vitrinUst > span.sonraki").click(function() {
		if (emlakDegers3 < emlakCount3 -1) {
			emlakDegers3 = emlakDegers3 + 1;
			emlakUlKapsayici3.animate({marginLeft:'-'+emlakDegers3*emlakWidth3+'px'});
		}else {
			emlakDegers3 = 0;
			emlakUlKapsayici3.animate({marginLeft:'-'+emlakDegers3*emlakWidth3+'px'});
		}
		return false
	});
	$(".content .emlakVitrin > .vitrinUst > span.onceki").click(function() {
		if (emlakDegers3 > 0) {
			emlakDegers3 = emlakDegers3 -1;
			emlakUlKapsayici3.animate({marginLeft:'-'+emlakDegers3*emlakWidth3+'px'});
		}else {
			emlakDegers3 = emlakCount3 - 1;
			emlakUlKapsayici3.animate({marginLeft:'-'+emlakDegers3*emlakWidth3+'px'});
		}
		return false;
	});

	// SİNEMA FİLMİ
	$('.solContent > .sinema > .sinemaUst > ul.sinemaMenu > li').click(function() {
		if (!$(this).hasClass('aktif')) {
			$('.solContent > .sinema > .sinemaUst > ul.sinemaMenu > li').removeClass('aktif');
			$(this).addClass('aktif');
			$('.solContent > .sinema > .film').slideUp().eq($(this).index()).slideDown();
		}
		return false;
	});

	// HOTEL TANITIMI
	$('.solContent > .hTanitim > ul.hMenu > li').click(function() {
		if (!$(this).hasClass('aktif')) {
			$('.solContent > .hTanitim > ul.hMenu > li').removeClass('aktif');
			$(this).addClass('aktif');
			$('.solContent > .hTanitim > .hotel').slideUp().eq($(this).index()).slideDown();
		}
		return false;
	});

	// ETKİNLİK
	$('.solContent > .etkinlik > .etkinlikUst ul.eMenu > li').click(function() {
		if (!$(this).hasClass('aktif')) {
			$('.solContent > .etkinlik > .etkinlikUst ul.eMenu > li').removeClass('aktif');
			$(this).addClass('aktif');
			$('.solContent > .etkinlik > .etkin').slideUp().eq($(this).index()).slideDown();
		}
		return false;
	});

	// OYUNLAR
	var oyunKapsayici = $('.oyunKapsa');
	var oyunCount = $('ul.oyunList li',oyunKapsayici).length;
	var oyunUlKapsayici = $('ul.oyunList',oyunKapsayici);
	var oyunWidth = 295;
	var oyunDegers = 0;
	oyunUlKapsayici.width(oyunWidth * oyunCount);
	$(".sagContent > .oyunlar > .oyunAlt > .ok > span.sonraki").click(function() {
		if (oyunDegers < oyunCount -1) {
			oyunDegers = oyunDegers + 1;
			oyunUlKapsayici.animate({marginLeft:'-'+oyunDegers*oyunWidth+'px'});
		}else {
			oyunDegers = 0;
			oyunUlKapsayici.animate({marginLeft:'-'+oyunDegers*oyunWidth+'px'});
		}
		return false
	});
	$(".sagContent > .oyunlar > .oyunAlt > .ok > span.onceki").click(function() {
		if (oyunDegers > 0) {
			oyunDegers = oyunDegers -1;
			oyunUlKapsayici.animate({marginLeft:'-'+oyunDegers*oyunWidth+'px'});
		}else {
			oyunDegers = oyunCount - 1;
			oyunUlKapsayici.animate({marginLeft:'-'+oyunDegers*oyunWidth+'px'});
		}
		return false;
	});
	
});