$(document).ready(function(){

	var urlHash = window.location.hash;
	var slideWidth;

	$("#projects").owlCarousel({
		singleItem : true,
		navigation: true,
		navigationText: [
		'<a class="arrow line-btn arrow-left">Previous project</a>',
		' <a class="arrow line-btn arrow-right">Next project</a>'
		],
		theme : 'projects-theme',
		mouseDrag: false,
		slideSpeed: 400
	});

	$("#testimonials .slider .holder").owlCarousel({
		singleItem : true,
		theme : 'testimonials-theme',
		mouseDrag: false
	});

	$("#testimonials .slider-nav a").first().addClass('active');

	$("#testimonials .slider-nav a").click(function(ev){

		ev.preventDefault();

		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');

		$("#testimonials .slider .holder").data('owlCarousel').goTo( $(this).data('testimonial-number') - 1 );

	});

	$('#projects .projects-carousel-item aside.media').each(function(){

		var slider = {

			// Not sure if keeping element collections like this
			// together is useful or not.
			

			/* properites */

			el: {
				slider: $(this).find('.slider'),
				allSlides:  $(this).find('.slide'),
				sliderNav: $(this).find(".slider-nav"),
				allNavButtons: $(this).find(".slider-nav > a")
			},

			timing: 1000,

			/* methods */

			init: function() {
				this.bindUIEvents();
			},

			bindUIEvents: function() {

				// ... or click a thing
				
				this.el.sliderNav.on("click", "a", function(event) {
					slider.handleNavClick(event, this);
				});

			},

			handleNavClick: function(event, el) {

				slideWidth = $('.slider').width();

				event.preventDefault();

				var position = $(el).data("order");

				this.el.slider.animate({
					scrollLeft: position * slideWidth
				}, this.timing);

				this.changeActiveNav(el);
			},

			changeActiveNav: function(el) {
				this.el.allNavButtons.removeClass("active");
				$(el).addClass("active");
			}

		};

		$(this).find('.slider-nav a:first-of-type').addClass('active');

		slider.init();

		// http://codepen.io/BaylorRae/pen/ImGBC
		// Originally added click links, so I ported over and re-wrote

	});

	// causing it so that the label doesn't show on the modal 
	// window after you type something in it (and leave it [blur])
	$('.input__field').blur(function(){

		// caching
		var $this = $(this);
		var $label = $this.parent().find('.input__label span');

		// logic to check if input has value.
		if( $this.val() != ""  ){
			$label.hide();
		}else{
			$label.show();
		}

	});

	// code to 

	if( urlHash.split('-')[0] == "#project" ){

		$('html,body').animate({
            scrollTop: $('#our-work').offset().top - $('header').height()
        });

		$("#projects").data('owlCarousel').goTo( urlHash.split('-')[1] - 1 );

		// if(urlHash.split('-')[2]){
			// console.log( "going to slide " + urlHash.split('-')[2] );
		// }
	}

});