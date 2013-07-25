// $(document).ready( function (){
// 	$("img:nth-child(1)").addClass('active');
// 	$("img:nth-child(1)").clone().removeAttr('width').appendTo('#panel');
// 	$("#sidebar img").click(function (){})

// })

$(document).ready( function(){
	$("#sidebar img:nth-child(n)").click(function(){
		$(this).addClass('active');
		$(this).clone().removeAttr('width').appendTo('#panel');
	})


	$('img').not('.active').click(function(){
		$('#panel').find('.active').remove();
		$('.active').removeClass('active');
		$(this).addClass('active').clone().removeAttr('width').appendTo('#panel');
		$('.caption').text($('.active').attr('data-caption'));
	})

	

	// .click( function(){
	// 	$(this).removeClass('active');
	// 	$(this).siblings().click(function(){$(this).addClass('active')});
	// })
		// {(this).siblings.removeClass('active');}
	// if ($('#sidebar img:nth-child(n):not(.active)').click()){
	// 	$("#panel img:nth-child(n)").fadeOut();
	// 	$(this).addClass('active');
	// 	$(this).clone().removeAttr('width').appendTo('#panel');
		
	// };
})