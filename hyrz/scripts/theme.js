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

$(function(){
	$('.error .success').hide();
	$('#button-send').click(function(event){
		$('#button-send').html('保存中...');
		event.preventDefault();		
		$.ajax({
			type: 'POST',
			url: 'send_form_email.php',
			data: $('#contact_form').serialize(),
			success: function(html) {
				if(html.success == '1')
				{
					$('#button-send').html('不好意思！服务器繁忙，请稍后重试！');
					$('#success').show();
				}
				else
				{
					$('#button-send').html('不好意思！服务器繁忙，请稍后重试！');
					$('#error').show();
				}					
			},
			error: function(){
				$('#button-send').html('不好意思！服务器繁忙，请稍后重试！');
				$('#error').show();
			}
		});
		
	});
});