$(function() {
  $('#Grid').mixitup();

	$('.navbar-nav a').click(function (e) {
		e.preventDefault();
		$(this).parent('li').toggleClass('active');
		$(this).parent('li').siblings('.active').removeClass('active');
	})

	$('.header .navbar-nav a').smoothScroll();
});


function scrollTo(elem) {
  $('body,html').animate({
    scrollTop: elem.offset().top
  }, 500);
}

$(function() {
  $('#jump2top').css('bottom', '-100px');
  $(window).scroll(function () {
    var btn = $('#jump2top');
    if ($(this).scrollTop() > 100) {
      btn.stop().animate({'bottom' : '0'}, 200);
    } else {
      btn.stop().animate({'bottom' : '-100px'}, 200); 
  	}
  });

  $('#jump2top').smoothScroll();
});