// _____________________________ Youtube API _____________________________________________________________
let iframeItem;
let iframes = $(".iframe");
const tag = document.createElement('script');
const firstScriptTag = document.getElementsByTagName('script')[0];

const players = [];
let currentVideoByClass;
let currentVideoId;

tag.src = 'https://www.youtube.com/iframe_api';
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  for (let i = 0; i < iframes.length; i++) {
    iframeItem = iframes[i];

    players[i] = new YT.Player(iframeItem, {
      suggestedQuality: 'hd720',
      events: {
        onReady: onPlayerReady,
      },
    });
  }
}

function onPlayerReady(event) {
  event.target.pauseVideo();
}

// _____________________________ #Youtube API _____________________________________________________________

const sliderOwlImg = $('.a-slider-carousel-img');

// _____________________________ jquery _____________________________________________________________
$(document).ready(() => {
  // _____________________________ aktif videonun ses açıp kapanması _____________________________________________________________
  const volumeButtons = $('.volume-btn .btn');
  let videoID;
  let activeVideo;
  let videoIDParse;

  volumeButtons.click(function () {
    $(this).removeClass('active').siblings().addClass('active');

    videoID = $(this).parents(".volume-btn").siblings(".slider-video").attr("id");
    activeVideo = document.getElementById(videoID);

    videoIDParse = videoID.split('-');

    if (videoIDParse[0] == 'iframe') {
      if (players[videoIDParse[1]].isMuted()) {
        players[videoIDParse[1]].unMute();
      } else {
        players[videoIDParse[1]].mute();
      }
    } else {
      if (activeVideo.muted) {
        activeVideo.muted = false;
      } else {
        activeVideo.muted = true;
      }
    }
  });

  // _____________________________ slider-owl video start - stop _____________________________________________________________
  const anasayfaSlider = $('.anasayfa-slider');
  const sliderOwl = $('.a-slider-carousel');
  const sliderOwlNextBtn = $('#sliderOwlNextBtn');
  const sliderOwlPrevBtn = $('#sliderOwlPrevBtn');
  const carouselCustomDots = $('#carousel-custom-dots');
  const sliderOwlItemCount = $('.a-slider-carousel-img').find('.item').length;

  let video = $("video");
  let activeOwlItem = sliderOwlImg.find('.item.active');
  let activeCardItem = activeOwlItem.find('.a-slider-image');

  // _____________________________ autoplay olan tüm videoların duraklatılması _____________________________________________________________
  video.trigger('pause');
  if (activeCardItem.hasClass('has-video')) {
    activeCardItem.find(".slider-video").trigger('play');

    activeCardItem.find(".slider-video").on('ended', function () {
      sliderOwlImg.trigger('play.owl.autoplay');
    });
  }


  sliderOwlImg.on('translated.owl.carousel', () => {
    sliderOwlImg.trigger('stop.owl.autoplay');
    sliderOwlImg.trigger('play.owl.autoplay');

    video.trigger('pause');

    for (let i = 0; i < players.length; ++i) {
      players[i].pauseVideo();
    }

    activeOwlItem = sliderOwlImg.find('.owl-item.active');
    activeCardItem = activeOwlItem.find('.a-slider-image');

    // _____________________________ video varsa _____________________________________________________________
    if (activeCardItem.hasClass('has-video')) {
      sliderOwlImg.trigger('stop.owl.autoplay');

      currentVideoByClass = activeCardItem.find('.slider-video');
      currentVideoId = currentVideoByClass.attr('id');

      videoID = currentVideoId.split('-');
      if (videoID[0] == 'iframe') {
        players[videoID[1]].playVideo();

        players[videoID[1]].addEventListener('onStateChange', () => {
          if (players[videoID[1]].getPlayerState() == 0) {
            players[videoID[1]].stopVideo();
            sliderOwlImg.trigger('play.owl.autoplay');
          }
        });
      } else {
        currentVideoByClass.trigger('play');

        currentVideoByClass.on('ended', function () {
          sliderOwlImg.trigger('play.owl.autoplay');
        });
      }
    }
  });

  // _____________________________ Writing and the ımg sync _____________________________________________________________
  sliderOwlImg.on('translate.owl.carousel', (e) => {
    const dotIndex = e.page.index;
    $('#carousel-custom-dots').find('.owl-dot').eq(dotIndex).addClass('active')
      .siblings()
      .removeClass('active');
    sliderOwl.trigger('to.owl.carousel', e.page.index);
  });

  // _____________________________ slider-owl / writing setup _____________________________________________________________
  sliderOwl.owlCarousel({
    loop: false,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 666,
    responsive: {
      0: {
        items: 1,
      },
      510: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // _____________________________ slider-owl / image side setup _____________________________________________________________
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
        items: 1,
      },
      510: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  for (let index = 0; index < sliderOwlItemCount; index++) {
    if (index == 0) {
      carouselCustomDots.append($('<li>', {
        class: 'owl-dot active',
      }));
    } else {
      carouselCustomDots.append($('<li>', {
        class: 'owl-dot',
      }));
    }
  }

  anasayfaSlider.find('.owl-dot').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    sliderOwlImg.trigger('to.owl.carousel', [$(this).index(), 666]);

    sliderOwlImg.trigger('stop.owl.autoplay');
    sliderOwlImg.trigger('play.owl.autoplay');
  });

  sliderOwlNextBtn.click(() => {
    sliderOwl.trigger('next.owl.carousel', [666]);
    sliderOwlImg.trigger('next.owl.carousel', [666]);
  });

  sliderOwlPrevBtn.click(() => {
    sliderOwl.trigger('prev.owl.carousel', [666]);
    sliderOwlImg.trigger('prev.owl.carousel', [666]);
  });

  // _____________________________ hizmetler-owl _____________________________________________________________
  const hizmetlerOwl = $('.hizmetler-carousel');
  const hizmetlerOwlNextBtn = $('#hizmetlerOwlNextBtn');
  const hizmetlerOwlPrevBtn = $('#hizmetlerOwlPrevBtn');

  hizmetlerOwl.owlCarousel({
    loop: true,
    nav: false,
    margin: 5,
    responsive: {
      0: {
        items: 2,
      },
      510: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  hizmetlerOwlNextBtn.click(() => {
    hizmetlerOwl.trigger('next.owl.carousel', [666]);
  });

  hizmetlerOwlPrevBtn.click(() => {
    hizmetlerOwl.trigger('prev.owl.carousel', [666]);
  });

  // _____________________________ bakış-owl _____________________________________________________________
  const bakisOwl = $('#bakisOwl');
  const bakisOwlMobil = $('#bakisOwlMobil');
  const bakisOwlNextBtn = $('#bakisOwlNextBtn');
  const bakisOwlPrevBtn = $('#bakisOwlPrevBtn');

  bakisOwl.owlCarousel({
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      510: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  bakisOwlMobil.owlCarousel({
    loop: true,
    margin: 20,
    stagePadding: 50,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  bakisOwlNextBtn.click(() => {
    bakisOwl.trigger('next.owl.carousel', [666]);
  });

  bakisOwlPrevBtn.click(() => {
    bakisOwl.trigger('prev.owl.carousel', [666]);
  });

  // _____________________________ işler-owl _____________________________________________________________
  const isOwl = $('.iswrap-mobil');

  isOwl.owlCarousel({
    center: true,
    loop: true,
    autoWidth: true,
    margin: 7,
    responsive: {
      0: {
        items: 1,
      },
      510: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // _____________________________ müşteri-owl _____________________________________________________________
  const musteriOwl = $('#musteriwrap-owl');

  musteriOwl.owlCarousel({
    center: true,
    loop: true,
    nav: false,
    margin: 10,
    responsive: {
      0: {
        items: 2,
        margin: 20,

      },
      510: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });
});
