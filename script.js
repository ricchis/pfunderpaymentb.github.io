$('.btn').on('click', function() {
 $(this).addClass('loading');
	$(this).text('wait, while we confirm payment');
	$(this).prepend('<i class="fa fa-spinner fa-pulse"></i> ');
});