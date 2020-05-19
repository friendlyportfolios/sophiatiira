jQuery(document).ready(function($){
	//open popup
	$('.popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.popup').addClass('is-visible');
		$('.overlay').addClass('is-visible');
	});
	
	//close popup
	$('.popup').on('click', function(event){
		if( $(event.target).is('.popup-close, .popup-reserve') || $(event.target).is('.popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.popup').removeClass('is-visible');
	    }
    });
});

$("#launch").click(function() {
  $('.overlay').fadeIn();

});

$("#close, .overlay").click(function() {
  $('.overlay').fadeOut();
  $('.popup').removeClass('is-visible');
});









$(document).ready(function() {
  $('select').change(function() {
    $(this).prev('span').text(
      $(this).find(':selected').html()
    );
  });
});