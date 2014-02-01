
$(function() {
	
  $("form").submit(function(e) {
	 

	e.preventDefault();
	
	$('form').fadeOut();	
	$('body').css('cursor', 'progress');
		  
    $.ajax({ 
      url: this.action,
      type: $(this).attr('method'),
      data: $(this).serialize(),
      success: function(reply) {

			$('#ajaxEmailConf').html(reply).fadeIn();	
			$('body').css('cursor', 'default');		
	  
      }
    });
  });
  
});
