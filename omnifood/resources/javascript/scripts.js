$(document).ready(function(){
  // sticky nav

  $('.js--section-features').waypoint(function(direction){
    if (direction === 'down') {
      $('nav').addClass('sticky animated fadeInDown');
      // setTimeout(function () {
      //   console.log('timeout down');
      //   $('nav').removeClass('animated fadeInDown')
      // }, 600);
    } else {
      $('nav').addClass('animated fadeOutUp');
      // setTimeout(function () {
      //   console.log('timeout up');
      //   $('nav').removeClass('sticky animated fadeOutUp')
      // }, 600);
    }
  }, {
    offset: '60px;'
  });

  $('nav').on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
    if ($('nav').hasClass('fadeInDown')) {
      $('nav').removeClass('animated fadeInDown');
    }
    if ($('nav').hasClass('fadeOutUp')) {
      $('nav').removeClass('sticky animated fadeOutUp');
    }
  });

// scroll on button press

  $('.js--scroll-to-plans').on('click', function(e){
    e.preventDefault();
    console.log('in scroll to plans');
    $('html, body').animate(
      {
        scrollTop: $('.js--section-plans').offset().top
      }, 1500
    );
  });

  $('.js--scroll-to-features').on('click', function(e){
    e.preventDefault();
    console.log('in scroll to features');
    $('html, body').animate(
      {
        scrollTop: $('.js--section-features').offset().top
      }, 1000
    );
  });

// Example of waypoints
  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window')
  // }, {
  //   offset: '25%'
  // })


// navigation scroll (anchor links)

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // scroll animations
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn')
  },{offset: '50%'});
  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp')
  },{offset: '50%'});
  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn')
  },{offset: '50%'});
  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse')
  },{offset: '50%'});

  $('.js--nav-icon').on('click', function(e){
    e.preventDefault();
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
      icon.removeClass('ion-navicon-round');
      icon.addClass('ion-close-round');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    };
  });
  // maps
  var map = new GMaps({
    div: '.map',
    lat: 37.366419,
    lng: -122.0165766,
    zoom: 12
  });

  map.addMarker({
    lat: 37.365764,
    lng: -122.1,
    title: 'Omnifood',
    click: function(e) {
      // alert('You clicked in this marker');
    },
    infoWindow: {
  content: '<p>Our Headquarters</p>'
}
  });
});
