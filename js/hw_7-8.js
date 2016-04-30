(function($) {

$(function() {

/*=====================TABS SECTION===================*/
	$('ul.tabs__list').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

/*=====================INPUT SECTION===================*/
	$('.input > #input__list').mouseover(function (){
		$(this).next('span.hint').fadeIn(500);
	});

	$('.input > #input__list').mouseleave(function (){
		$(this).next('span.hint').fadeOut(300);
	});

	$('button').click(function (){
		$('.input').find('span.hint').slideToggle(500);
			return false;
	});
});

})(jQuery);
