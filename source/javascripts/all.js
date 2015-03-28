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
});
