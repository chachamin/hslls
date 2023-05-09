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

	//view_sd
	$('.view_sd').on('init', function(event, slick) {
		$(this).siblings('.slick-controls').children('.slick-nav').children('.counter').append('<span class="current"></span> / <span class="totals"></span>');
		$('.current').text(slick.currentSlide + 1);
		$('.totals').text(slick.slideCount);
	  })
	  main_visual = $('.view_sd').slick({
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

	// 강좌정보 tab
	$('.le_tabs > li > a.tab_link').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').siblings('li').find('a.tab_link').removeClass('active');		
		$(this).parent('li').find('.tab_cont').css('display','block');
		$(this).parent('li').siblings('li').find('.tab_cont').css('display','none');
		$('.sd_le_main').slick("setPosition");
	});

	// 공지사항 tab
	$('.news_tab_wrap > li > a.font_g').on('focus click' ,function(){
		$(this).addClass('active');		
		$(this).parent('li').siblings('li').find('a').removeClass('active');		
		$(this).parent('li').find('div').css('display','block');
		$(this).parent('li').siblings('li').find('div').css('display','none');
		$(this).parent('li').find('a.more').css('display','block');
		$(this).parent('li').siblings('li').find('a.more').css('display','none');
	});

	

	// -------------------------- 강좌정보등록  선택 활성화 --------------------------
	$(".way_chk").click(function () {
		if ($(this).is(":checked")) {
			$(this).parent().siblings().children(".way_text").removeAttr("disabled");
			$(this).parent().siblings().children(".way_text").focus();
		} else {
			$(this).parent().siblings().children(".way_text").attr("disabled", "disabled");
		}
	});

	$(".tea_chk").click(function () {
		if ($(this).is(":checked")) {
			$(this).parent().siblings().children(".tea_text").removeAttr("disabled");
			$(this).parent().siblings().children(".tea_text").focus();
		} else {
			$(this).parent().siblings().children(".tea_text").attr("disabled", "disabled");
		}
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

$(function(){
	//강사은행 강좌리스트
		function close_accordion_section() {
			$('.le_more_btn').removeClass('active');
			$('.t_le_list').stop().slideUp(500);
		}
	
		$('.le_more_btn').click(function(e) {
			// Grab current anchor value
	
			if($(this).is('.active')) {
				close_accordion_section();
			}else {
				close_accordion_section();
	
				// Add active class to section title
				$(this).addClass('active');
				// Open up the hidden content panel
				$(this).next('.t_le_list').stop().slideDown(500).addClass('open'); 
			}
	
			e.preventDefault();
		});
	});


