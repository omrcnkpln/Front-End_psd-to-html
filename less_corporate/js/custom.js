    $(function(){
    //slider function---------------------------------------------------------------------------------------------------
    var slider_item = $('.slider_item_container > li');
    var slider_button_1 = $('.slider span:first-child');
    var slider_button_2 = $('.slider span:last-child');

    slider_item.filter(':not(:first)').hide();

    var index = 0;
    slider_button_1.click(function(){

     if(index == 0){
         index = 3;
         slider_item.fadeOut().filter(':eq(' + index + ')').fadeIn();
     }else{
         index -=1;
         slider_item.fadeOut().filter(':eq(' + index + ')').fadeIn();
     }

     return false;
    });

    slider_button_2.click(function(){

     if(index == 3){
      index = 0;
      slider_item.fadeOut().filter(':eq(' + index + ')').fadeIn();
     }else{
      index +=1;
      slider_item.fadeOut().filter(':eq(' + index + ')').fadeIn();
     }
    });






});




