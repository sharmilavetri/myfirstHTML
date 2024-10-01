$(function(){

  jQuery(window).on('resize', function() {
    var viewportWidth = jQuery(window).width();
  
    if (viewportWidth < 576) {
        $('.slide').slick('unslick');
    } else {
      // console.log("DOM ready")  
      $('.slide').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1
        });
  
    }
  });
  
      
})

