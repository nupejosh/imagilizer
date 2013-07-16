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
	// if ($('#sidebar img:nth-child(n):not(.active)').click()){
	// 	$("#panel img:nth-child(n)").fadeOut();
	// 	$(this).addClass('active');
	// 	$(this).clone().removeAttr('width').appendTo('#panel');
		
	// };
})