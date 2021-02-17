jQuery('document').ready(function () {
	jQuery('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 700,
		//easing: 'ease',
		infinite: true,
		initialSlide: 0,
		autoplay: false,
		autoplaySpeed: 1800,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: false,
		swipe: true,
		touchTreshold: 1,
		touchMove: false,
		waitForAnimate: true,
		centerMode: true,
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		asNavFor: '.sliderbig',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		],
		mobileFirst: false,
		//appendArrows: '.slide'
		//appendDots:'',
	});
	/*jQuery('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		alert('NextSlide');
	})*/
	/*jQuery('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {

		var sld = 'currentSlide';
	})*/





	jQuery('.sliderbig').slick({
		arrows: false,
		slidesToShow: 1,
		fade: true,
		asNavFor: '.slider',
		adaptiveHeight: false,
	})


	jQuery('.slider').slick('setPosition');
	jQuery('.slider').slick('goTo', 2)

	jQuery('.link_pause').click(function (event) {
		jQuery('.slider').slick('slickPause')
	})
	jQuery('.link_play').click(function (event) {
		jQuery('.slider').slick('slickPlay')
	});

	$('.link__add').click(function (event) {
		$('.slider').slick('slickAdd', '<div class="slider__item"><img   src="https://klike.net/uploads/posts/2019-05/1558767816_12.jpg" alt="ОЙ КАРТИКИ НЕТ"></div>');
		$('.sliderbig').slick('slickAdd', '<div class="slider__item"><img  src="https://klike.net/uploads/posts/2019-05/1558767816_12.jpg" alt="ОЙ КАРТИКИ НЕТ"></div>');
		return false;

	})







	$('.link__remove').click(function (event,) {

		let curSl = $('.slider .slick-current').attr('data-slick-index');
		let curSlB = parseFloat($('.sliderbig .slick-current').attr('data-slick-index'));
		$('.slider').slick('slickRemove', (curSl));
		$('.sliderbig').slick('slickRemove', (curSlB));

		return false;
	})





	//$('.slider').slick("unslick");

});

