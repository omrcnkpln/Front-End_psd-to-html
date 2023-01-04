



jQuery(function(){
 //slider
 var slider_items = $('.slider_item ul.slider_item_container > li');
 var slider_buttons = $('.slider_button ul li');

 slider_items.filter(':not(:first)').hide();
 slider_buttons.filter(':first').addClass('active');

 slider_buttons.click(function(){

  var index = $(this).index();
  slider_items.fadeOut(864).filter(':eq(' + index + ')').fadeIn(864);
  slider_buttons.removeClass('active');
  $(this).addClass('active');
  return false;

  e.preventDefault();

 });

});