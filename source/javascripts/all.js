//= require jquery/dist/jquery
//= require move-top
//= require easing
//= require owl.carousel

$(function() {
  $().UItoTop({ easingType: 'easeOutQuart' });

  $("#owl-demo").owlCarousel({
    items : 1,
    lazyLoad : true,
    autoPlay : true,
    navigation : false,
    navigationText :  false,
    pagination : true,
  });

  $("#owl-demo1").owlCarousel({
    items : 1,
    lazyLoad : true,
    autoPlay : true,
    navigation : false,
    navigationText :  false,
    pagination : true,
  });

  $("#owl-demo2").owlCarousel({
    items : 1,
    lazyLoad : true,
    autoPlay : true,
    navigation : false,
    navigationText :  false,
    pagination : true,
  });

  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
  });

  addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }
});
