
$(document).ready(function () {

    const mesajToogle = $('#mesaj-t')
    const konumToogle = $('#konum-t')

    const mesaj = $('#mesaj')
    const konum = $('#konum')
    var io = this.io ^= 1; 
    mesajToogle.click(() => {
        mesajToogle.addClass('active1 btn1')
        konumToogle.removeClass('active2')
        
        mesaj.removeClass('d-none').animate({
            "opacity" : 1, 
        }, 700)
        konum.animate({"opacity" :0}, 700).addClass('d-none')
    })
    konumToogle.click(() => {
        konumToogle.addClass('active2 btn2')
        mesajToogle.removeClass('active1')
        
        konum.removeClass('d-none').animate({"opacity" :1}, 700)
        mesaj.animate({"opacity" :0}, 700).addClass('d-none')

    })


})
