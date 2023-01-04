
$(function(){

    // First Span
    $("header span:first").mouseover(function (){

        $("header span:first a").css("border" , "none");

        $(this).css({
           "background-color" : "#fb2f3a",
        }).mouseout(function(){
            $(this).css({
                "background" : "rgba(0, 0, 0, 0)",
            });
            $("header span a").css("border-bottom" , "1px solid #eee");
        });

    });

    // Second Span
    $("header span:last").mouseover(function (){

        $("header span:last a").css("border" , "none");

        $(this).css({
            "background-color" : "#fb2f3a",
        }).mouseout(function(){
            $(this).css({
                "background" : "rgba(0, 0, 0, 0)",
            });
            $("header span a").css("border-bottom" , "1px solid #eee");
        });

    });


});










