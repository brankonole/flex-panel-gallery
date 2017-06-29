(function (){
	$(document).on('click', '.js-panel', function (){
		var $this = $(this);

		if ($this.hasClass('active-panel')) {
			// var timeout = setTimeout(function () {
			// 	$this.find('.top-text').addClass('hidden');
			// 	$this.find('.down-text').addClass('hidden');
			// }, 1200);

			// var timeout2 = setTimeout(function () {
			// 	$this.find('.down-text').css({
			// 		'transform': 'translateY(200px)',
			// 		'transition': 'transform 0.3s',
			// 		'transition-timing-function': 'cubic-bezier(0.35, -0.01, 1, -0.33)'
			// 	});
			// 	$this.find('.top-text').css({
			// 		'transform': 'translateY(-200px)',
			// 		'transition': 'transform 0.3s',
			// 		'transition-timing-function': 'cubic-bezier(0.35, -0.01, 1, -0.33)',
			// 	});
			// }, 700);

			$this.removeClass('active-panel');
		// 	$this.css( 'transition', 'flex 0.7s' );
		// 	$this.css('transition-timing-function', 'cubic-bezier(0.35, -0.01, 1, -0.33)');
		// 	$this.find('.center-text').css({
		// 		'transition': 'font-size 0.7s',
		// 		'transition-timing-function': 'cubic-bezier(0.35, -0.01, 1, -0.33)'
		// 	});
		// 	$this.find('.down-text').css({
		// 		'transition': 'font-size 0.7s',
		// 		'transition-timing-function': 'cubic-bezier(0.35, -0.01, 1, -0.33)'
		// 	});
		// 	$this.find('.top-text').css({
		// 		'transition': 'font-size 0.7s',
		// 		'transition-timing-function': 'cubic-bezier(0.35, -0.01, 1, -0.33)'
		// 	});
		} else {
			// var timeout = setTimeout(function () {
			// 	$this.find('.hidden').removeClass('hidden');
			// }, 700);

			// var timeout2 = setTimeout(function () {
			// 	$this.find('.down-text').css({
			// 		'transform': 'translateY(-200px)',
			// 		'transition': 'transform 0.5s',
			// 		'transition-timing-function': 'cubic-bezier(-0.35, -0.01, 1, -0.33)'
			// 	});
			// 	$this.find('.top-text').css({
			// 		'transform': 'translateY(200px)',
			// 		'transition': 'transform 0.5s',
			// 		'transition-timing-function': 'cubic-bezier(-0.35, -0.01, 1, -0.33)'
			// 	});
			// }, 720);

			$this.addClass('active-panel');
		}
		
	});
}());