$(function(){
	var windows = $(window);
	// 头部滚动时贴附浏览器顶端
  var stick = $(".nav-bar");
	windows.on('scroll',function() {    
		var scroll = windows.scrollTop();
		if (scroll < 105) {
			stick.removeClass("sticky");
		}else{
			stick.addClass("sticky");
		}
	});
	$('.m-nav').click(function(){
		$('.menu').toggleClass('active')
		$('.m-nav span').toggleClass('active')
	})
})