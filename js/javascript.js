$(function(){
	// console.log('hi');
	var isOpen = false;

//-------------------------menu----------------------------------
	$('.menu').on("click", function() {

		if(isOpen == false) {

			$('#mobile-nav').slideDown("slow");
			$('.open').addClass('hidden');
			$('.close').removeClass('hidden');
			isOpen = true;
		} else {

			$('#mobile-nav').slideUp("slow");
			$('.close').addClass('hidden');
			$('.open').removeClass('hidden');

			if(isLearningOpen=true) {
				$('#learning-sub-menu').slideUp("slow");
				$(".plus").attr("src","asset/icons/plus.png");
			}
			isOpen = false;
		}

	});

//-------------------------menu----------------------------------

//---------------------learning-submenu--------------------------
	var isLearningOpen = false;


	$('.learning span').on("click",function() {

		//$('#mobile-nav').css('height','426px');

		if(isLearningOpen==false) {

			$(".plus").attr("src","asset/icons/minus.png");

			$('#learning-sub-menu').slideDown("slow");

			isLearningOpen=true;

		} else {
			
			$(".plus").attr("src","asset/icons/plus.png");
			$('#learning-sub-menu').slideUp("slow");
			isLearningOpen=false;
		}	
		
	});
//---------------------learning-submenu--------------------------


//---------------------search------------------------------------	
	var isSearchOpen = false;
	$('.search').on("click",function() {
		if(isSearchOpen == false) {

			$('#search-box').slideDown();
			isSearchOpen = true;

		} else {
			$('#search-box').slideUp(function() {
				$('#search-box').css("display","none");
			});
			isSearchOpen = false;
		}
	});
//---------------------search------------------------------------

//---------------------reading-assist----------------------------

	$('.off-box').on("click",function() {
		$('.circle img').attr("src","asset/icons/circle-on.png");
		$('.on-box').css("border","none").css("background-color","rgba(0,0,0,0)").css("color","#fff").css("font-weight","100");
		$('.off-box').css("background-color","#fff").css("border","1px #fff solid").css("border-radius","3px").css("color","tomato");
		$('.on-off-wrap').css("background-color","#CDDC39").css("border","2px #CDDC39 solid");
	});

	$('.on-box').on("click",function() {
		$('.circle img').attr("src","asset/icons/circle-off.png");
		$('.off-box').css("border","none").css("background-color","rgba(0,0,0,0)").css("color","#fff").css("font-weight","100");
		$('.on-box').css("background-color","#fff").css("border","1px #fff solid").css("border-radius","3px").css("color","tomato");
		$('.on-off-wrap').css("background-color","#888").css("border","2px #888 solid");
	});
var isBottomOpen = false;

	$('.reading-assist-top').on("click",function() {
		if(isBottomOpen == false) {

			$('.reading-assist-bottom').css("display","flex");
			isBottomOpen = true;

		}else {

			$('.reading-assist-bottom').css("display","none");
			isBottomOpen =false;
		}
	});
//---------------------reading-assist----------------------------

});//jquery

//------------------image-slider----------------------------------

$(document).ready(function(){
  $('.image-slider').slick({
      slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
  });
});
//------------------image-slider----------------------------------
	