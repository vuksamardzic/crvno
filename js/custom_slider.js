$(document).ready(function(){
  $(".owl-carousel").owlCarousel({

    items : 1,
    nav : true,
    navText : "",
    dots : true,
    loop : true,
    smartSpeed : 700,
    fluidSpeed : 700,
    responsiveClass : true,
    responsive:{
        0:{
            nav:false,
            autoHeight: true
        },
        600:{
            nav:false,
            autoHeight: true
        },
        1000:{
            nav:true,
            autoHeight: false
        }
    }
  }); 


$( ".right p a img" )
  .on( "mouseenter", function() 
  {
    $(this).attr("src", "img/build_logo_over.png")
  })
  .on( "mouseleave", function() 
  {
    $(this).attr("src", "img/build_logo.png")
  });

});
