(function($){
	$(document).ready(function(){
		var stars = $('#rating .rating_star'),
			radios = $(':radio[name="rating"]');
			
		stars.hover(
			function(){
				var that = $(this);
				that.prevAll().addBack().addClass('rating_star--hovered');
			},
			function(){
				var that = $(this);
				that.prevAll().addBack().removeClass('rating_star--hovered');
			}
		);
		stars.on("click", function(){
			var that = $(this);
			var index = that.index();
			that.siblings().removeClass('rating_star--selected');
			that.prevAll().addBack().addClass('rating_star--selected');
			radios.eq(index).prop('checked', true);
		});
	});
})(jQuery);