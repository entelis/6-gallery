
 $('.galimg img').each(function() {
	var width =$(this).width()
	var height=$(this).height()
	if (width<height)
	{
			$('.galimg img')
			.addClass('portrait')
			.css('height',width);


			
		}

   else {

   		$('.galimg img')
   		.addClass('landscape')
   		.css('width',height);

   }
 
});
/*
$(document).ready(function() {
	
	
	//$(landscape).addClass('landscape');
	$(landscape).each(function() {

	console.log ( $(this).addClass('landscape');

	});


	//$(portrait).addClass('portrait');
	$(portrait).each(function() {

	console.log ( $(this).addClass('portrait');

	}); 

	console.log( images.length )
	
	for (var index = 0; index < images.length; index = index + 1)
{
	console.log( images[index].caption); //[index]=[0]
	$('.galimg').addClass('landscape').appendTo('#gallery');
}
	$('.galimg').centerImage('inside');
	
});
*/

