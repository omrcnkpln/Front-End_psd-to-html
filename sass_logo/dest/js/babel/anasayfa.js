"use strict";

// _____________________________ Youtube API _____________________________________________________________
// let iframeItem;
var tag = document.createElement('script');
var firstScriptTag = document.getElementsByTagName('script')[0];
var players = [];
var currentVideoByClass;
var currentVideoId;
tag.src = 'https://www.youtube.com/iframe_api';
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // function onYouTubeIframeAPIReady() {
//   for (let i = 0; i < iframes.length; i++) {
//     iframeItem = iframes[i];
//     players[i] = new YT.Player(iframeItem, {
//       suggestedQuality: 'hd720',
//       events: {
//         onReady: onPlayerReady,
//       },
//     });
//   }
// }
// function onPlayerReady(event) {
//   event.target.pauseVideo();
//   // event.target.clearVideo();
//   // event.target.stopVideo();
// }
// const vid = document.getElementById('video-0');
// _____________________________ #Youtube API _____________________________________________________________

var sliderOwlImg = $('.a-slider-carousel-img'); // const video = $('video');

var startOwl = 1; // _____________________________ jquery _____________________________________________________________

$(document).ready(function () {
  var vid = $('video');
  var volumeButtons = $('.volume-btn .btn');
  volumeButtons.click(function () {
    $(this).removeClass('active').siblings().addClass('active');

    if (vid.muted) {
      vid.muted = false;
    } else {
      vid.muted = true;
    }
  }); // touchstart touchmove keyup scroll DOMMouseScroll mousewheel

  $('body,html').bind('mousedown', 'scroll', function () {
    if (startOwl == 1) {
      sliderOwlImg.trigger('play.owl.autoplay');
      startOwl = 2;
    }
  }); // _____________________________ slider-owl video start - stop _____________________________________________________________

  var anasayfaSlider = $('.anasayfa-slider');
  var sliderOwl = $('.a-slider-carousel');
  var sliderOwlNextBtn = $('#sliderOwlNextBtn');
  var sliderOwlPrevBtn = $('#sliderOwlPrevBtn');
  var carouselCustomDots = $('#carousel-custom-dots');
  var sliderOwlItemCount = $('.a-slider-carousel-img').find('.item').length; // let prevVideo = $('video');

  var activeOwlItem;
  var activeCardItem;
  sliderOwlImg.on('translated.owl.carousel', function () {
    sliderOwlImg.trigger('stop.owl.autoplay');
    sliderOwlImg.trigger('play.owl.autoplay'); // prevVideo.trigger('pause');
    // video.trigger('pause');

    for (var i = 0; i < players.length; ++i) {
      players[i].pauseVideo();
    }

    activeOwlItem = sliderOwlImg.find('.owl-item.active');
    activeCardItem = activeOwlItem.find('.a-slider-image'); // _____________________________ video varsa _____________________________________________________________

    if (activeCardItem.hasClass('has-video')) {
      sliderOwlImg.trigger('stop.owl.autoplay');
      currentVideoByClass = activeCardItem.find('.slider-video');
      currentVideoId = currentVideoByClass.attr('id'); // var currentVideoById = $("#" + currentVideoId);
      // const currentVideoById = document.getElementById(currentVideoId);
      // var media = document.querySelector("#" + currentVideoId);
      // var media = document.querySelector(".video-0");

      var iframeId = currentVideoId.split('-');

      if (iframeId[0] == 'iframe') {
        players[iframeId[1]].playVideo();
        players[iframeId[1]].addEventListener('onStateChange', function () {
          if (players[iframeId[1]].getPlayerState() == 0) {
            players[iframeId[1]].stopVideo();
            sliderOwlImg.trigger('play.owl.autoplay');
          }
        });
      } else {
        currentVideoByClass.trigger('play'); // media.play();
        // currentVideoById.trigger('play');
        // currentVideoById.play();

        currentVideoByClass.on('ended', function () {
          sliderOwlImg.trigger('play.owl.autoplay');
        });
      } // prevVideo = currentVideoByClass;

    }
  }); // _____________________________ Writing and the ??mg sync _____________________________________________________________

  sliderOwlImg.on('translate.owl.carousel', function (e) {
    var dotIndex = e.page.index;
    $('#carousel-custom-dots').find('.owl-dot').eq(dotIndex).addClass('active').siblings().removeClass('active');
    sliderOwl.trigger('to.owl.carousel', e.page.index);
  }); // _____________________________ slider-owl / writing setup _____________________________________________________________

  sliderOwl.owlCarousel({
    loop: false,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 666,
    responsive: {
      0: {
        items: 1
      },
      510: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  }); // _____________________________ slider-owl / image side setup _____________________________________________________________

  sliderOwlImg.owlCarousel({
    rewind: true,
    loop: false,
    nav: false,
    margin: 0,
    videoWidth: false,
    videoHeight: false,
    // autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 666,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      510: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  for (var index = 0; index < sliderOwlItemCount; index++) {
    if (index == 0) {
      carouselCustomDots.append($('<li>', {
        "class": 'owl-dot active'
      }));
    } else {
      carouselCustomDots.append($('<li>', {
        "class": 'owl-dot'
      }));
    }
  }

  anasayfaSlider.find('.owl-dot').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    sliderOwlImg.trigger('to.owl.carousel', [$(this).index(), 666]);
    sliderOwlImg.trigger('stop.owl.autoplay');
    sliderOwlImg.trigger('play.owl.autoplay');
  });
  sliderOwlNextBtn.click(function () {
    sliderOwl.trigger('next.owl.carousel', [666]);
    sliderOwlImg.trigger('next.owl.carousel', [666]);
  });
  sliderOwlPrevBtn.click(function () {
    sliderOwl.trigger('prev.owl.carousel', [666]);
    sliderOwlImg.trigger('prev.owl.carousel', [666]);
  }); // _____________________________ hizmetler-owl _____________________________________________________________

  var hizmetlerOwl = $('.hizmetler-carousel');
  var hizmetlerOwlNextBtn = $('#hizmetlerOwlNextBtn');
  var hizmetlerOwlPrevBtn = $('#hizmetlerOwlPrevBtn');
  hizmetlerOwl.owlCarousel({
    loop: true,
    nav: false,
    margin: 5,
    responsive: {
      0: {
        items: 2
      },
      510: {
        items: 2
      },
      700: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });
  hizmetlerOwlNextBtn.click(function () {
    hizmetlerOwl.trigger('next.owl.carousel', [666]);
  });
  hizmetlerOwlPrevBtn.click(function () {
    hizmetlerOwl.trigger('prev.owl.carousel', [666]);
  }); // _____________________________ bak????-owl _____________________________________________________________

  var bakisOwl = $('#bakisOwl');
  var bakisOwlMobil = $('#bakisOwlMobil');
  var bakisOwlNextBtn = $('#bakisOwlNextBtn');
  var bakisOwlPrevBtn = $('#bakisOwlPrevBtn');
  bakisOwl.owlCarousel({
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      510: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
  bakisOwlMobil.owlCarousel({
    loop: true,
    margin: 20,
    stagePadding: 50,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  bakisOwlNextBtn.click(function () {
    bakisOwl.trigger('next.owl.carousel', [666]);
  });
  bakisOwlPrevBtn.click(function () {
    bakisOwl.trigger('prev.owl.carousel', [666]);
  }); // _____________________________ i??ler-owl _____________________________________________________________

  var isOwl = $('.iswrap-mobil');
  isOwl.owlCarousel({
    center: true,
    loop: true,
    autoWidth: true,
    margin: 7,
    responsive: {
      0: {
        items: 1
      },
      510: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  }); // _____________________________ m????teri-owl _____________________________________________________________

  var musteriOwl = $('#musteriwrap-owl');
  musteriOwl.owlCarousel({
    center: true,
    loop: true,
    nav: false,
    margin: 10,
    responsive: {
      0: {
        items: 2,
        margin: 20
      },
      510: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
});
//# sourceMappingURL=anasayfa.js.map
