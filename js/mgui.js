jQuery(function($){
	var $sd_item = $(".m-sdlist li")
	$sd_item.on('click',function(){
		$sd_item.removeClass('on')
		$(this).addClass('on')
	})
});