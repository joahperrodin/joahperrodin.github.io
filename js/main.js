$ (function () {

	"use strict";

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});

	// One page navigation menu scroll
	function spy_scroll(){

		$('.navbar-nav').onePageNav({
	        currentClass: 'active',
	        scrollSpeed: 500,
	        scrollThreshold: 0.5,
	        easing: 'swing'
	    }); 

	}

	function setParallax() {
		if( $(window).width() > 1024 ) {
			$('.full-width-parallax').parallax(0.1, 0.1);
		}
	}

	setParallax();

	$(window).resize( function() {
		setParallax();
	});

	$(document).ready(function(){
		$('.nav.navbar-nav li a').bind('click', function(event) {
        var $anchor = $(this);
		$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	// Highlight the top nav as scrolling occurs
	$('#content').scrollspy({
		target: '.navbar-fixed-top'
	});

	var $container = $('.isotope-container').imagesLoaded(function(){
		$container.isotope({
		
		});
	});

	$(document).ready(function() {

		/* Portfolio */

	    var $container = $('#container');
	    $container.isotope({
	      itemSelector : '.element-item',
	      masonry : {
	        columnWidth : 0
	      },
	      masonryHorizontal : {
	        rowHeight: 0
	      },
	      cellsByRow : {
	        columnWidth : 0,
	        rowHeight : 0
	      },
	      cellsByColumn : {
	        columnWidth : 0,
	        rowHeight : 0
	      },
	      getSortData : {
	        symbol : function( $elem ) {
	          return $elem.attr('data-symbol');
	        },
	        category : function( $elem ) {
	          return $elem.attr('data-category');
	        },
	      }
	    });
	    
		var $sortBy = $('#sort-by');
	    $('#shuffle a').click(function(){
	      $container.isotope('shuffle');
	      $sortBy.find('.selected').removeClass('selected');
	      $sortBy.find('[data-option-value="random"]').addClass('selected');
	      return false;
	    });
		
		/* Init Isotope */

	    var $container = $('.isotope').isotope({
	      itemSelector: '.element-item',
	      layoutMode: 'fitRows',
		  getSortData: {
	        name: '.name',
	        symbol: '.symbol',
	        number: '.number parseInt',
	        category: '[data-category]',
	        weight: function( itemElem ) {
	          var weight = $( itemElem ).find('.weight').text();
	          return parseFloat( weight.replace( /[\(\)]/g, '') );
	        }
	      }
	    });

	    // Filter functions
	    var filterFns = {
	      // Show if number is greater than 50
	      numberGreaterThan50: function() {
	        var number = $(this).find('.number').text();
	        return parseInt( number, 10 ) > 50;
	      },
	      // Show if name ends with -ium
	      ium: function() {
	        var name = $(this).find('.name').text();
	        return name.match( /ium$/ );
	      }
	    };

	    // Bind filter button click
	    $('#filters').on( 'click', 'a', function() {
	      var filterValue = $( this ).attr('data-filter');
	      // use filterFn if matches value
	      filterValue = filterFns[ filterValue ] || filterValue;
	      $container.isotope({ filter: filterValue });
	    });

	    // Change is-checked class on buttons
	    $('.filter_group').each( function( i, buttonGroup ) {
	      var $buttonGroup = $( buttonGroup );
	      $buttonGroup.on( 'click', 'a', function() {
	        $buttonGroup.find('.active').removeClass('active');
	        $( this ).addClass('active');
	      });
	    });

	});

	function isScrolledIntoView(elem)
	{	try{
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}
		catch(e){}
	}

	var dialed = false;

	function responsiveSlider() {
		var width = $(window).width();
		var height = $(window).height();
		$('header').height(height);
		$('header .item').height(height);
		$('header .item').css('background-position', 'center center');
	}
	responsiveSlider();

	//Window Resize Event
	$(window).resize(function(){
		responsiveTable();
		responsiveSlider();
		$('.price-table hr.price').each(function(){
			$(this).width($(this).parent().parent().parent().width() - 5);
		});
		$("section div[class^='col-lg-'].item").each(function(){
			var cls = $(this).attr('class');
			var index = cls.indexOf(' ');
			var number = cls.substring(7, index);
			var height = $(this).height();
			if($(window).width() < 768)
			{
				$("section div[class^='col-lg-" + number + "'].info").each(function(){
				$(this).css('height','auto');
				});
			}
			else
			{
				$("section div[class^='col-lg-" + number + "'].info").each(function(){
					$(this).height($(this).width());
				});
			}
		});
	});

	function responsiveTable() {
		var width = $(window).width();
		if(width < 768 && width > 450) {
			$('table thead').children().first().children('th').eq(1).hide();
			$('table thead').children().first().children('th').eq(3).hide();
			$('table tr').each(function(){
				$(this).children('td').eq(1).hide();
				$(this).children('td').eq(3).hide();
			});
		}
		else if(width < 450) {
			$('table thead').children().first().children('th').eq(2).hide();
			$('table thead').children().first().children('th').eq(4).hide();
			$('table tr').each(function(){
				$(this).children('td').eq(2).hide();
				$(this).children('td').eq(4).hide();
			});
			$('table thead').children().first().children('th').eq(1).hide();
			$('table thead').children().first().children('th').eq(3).hide();
			$('table tr').each(function(){
				$(this).children('td').eq(1).hide();
				$(this).children('td').eq(3).hide();
			});
		}
		else {
			$('table th').each(function(){ $(this).show(); })
			$('table td').each(function(){ $(this).show(); })
		}
	}
	var $nav = $('.navbar-default');

	$nav.css('background-color', '#fff');
		        $nav.css('border-color', '#d1d1d1');
		        $nav.css('box-shadow', 'inset 3px 0px 5px red;');

	// Window Scroll Event
	$(window).scroll(function(){
		if(!$('body').hasClass('static'))
		{
		    
		    if ($(window).scrollTop() > 0) {
		        $nav.css('background-color', '#fff');
		        $nav.css('border-color', '#d1d1d1');
		        $nav.css('box-shadow', 'inset 3px 0px 5px red;');
		    } else {
		        $nav.css('background-color', '#fff');
		        $nav.css('border-color', '#d1d1d1');
		        $nav.css('box-shadow', 'inset 3px 0px 5px red;');
		    }
		}

		var element = $('.fact .number');
		var knob = $('.dial');
		if(isScrolledIntoView(element) && element.html() == "0")
			element.countTo();
		if(isScrolledIntoView(knob) && !dialed)
		{

			dialed = true;
			$('.dial').each(function () { 

	          var elm = $(this);
	          var color = elm.attr("data-fgColor");  
	          var perc = elm.attr("value");  
	 
	          elm.knob({ 
	               'value': 1, 
	                'min': 0,
	                'max': 100,
	                "readOnly": true,
	                "lineCap": 'round',
					"thickness": .2,
					"inputColor": "#2f2f2f",
					"font": "Raleway",
					"fontWeight": 700,
	                'dynamicDraw': true
	          });

	          $({value: 0}).animate({ value: perc }, {
	              duration: 1000,
	              easing: 'swing',
	              progress: function () {                  
	              	elm.val(Math.ceil(this.value)).trigger('change')
	              }
	          });

	          });
		}

	});

 	$("a[data-rel^='prettyPhoto']").prettyPhoto();

 	/* Carousel */

	$('#owl-demo').owlCarousel({
		autoPlay: true,
		singleItem: true
	});

	$('#owl-testimonials').each(function(){
		$(this).owlCarousel({
			singleItem : true
		});
	});

	$('.owl-fullscreen').each(function(){
		$(this).owlCarousel({
			singleItem: true,
			pagination: false,
			navigation: true,
			navigationText : ["<i class='icon icon-arrow-left'></i>","<i class='icon icon-arrow-rights'></i>"]
		});
	});

	$('#owl-clients').each(function(){
		$(this).owlCarousel({
			autoPlay: true,
			singleItem: false,
			items: 4,
			pagination: false,
			navigation: false
		});
	});

	var owlSpec = $('.owl-spec').each(function(){
		$(this).owlCarousel({
			singleItem: true,
			pagination: false,
			afterAction: afterOwl,
			autoPlay: 3000
		});
	});
    
    $('.spec-slider-nav a').click(function(){
    	event.preventDefault();
        var index = $(this).parent().index();
        owlSpec.trigger('owl.goTo', index);
    });

});
});

 	/* Image Click Event */

$('img').on('click', function (){
    $('body').append('<div id="dialog" title="Image"><img src="' + $(this).attr('src') + '" width="300" /></div>');
    $('#dialog').dialog();
});