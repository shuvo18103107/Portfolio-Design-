$(function () {

	//Animation Start
	new WOW().init();
	//Animation End

	//Banner js Start
	$('.banner_part').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		speed: 800,
		fade: true,
		cssEase: 'linear',
		arrows: true,
		autoplay: true,
		autoplayspeed: 1500,
		prevArrow: '<i class="fas fa-chevron-left b_left"></i>',
		nextArrow: '<i class="fas fa-chevron-right b_right"></i>',
	});
	//Banner js End


	//Barfiller progress bar start
	$(function () {

		$bf = $('.service').offset().top;

		"use strict";
		var wind = $(window);

		wind.on("scroll", function () {

			var bodyScroll = wind.scrollTop()

			if (bodyScroll >= $bf) {

				$('#bar1').barfiller({
					barColor: "#fb9631",
					duration: 2000
				});

				$('#bar2').barfiller({
					barColor: "#fb9631",
					duration: 2000
				});

				$('#bar3').barfiller({
					barColor: "#fb9631",
					duration: 2000
				});
			}

		});

	});
	//Barfiller progress bar end


	//Round Progressbar Start
	$(function () {

		$bf = $('.service').offset().top;

		"use strict";
		var wind = $(window);

		wind.on("scroll", function () {

			var bodyScroll = wind.scrollTop()

			if (bodyScroll >= $bf) {

				$('.chart').easyPieChart({
					barColor: "#fb9631",
					trackColor: "#e8e8e8",
					scaleColor: "#fb9631",
					scaleLength: 10,
					lineWidth: 5,
					size: 125,
					animate: {
						duration: 2000,
						enabled: true
					}
				});
			}

		});

	});
	//Round Prgressbar End


	//Counter Js Start
	$('.counter').counterUp({
		delay: 30,
		time: 1500
	});
	//Counter Js End


	//MixIt Up Start
	var mixer = mixitup('.filter_cls');
	//MixIt Up End


	//Venobox start
	$(document).ready(function () {
		$('.venobox').venobox({
			framewidth: '500px',
			frameheight: '400px'
		});
	});
	//Venobox end


	//Testimonial Slider start

	$('.test_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 800,
		centerMode: true,
		centerPadding: '40px',
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1500,
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
  ]
	});
	//Testimonial Slider End


	//Menu Fixed start
	$('.top_btn').click(function () {


		$('html,body').animate({

			scrollTop: 0

		}, 1000);


	});

	var $nav = $('.header').offset().top;

	$(window).scroll(function () {

		$scrolling = $(this).scrollTop();

		if ($scrolling >= $nav) {

			$('.header').addClass('fixedmenu');
			$('.header_bg').addClass('header_bg_fixed');

		} else {

			$('.header').removeClass('fixedmenu');
			$('.header_bg').removeClass('header_bg_fixed');

		}

		//Top Button
		if ($scrolling >= 500) {

			$('.top_btn').fadeIn();

		} else {

			$('.top_btn').fadeOut();

		}

	});
	//Menu Fixed End


	//Smooth Scroll start
	$('.header a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1500, function () {
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) {
							return false;
						} else {
							$target.attr('tabindex', '-1');
							$target.focus();
						};
					});
				}
			}
		});
	//Smooth SCroll End

	//Preloader Start
	$(window).load(function () {
		$('.preloader').fadeOut('slow', function () {
			$(this).remove();
		});
	});
	//Preloader End

})
