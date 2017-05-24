$(function() {
	$('#nav > div.item').hover(function() {
		var $this = $(this);
		$this.find('img').stop().animate({
			'width' : '83px',
			'height' : '83px',
			'top' : '-26px',/*16px*/
			'left' : '-16px'
		}, 500, 'easeOutBack', function() {
			$(this).parent().find('ul').fadeIn(700);
		});

		$this.find('a:first,h2').addClass('active');
	}, function() {
		var $this = $(this);
		$this.find('ul').fadeOut(500);
		$this.find('img').stop().animate({
			'width' : '52px',
			'height' : '52px',
			'top' : '0px',
			'left' : '0px'
		}, 500, 'easeOutBack');

		$this.find('a:first,h2').removeClass('active');
	});
	
	var ua = $.browser;

	if($.browser.mozilla){
		$("#main_content .title h1, #main_content .title h2").css("letter-spacing","-0.12em");	
	}
});



