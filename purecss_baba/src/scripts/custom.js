jQuery(function () {
    //slider
    var slider_items = $('.calismalar_bottom_right');
    var slider_buttons = $('#calismalar_bottom_left ul li');

    // bunu yapıca yemiyo
    // var slider_buttons = $('#calismalar_bottom_left ul li a');

    slider_items.filter(':not(:first)').hide();
    slider_buttons.filter(':first').addClass('active');

    slider_buttons.click(function () {

        var index = $(this).index();
        slider_items.fadeOut(500).filter(':eq(' + index + ')').fadeIn(500);
        slider_buttons.removeClass('active');
        $(this).addClass('active');
        return false;

        e.preventDefault();

    });

});