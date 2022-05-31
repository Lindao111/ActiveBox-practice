$(function(){

    let header = $("#header");
    let intro = $("#intro");
    // let introH
    // let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize",function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        console.log(scrollPos);
        
        if(scrollPos > introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    });

    
    header.addClass("fixed");

});
