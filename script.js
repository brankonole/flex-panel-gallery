(function (){
	$(document).on('click', '.js-panel', function (){
		var $this = $(this);

		if ($this.hasClass('active-panel')) {
			$this.removeClass('active-panel');
		} else {
			$this.addClass('active-panel');
		}		
	});
}());
