$(function(){


    // fixed header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    // let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize",function(){
        // introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        // console.log(scrollPos);
        
        checkScroll(scrollPos, introH)
    });
    function checkScroll(scrollPos, introH){
        if(scrollPos > introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    };

    
    // smoothe scroll=============
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementid = $(this).data("scroll");
        let elementOffset = $(elementid).offset().top;

        nav.removeClass("show")
        // console.log(elementOffset);

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700 );

    });

    // Nav Toggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");

        navToggle.on("click resize", function(event){
        event.preventDefault();
        
        nav.toggleClass("show");
    });

    // reviewsSlider: https://kenwheeler.github.io/slick/ *slick library*
    let slider =$("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:false,
        dots:true,
        });

});
