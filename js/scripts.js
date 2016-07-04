/***************** Waypoints ******************/

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});






$(document).ready(function(){


	//Portfolio slider
	$('.folio_wrapper').flexslider({
	    animation: "slide",
	    slideshow: true,
	    animationLoop: false,
	    itemWidth: 313,
	    itemMargin: 80,
	    directionNav: false
	});









	//show sticky header on scroll
	var WinHeight = $('.billboard').innerHeight() - 100;

	$(document).on( 'scroll', window, function(){
		var vscroll = $(window).scrollTop();

	    if(vscroll > WinHeight) {

	    	$("header.hero_header #sitcky_menu").removeClass('active');
	    	hide_nav_menu('hero_header');
	    	$("header.header_fixed").stop().animate({
	    		marginTop : 0
	    	}, 200);

	    }else{

	    	$("header.header_fixed #sitcky_menu").removeClass('active');
			hide_nav_menu('header_fixed');
	    	$("header.header_fixed").stop().animate({
	    		marginTop : "-100px"
	    	}, 80);

	    }
	});









	//Navigation animated scroll
	$(document).on('click', 'header nav ul li a', function(event){
		event.preventDefault()
		var section = $(this).attr('href');
		var section_pos = $(section).position();

		if(section_pos){
			section_pos = section_pos.top - 50;
			$(window).scrollTo({top:section_pos, left:'0px'}, 1000, {easing:'easeInOutCubic'});
		}
		
	});









	//menu items show/hide animation
	var block;
	block = false;

	$(document).on( 'click', '#sitcky_menu', function(event){
		event.preventDefault();
		var header_pos;

		if($(this).hasClass('fixed_nav')){
			header_pos = 'header_fixed';
		}else if($(this).hasClass('hero_nav')){
			header_pos = 'hero_header';
		}

		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			show_nav_menu(header_pos);
			block = false;
		}else{
			$(this).removeClass('active');
			block = true;
			hide_nav_menu(header_pos);
		}
		
	});

	//function to show/animate the nav menu elements
	var timer;
	function show_nav_menu(selector){
		var count_li = $('header.' + selector + ' nav ul li').length - 1;	
		
		$('header.' + selector + ' nav ul li').each(function(i) {

			timer = setTimeout(function(){

				if(!block){		
					i = count_li - i;
					$('header.' + selector + ' nav ul li').eq(i).fadeIn(300).animate({marginTop : '0'}, {duration :300,queue:false});
				}else{
					clearTimeout(timer);
					$('header.' + selector + ' nav ul li').hide();
					block = true;
				}

			}, 200*i);		
			
		});			
			
	}

	//function to hide the nav menu
	function hide_nav_menu(selector){	
		$('header.' + selector + ' nav ul li').stop().fadeOut(300,function(){
			$(this).css({marginTop : '-10px;'});
		});
	}


});
