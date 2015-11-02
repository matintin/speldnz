$(function(){
	// console.log('hi');
	var isOpen = false;

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


	
});