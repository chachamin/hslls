$(document).ready(function(){

	// popup_sd
	$('.popup_sd').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 4000,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear'
	});

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
			  breakpoint: 1000,
			  settings: {	

				slidesToShow: 2

			  }
			},
			{
			  breakpoint: 769,
			  settings: {			  
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 620,
			  settings: {			  
				autoplay: true,
				slidesToShow: 1

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
			cssEase: 'linear',
			responsive: [

				{
				  breakpoint: 1000,
				  settings: {	
	
					slidesToShow: 2
	
				  }
				},
				{
				  breakpoint: 769,
				  settings: {			  
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 620,
				  settings: {			  
					autoplay: true,
					slidesToShow: 1
	
				  }
				}
			  ]
			
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

	// Side Menu
	var menu_v = $('div.menu_v');
	var sItem = menu_v.find('>ul>li');
	var ssItem = menu_v.find('>ul>li>ul>li');
	var lastEvent = null;
	sItem.find('>ul').css('display','none');
	menu_v.find('>ul>li>ul>li[class=active]').parents('li').attr('class','active');
	menu_v.find('>ul>li[class=active]').find('>ul').css('display','block');
	function menu_vToggle(event){
		var t = $(this);
		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function(){ lastEvent=null }, 4000);
		if (t.next('ul').is(':hidden')) {
			sItem.find('>ul').slideUp(2000);
			t.next('ul').slideDown(2000);
		} else if(!t.next('ul').length) {
			sItem.find('>ul').slideUp(2000);
		} else {
			t.next('ul').slideUp(2000);
		}
		if (t.parent('li').hasClass('active')){
			t.parent('li').removeClass('active');
		} else {
			sItem.removeClass('active');
			t.parent('li').addClass('active');
		}
	}

	// -------------------------- mGnb 열기 --------------------------
	$("#mMenu").click(function(){
		$("#mGnb").css("display","block");
		$("#mGnb").animate({right: 0}, 300);
		$("#dimed").fadeIn(300);
	});

// -------------------------- mGnb 메뉴 열기닫기  --------------------------
	$(".mDepth1 > li > a").click(function(){
		$(".mDepth1 > li > a").removeClass("active");
		$(".mDepth2 li").removeClass("active");
		var mDepth2 = $(this).siblings("ul").css("display");
		if( mDepth2 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth2").slideUp(300);
			$(this).siblings("ul").slideDown(300);
		}
	});
	/*mGnb menu*/
	$(".mDepth2 > li > a").click(function(){
		$(".mDepth2 > li > a").removeClass("active");
		$(".mDepth3 li").removeClass("active");
		var mDepth3 = $(this).siblings("ul").css("display");
		if( mDepth3 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth3").slideUp(300);
			$(this).siblings("ul").slideDown(300);
			$(this).siblings("ul").find("li").addClass("active");
		}
	});

// -------------------------- gotop top bottom --------------------------

	$(".loca_nav .top").click(function(){
		$("html, body").animate({scrollTop:0}, 500);
	});
	$('.loca_nav .bottom').click(function() {
	    $('body,html').animate({scrollTop: $(document).height()}, 500);
    return false;
	});

	// -------------------------- 스킵네비 포커스잡아주기--------------------------
    $("#skipNavi > a").click(function(){
		$($(this).attr("href"))
		  .attr("tabindex","0")
		  .css("outline","0")
		  .focus();
		});
	
		// Select all links with hashes
		$('a.smooth[href*="#"]')
		  // Remove links that don't actually link to anything
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
			// On-page links
			if (
			  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			  && 
			  location.hostname == this.hostname
			) {
			  // Figure out element to scroll to
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			  // Does a scroll target exist?
			  if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
				  scrollTop: target.offset().top
				}, 1000, function() {
				  // Callback after animation
				  // Must change focus!
				  var $target = $(target);
				  $target.focus();
				  if ($target.is(":focus")) { // Checking if the target was focused
					return false;
				  } else {
					$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
					$target.focus(); // Set focus again
				  };
				});
			  }
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

	// -------------------------- 화면확대축소 --------------------------

$(function(){

	var zoom = 1;
	$(".btn-zoomup").click(function() {
		var T = Number('1e'+1);
		if(zoom == 1.5){
			alert("최대 화면 크기 입니다.\n더 이상 확대하실 수 없습니다");
			return false;
		}
		zoom = Math.round((zoom+0.1)*T)/T;
		$("body").css("zoom",zoom);
	});
	$(".btn-zoomdown").click(function() {
		var T = Number('1e'+1);
		if(zoom == .8) {
			alert("최소 화면 크기 입니다.\n더 이상 축소하실 수 없습니다.");
			return false;
		}
		zoom = Math.round((zoom-0.1)*T)/T;
		$("body").css("zoom",zoom);
	});
	$(".btn-zoom100").click(function() {
		zoom = 1;
		$("body").attr("style",'');
	});
});	

// -------------------------- mGnb close --------------------------
function mGnbClose() {
	$("#mGnb").animate({right: "-80%"}, 300);
	$("#mGnb").fadeOut(300);
	$("#dimed").fadeOut(300);
	$(".mDepth2 > li > a").removeClass("active");
	$(".mDepth3").slideUp(300);
}

//  -------------------------- mGnb display --------------------------
$( window ).resize(function() {
	var winWidth = $( window ).width();
	if(winWidth >= 1024) {
		mGnbClose();
		} else {
		mGnbClose();
		}
});


// -------------------------- 상단으로 나타나기 --------------------------
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 360 ) {
		$( '.loca_nav' ).fadeIn(500);
	} else {
		$( '.loca_nav' ).fadeOut(500);
	}

} );


$(function(){
	//조례
		function close_accordion_section() {
			$('.ordinance_tit').removeClass('active');
			$('.ordinance_con').stop().slideUp(500);
		}
	
		$('.ordinance_tit').click(function(e) {
			// Grab current anchor value
	
			if($(this).is('.active')) {
				close_accordion_section();
			}else {
				close_accordion_section();
	
				// Add active class to section title
				$(this).addClass('active');
				// Open up the hidden content panel
				$(this).next('.ordinance_con').stop().slideDown(500).addClass('open'); 
			}
	
			e.preventDefault();
		});
	});


