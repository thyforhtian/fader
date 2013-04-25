(function( $ ){

  $.fn.fader = function(options) {

    // SETTINGS
  	var settings = $.extend( {
      'duration': 4000,
      'speed' : 1000
    }, options);

  	var self = $(this);
  	// METHODS
    var methods = {

    	init: function(el) {
    		console.log("test");
				this.preload(el);
				this.textFader(el);
				setTimeout(function() {methods.imgFader(el)},settings.duration);
    	},

    	preload: function(el) {
    		var TextContent = el.find(".textWrapper .text").get().reverse();
				var ImgContent = el.find(".imgWrapper img").get().reverse();

				el.find(".textWrapper").html(TextContent);
				el.find(".imgWrapper").html(ImgContent);
    	},

    	imgFader: function(el) {
    		el.find(".imgWrapper img").last().animate({opacity: "0.001"},settings.speed, function() {
					$(this,"img").prependTo(el.find(".imgWrapper")).css("opacity","1");
				});
				methods.textFader(el);
				setTimeout(function() {methods.imgFader(el)},settings.duration);
    	},

    	textFader: function(el) {
    		el.find(".textWrapper .text").last().fadeIn(settings.speed).delay(settings.duration - settings.speed*2).fadeOut(settings.speed).prependTo(el.find(".textWrapper"));
    	}
    } // methods

  	// PLUGIN
  	return this.each(function() {
  		methods.init(self);
  	});


  };

})( jQuery );
