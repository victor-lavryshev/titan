var animate = false;
var wScroll;

$(document).ready(function() {
	wscr();
	mobmenu();

	$.fancybox.defaults.hash = false;
	
	$(".out").on("click", ".menu-toggle, .contacts-toggle", function (event) {
		if($("body").hasClass("openmenu") && !$(this).hasClass("active")) {
			$("body").removeClass("openmenu");
			var openedItem = $(".header__toggle .active").attr("href");
			$(".header__toggle .active").removeClass("active");
			$(openedItem).removeClass("open");
		}
		if(!animate) {
			var item = $(this).attr("href");
			$("body,html").animate({scrollTop: 0}, 300);
			animate = true;
			$(this).toggleClass("active");
			$(item).toggleClass("open");
			if($(item).hasClass("open")) {
				$("body").addClass("openmenu showmenu");
				$("body").css("padding-right", wScroll + "px");
				setTimeout(function(){
					animate = false;
				}, 600);
			}
			else {
				$("body").removeClass("showmenu");
				setTimeout(function(){
					$("body").removeClass("openmenu");
					$("body").css("padding-right", "0px");
					animate = false;
				}, 600);
			}
		}
		return false;
	});

	$("body").on("click", ".scroll", function (event) {
		$(".header__toggle .active").removeClass("active");
		$(".menu, .contacts").removeClass("open");
		$("body").removeClass("showmenu");
		setTimeout(function(){
			$("body").removeClass("openmenu");
			$("body").css("padding-right", "0px");
		}, 300);

		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top ;
		$("body,html").animate({scrollTop: destination }, 600);
		return false;
	});

	$("body").on("click", ".menu .scroll", function (event) {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$(".menu-toggle").toggleClass("active");
		$(".menu").removeClass("open");
		$("body").removeClass("openmenu");
		$("body").css("padding-right", "0px");
		setTimeout(function(){
			$("body,html").animate({scrollTop: destination }, 600);
		}, 600);		
		return false;
	});

	var variants = new Swiper('.variants .swiper', {
		loop: false,
		slidesPerView: 3,
		spaceBetween: 32,
		pagination: {
			el: '.variants .swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 25
			},			
			1200: {
				slidesPerView: 3,
				spaceBetween: 30
			},
		}
	});

	var only = new Swiper('.only .swiper', {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 20,
		noSwipingSelector: ".only .twentytwenty-handle",
		pagination: {
			el: '.only .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.only .swiper-button-next',
			prevEl: '.only .swiper-button-prev',
		},
	});

	/*
	$(".only .slide").twentytwenty({
		move_slider_on_hover: false,
	});
	*/

	$(".consent input[type='checkbox']").change(function(){
		$(this).parents("form").find("[type='submit']").prop('disabled', !$(this).prop("checked"));
	});


	$('.carousel').each(function(index, element){
		$(this).addClass("carousel-" + index);
		var carousel = new Swiper(".carousel-" + index + ".swiper", {
			loop: false,
			slidesPerView: 4,
			spaceBetween: 32,
			navigation: {
				nextEl: ".carousel-" + index + " .swiper-button-next",
				prevEl: ".carousel-" + index + " .swiper-button-prev",
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: "auto",
				},
				575: {
					spaceBetween: 20,
					slidesPerView: "auto",
				},
				992: {
					spaceBetween: 26,
					slidesPerView: "auto",
				},
				1200: {
					spaceBetween: 32,
					slidesPerView: 4,
				}
			},
		});
	});

	var video = new Swiper('.video .swiper', {
		loop: false,
		slidesPerView: 2,
		spaceBetween: 32,
		pagination: {
			el: '.video .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: ".video .swiper-button-next",
			prevEl: ".video .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 25
			}
		}
	});

	var ratings = new Swiper('.ratings .swiper', {
		loop: false,
		slidesPerView: 5,
		spaceBetween: 32,		
		navigation: {
			nextEl: ".ratings .swiper-button-next",
			prevEl: ".ratings .swiper-button-prev",
		},
		breakpoints: {
			0: {
				spaceBetween: 16,
				slidesPerView: "auto",
			},
			575: {
				spaceBetween: 20,
				slidesPerView: "auto",
			},
			992: {
				spaceBetween: 25,
				slidesPerView: "auto",
			},
			1200: {
				spaceBetween: 32,
				slidesPerView: 5,
			}
		},
	});

	if($("*").is(".ratings")) {		
		var rating;
		var int;
		var fract;

		$('.rating__stars').each(function () {
			var rating = $(this).data("rating");			
			var pr = rating / 5 * 100;
			$(this).append("<div class='rating__stars-bar' style='width: " + pr + "%;'></div>");
		});
	}

	var documents = new Swiper('.documents .swiper', {
		loop: false,
		slidesPerView: 2,
		spaceBetween: 32,		
		navigation: {
			nextEl: ".documents .swiper-button-next",
			prevEl: ".documents .swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 16,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 26,
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
		}
	});

	$('.portfolio .portfolio__room').hover(
		function(){
			$(".portfolio .portfolio__room").removeClass("active");
			$(this).addClass("active");
		},
		function(){
	});

	$(".portfolio").on("click", ".portfolio__room", function (event) {
		event.preventDefault();
        $.fancybox.open($(this).find(".portfolio__room-gallery a"));
    });

    var portfolio = new Swiper('.portfolio .swiper', {
		loop: true,
		slidesPerView: "auto",
		spaceBetween: 8,
		on: {
			init: function (swiper) {
				$(".portfolio .portfolio__room").removeClass("active");
				$(".portfolio .portfolio__room:eq(" + swiper.realIndex + ")").addClass("active");
			},

			slideChange: function (swiper) {
				$(".portfolio .portfolio__room").removeClass("active");
				$(".portfolio .portfolio__room:eq(" + swiper.realIndex + ")").addClass("active");
			},
		},
	});

	$(".quiz").on("click", ".answer", function (event) {
		$(this).parents(".quiz__step-answer").find(".answer").removeClass("active");
		$(this).addClass("active");
		$(this).parents(".quiz__step").find(".quiz__step-controls .next").removeClass("disabled");
		return false;
	});

	var total;
	var current = 1;

	$(".quiz__form").hide(0);

	var quiz = new Swiper('.quiz .swiper', {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 8,
		allowTouchMove: false,
		pagination: {
			el: ".quiz .swiper-pagination",
			type: "progressbar",
		},
		on: {
			init: function (swiper) {
				total = swiper.slides.length;
				$(".quiz__steps-stages .total").text(total);
			},
			slideChange: function (swiper) {
				current = swiper.realIndex + 1;
				$(".quiz__steps-stages .current").text(current);				
			},
		},
	});

	$(".quiz").on("click", ".quiz__step-controls .btn", function (event) {
		if($(this).hasClass("next") && (!$(this).hasClass("disabled"))) {
			if(current < total) {
				quiz.slideNext();
			} else {
				var answers = "";
				$('.quiz__step').each(function(index, element){
					answers = answers + $(this).find(".quiz__step-question").text() + " - " + $(this).find(".answer.active .answer__text").text() + "\n";
				});
				$(".quiz__form form .answers").val(answers);

				$(".quiz__wrapp").addClass("hide");
				setTimeout(function(){
					$(".quiz__wrapp").hide(0);
					$(".quiz__form").show(0).addClass("show");
				}, 300);
			}
		}
		if($(this).hasClass("prev")) {
			quiz.slidePrev();
		}
		return false;
	});

	$(".quiz").on("click", ".time__section-input input", function (event) {
		if(!$(this).parents(".time__section-input").hasClass("open")) {
			$(".time__section-input.open").removeClass("open");
			$(".time__section-options").fadeOut(300);	

			$(this).parents(".time__section-input").addClass("open");
			$(this).next(".time__section-options").fadeIn(300);
		} else {
			$(this).parents(".time__section-input").removeClass("open");
			$(this).next(".time__section-options").fadeOut(300);
		}		
		return false;
	});

	$(".quiz").on("click", ".time__section-options p", function (event) {
		$(this).parents(".time__section-input").find("input").val($(this).text());
		$(this).parents(".time__section").find(".time__section-options p").removeClass("active");
		$(this).addClass("active");
		$(this).parents(".time__section-input").removeClass("open");
		$(this).parents(".time__section-input").find(".time__section-options").fadeOut(300);

		if($(this).parents(".time__section").hasClass("time__section-from")) {
			var indexFrom = $(".time__section-from .time__section-options p").index(this);
			var indexTo = $(".time__section-to .time__section-options p").index($(".time__section-to .time__section-options .active"));
			$(".time__section-to .time__section-options p").hide(0);
			$(".time__section-to .time__section-options p:eq(" + indexFrom + "), .time__section-to .time__section-options p:gt(" + indexFrom + ")").show(0);

			if(indexFrom > indexTo) {
				$(".time__section-to .time__section-options p.active").removeClass("active");
				$(".time__section-to .time__section-options p:eq(" + indexFrom + ")").addClass("active");
				$(".time__section-to input").val($(".time__section-to .time__section-options p.active").text());
			}
		}
	});
});

