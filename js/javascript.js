$(function(){
	// console.log('hi');
	$('.menu').on("click", function() {

		$('#mobile-nav').removeClass("hidden");
		$('.menu').addClass('hidden');
		$('.close').removeClass('hidden');

	});

	$('.close').on("click", function() {

		$('#mobile-nav').addClass("hidden");
		$('.close').addClass('hidden');
		$('.menu').removeClass('hidden');

	});

	$('.learning').on("click",function(e) {

		if($(this).on("click")){
			$('.learning').css('flex','0 0 15em')
		}
			e.preventDefault();

			$('#learning-sub-menu').removeClass("hidden");
		if($('#learning-sub-menu').on("click")) {
			$(this).unbind();
		} 
		
	});


	
});