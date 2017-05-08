$(document).ready(function(){

  // owl carousel

  $(".owl-carousel").owlCarousel({
  	items: 1.2,
  	nav: true,
  	dots: true,
    center: true,
    margin: 10,
    loop: true,
    responsive:{
      0:{
        nav:false,
        dots: false
      },
      600:{
        nav:true,
        dots: true
      }
    }
  });

  $('.owl-nav div').html('');
  $('.owl-dot span').html('');
  $('.owl-next').append($('<img>').attr('src', 'right.gif'));
  $('.owl-prev').append($('<img>').attr('src', 'left.gif'));

  //

});