$(window).on("load", function(e) {
	wscr();
});

$(document).mouseup(function (e){ 
	var div = $(".time__section-input");
	if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass("open")) {
		div.removeClass("open");
		div.find(".time__section-options").fadeOut(300);
	}
});

$(window).resize(function() {
	setTimeout(function(){
		wscr();
		$("body").removeClass("openmenu showmenu").css("padding-right", "0px");
		$(".header__toggle .active").removeClass("active");
		$(".menu, .contacts").removeClass("open");
	}, 500);
});

function wscr() {
	if($(document).height() > $(window).height()) {
		var block = $('<div>').css({'height':'50px','width':'50px'}),
		indicator = $('<div>').css({'height':'200px'});

		$('body').append(block.append(indicator));
		var w1 = $('div', block).innerWidth();    
		block.css('overflow-y', 'scroll');
		var w2 = $('div', block).innerWidth();
		$(block).remove();
		wScroll = w1 - w2;
	}
	else {
		wScroll = 0;
	}
}

function mobmenu() {
	$("body").append('<div class="contacts" id="contacts"><div class="contacts__table"><div class="contacts__content"><div class="container"></div></div></div></div>');
	$(".contacts .container").append('<div class="contacts__phones">' + $(".header .header__phones-wrapp").html() + '</div>');
	$(".contacts .container").append('<div class="contacts__button">' + $(".header .header__button").html() + '</div>');
	$(".contacts .container").append('<div class="contacts__messengers"><p>Связаться по месседжеру:</p>' + $(".header .header__messengers").html() + '</div>');	
}