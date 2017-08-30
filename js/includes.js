$(window).load(function() {
});

$(document).ready(function(){
	
	$(function(){
		var loader = $('#rd_preloader');
		var bar = $('#rd_preloader_bar');
		var max_width = loader.width();
		var time = 3000; // Time of the animation (3 sec.)
		
		// Sets the bar width to 0
		bar.width(0);
		
		bar.animate({
			width: max_width
		}, time);
	  
	});
		
	/*var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }
	
	$('.rd_mobi_menu').click(function(){
		$('#rd_main_navigation').fadeToggle();
	});*/
	
	
	
	
	var currentX = '';
	var currentY = '';
	var movementConstant = .010;
	if ( $(window).width() > 790) {
	$(document).mousemove(function(e) {
	  if(currentX == '') currentX = e.pageX;
	  var xdiff = e.pageX - currentX;
	  currentX = e.pageX;
	   if(currentY == '') currentY = e.pageY;
	  var ydiff = e.pageY - currentY;
	  currentY = e.pageY; 
	  $('.rd_parallax_img').each(function(i, el) {
		  var movement = (i + 1) * (xdiff * movementConstant);
		  var movementy = (i + -3) * (ydiff * movementConstant);
		  var newX = $(el).position().left + movement;
		  var newY = $(el).position().top + movementy;
		  $(el).css('left', newX + 'px');
		  $(el).css('top', newY + 'px');
	  });
	});
	}else{}
	
	$('.rd_how_it_works_trigger').click(function(){
		//$('.rd_how_it_works').fadeToggle();	
		if ( $(window).width() > 790) { 
			$('.rd_how_it_works').fadeToggle();	
			$('body').css('overflow-y','hidden');
		}
		else{
			$('.rd_how_it_works').fadeToggle();	
			$('html,body').animate({ scrollTop: $(".rd_how_it_works").offset().top}, 'slow');
		}
		
	});
	$('.rd_how_it_works .rd_close').click(function(){
		//$('.rd_how_it_works').fadeToggle();	
		if ( $(window).width() > 790) { 
			$('.rd_how_it_works').fadeToggle();
			$('body').css('overflow-y','auto');
		}
		else{
			$('.rd_how_it_works').slideToggle();
		}
	});
	$('.rd_prize_bttn').click(function(){
		//$('.rd_redeem_pop_up').fadeToggle();	
		if ( $(window).width() > 790) { 
			$('.rd_redeem_pop_up').fadeToggle();	
			$('body').css('overflow-y','hidden');
		}
		else{
			$('.rd_redeem_pop_up').fadeToggle();	
			$('html,body').animate({ scrollTop: $(".rd_redeem_pop_up").offset().top}, 'slow');
		}
	});
	$('.rd_redeem_pop_up .rd_close').click(function(){
		//$('.rd_redeem_pop_up').fadeToggle();	
		if ( $(window).width() > 790) { 
			$('.rd_redeem_pop_up').fadeToggle();
			$('body').css('overflow-y','auto');
		}
		else{
			$('.rd_redeem_pop_up').slideToggle();
		}
	});
	
	$('.rd_listed_prizes').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});
	
	
	
	

});