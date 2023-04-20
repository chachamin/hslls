$(document).ready(function(){
    // 메인-강좌정보
	$('.sd_le_main').slick({
		autoplay:false,
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
});