var slider = {
  
  el: {
    slider: $("#slider"),
    allSlides: $(".slide"),
    sliderNav: $(".slider-nav"),
    allNavButtons: $(".slider-nav > a")
  },
  
  //timing: 800,
  //slideWidth: 300, // could measure this
  
  changeActiveNav: function(el) {
    this.el.allNavButtons.removeClass("active");
    $(el).addClass("active");
  }
  
};

slider.init();

// http://codepen.io/BaylorRae/pen/ImGBC
// Originally added click links, so I ported over and re-wrote