var $win = $(window);

//Footer Animations
var $navTrigger =$('#about-us');
var $header =$('.header');

$navTrigger.waypoint(function() {
    $header.toggleClass('scroll-header');
}, { offset:'10%'});