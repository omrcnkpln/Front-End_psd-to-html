$(document).ready(function(){

    $('#owl').owlCarousel({
        stagePadding: 25,
        loop:true,
        margin:50,
        navText:["<div class='nav-btn prev-slide'><img src='dest/images/icons/arrowleft_round.svg' ></div>","<div class='nav-btn prev-slide'><img src='dest/images/icons/arrowright_round.svg' ></div>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            800:{
                items:2,
                nav:true
            },
            1200:{
                items:3,
                nav:true,
            }
        }
    })
    
    $('#owl-two').owlCarousel({
        stagePadding: 25,
        loop:true,
        margin:50,
        navText:["<div class='nav-btn prev-slide'><img src='dest/images/icons/arrowleft_round.svg' ></div>","<div class='nav-btn prev-slide'><img src='dest/images/icons/arrowright_round.svg' ></div>"],
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            800:{
                items:2,
                nav:true
            },
            1200:{
                items:3,
                nav:true,
            }
        }
    })

    $('.accordion').on('show.bs.collapse', function () {
        $('.accordion-button').css({"box-shadow ": "none"})
        
    });
    $('.accordion').on('hidden.bs.collapse', function () {
        $('.accordion-button').css({"box-shadow": "inset  0 -0.1px 0 #152B5A;"})
        
    });
})

