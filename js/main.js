$(document).ready(function(){
    // 메인-강좌정보
	$('.sd_le_main').slick({
		autoplay:true,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		fade: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',			
		responsive: [

			{
			  breakpoint: 1025,
			  settings: {	

				slidesToShow: 3

			  }
			},
			{
			  breakpoint: 769,
			  settings: {			  
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 620,
			  settings: {			  
				autoplay: true,
				slidesToShow: 1.7

			  }
			}
		  ]
	});

	//알림배너
	$('.al_sd').on('init', function(event, slick) {
		$(this).siblings('.slick-controls').append('<div class="counter"><span class="current"></span> / <span class="total"></span></div>');
		$('.current').text(slick.currentSlide + 1);
		$('.total').text(slick.slideCount);
		})
		al_sd = $('.al_sd').slick({
			autoplay: true,
			dots: false,
			pauseOnDotsHover: false,
			pauseOnHover: false,
			speed: 600,
			arrows: false,
			autoplaySpeed: 5000,
			fade: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			cssEase: 'linear'
			
		}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$('.current').text(nextSlide + 1);
		});

	//공동 재생 멈춤
	slick_stop = $('.slick-stop').on('click', function() {
		$(this).siblings('.slick-play').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
	});

	$('.slick-play').on('click', function() {
		$(this).siblings('.slick-stop').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPlay');
	});
	$('.slick-prev').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickPrev');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	$('.slick-next').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickNext');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	
});

//  -------------------------- gnb  --------------------------

function web_menu(a){
	var gnbarea = $('#header');
	var lnb = $('#gnb'),
	depth1 = $(".top1menu");
	depth1.find(" > li > div").addClass('top2m');
	depth1.find(" > li").each(function(){
		var Index = $(this).index()+1;
		$(this).addClass('mn'+Index);
	});
	depth1.find("ul ul").show();
	mask = $( '.tmnbg' );

	var depth2 = $('.top1menu .top2m'),
		lnbLeave = $("#mMenu,.logoBox a");

	depth2.hide();
	depth1.find(" > li > a").off();

	
	var dep1_length = depth1.find(" > li").size();
	for (i=1;i <= dep1_length;i++) {
		depth1.find("> li:nth-child("+i+") .top2m").addClass('m'+i);
	}

	depth1.find(" > li").on('mouseenter focusin',function(event){
		$(this).addClass('hover');
	});
	
	depth1.find(" > li").on('mouseleave focusout',function(event){
		$(this).removeClass('hover');
	});

	depth1.find(" > li > a").on('mouseenter focusin',function(event){
		event.preventDefault ();

		depth2.hide();
		$(this).parent('.depth1').find('.top2m').stop().slideDown('8000');
		gnbarea.addClass('on');
		depth1.addClass('on');
		mask.stop().slideDown('6000');
	});

	depth1.mouseleave(function(){
		mask.stop().slideUp('8000');
		depth2.stop().slideUp('8000');
		depth1.removeClass('on');
		gnbarea.removeClass('on');
	});
	$('.depth1').on('mouseleave',function(){
	 	$(this).find('.top2m').stop().slideUp('8000');
	});
	
	lnbLeave.focusin(function(){
		mask.stop().slideUp('8000');
		depth2.stop().slideUp('8000');
		depth1.removeClass('on');
	});

};

$(function () {
	$(window).on({
		load: function () {
			if ($(window).width() > 1280) {
				web_menu();
			}
		}
	});
});
