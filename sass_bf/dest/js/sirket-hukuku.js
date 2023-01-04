
    const topmenu = $('#top');
    const submenu = $('.submenu');
    const contents = $('.contents');
    const sub = [$('#sub'),$('#subx'),$('#subk'),$('#subs')]
    const sgk = $('#sgk');

    topmenu.children().click((e) => {
        $('#top li.active').removeClass('active')
        $(e.target).addClass('active')
        const a= $('.' + e.target.id + '> .content' )
        a.first().removeClass('d-none')
        contents.not('.'+e.target.id).addClass('d-none')
        submenu.addClass('d-none')
        $('.'+e.target.id).removeClass('d-none');
    })
    $.each(sub,(i,val)=>{
        val.children().click((e) => {
            $(val[0]).children().removeClass('active')
            $(e.target).addClass('active')
            let a =$(val[0]).parent().attr('class').split(' ')[1]
            $('.contents.'+a).children().addClass('d-none')
            contents.find('#'+e.target.id).removeClass('d-none')
        })
    })
    





    //create li item in sub menu
     // submenu.empty();
        // $.each(baslik,(i,val)=>{
        //     $('<li>'+val+'</li>')
        //     .addClass('nav-item ')
        //     .appendTo(submenu);
        // })