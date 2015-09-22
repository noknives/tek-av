var slider = {

    // Not sure if keeping element collections like this
    // together is useful or not.
    

    /* properites */
    el: {
        slider: $("#slider"),
        allSlides: $(".slide"),
        sliderNav: $(".slider-nav"),
        allNavButtons: $(".slider-nav > a")
    },

    timing: 800,
    slideWidth: $("#slider").width(), // could measure this

    // In this simple example, might just move the
    // binding here to the init function


    /* methods */

    init: function() {
        this.bindUIEvents();
    },

    bindUIEvents: function() {
    
        // ... or click a thing
    
        this.el.sliderNav.on("click", "a", function(event) {
            console.log("slider nav clicking");
            slider.handleNavClick(event, this);
        });

        // What would be cool is if it had touch
        // events where you could swipe but it
        // also kinda snapped into place.
        // 
        
    },
  
    handleNavClick: function(event, el) {

        event.preventDefault();
        
        console.log($(el).attr("href"));
        var position = $(el).attr("href").split("-").pop();
        console.log(position);

        this.el.slider.animate({
            scrollLeft: position * this.slideWidth
        }, this.timing);

        this.changeActiveNav(el);
    },
  
    changeActiveNav: function(el) {
        this.el.allNavButtons.removeClass("active");
        $(el).addClass("active");
    }
  
};

slider.init();

// http://codepen.io/BaylorRae/pen/ImGBC
// Originally added click links, so I ported over and re-wrote