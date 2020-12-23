$(function() {
 
    var sections = $(".block1, .block2, .block3");
    const arrowright = document.querySelector('.arrow-right');
    const firstblock = document.querySelector('.block1'); 
    const secondblock = document.querySelector('.block2');  

	sections.wrap("<div class='section'></div>");
	$(".section").wrapAll("<div id='fullpage'></div>");
	
	window.page = $('#fullpage').fullpage({
        scrollingSpeed: 1000, 
        keyboardScrolling: true,
        controlArrows: true,
		css3: true,
		scrollBar: true
    });
    
    $(arrowright).click(function(){
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".block2").offset().top
        }, 1000);
    });

    $('.block2').on('mousemove', (e) => {
        const x = e.pageX / $(window).width();
        const y = e.pageY / $(window).height();

        $('.mouse-parallax__content1').css(
            'transform',
            'translate(' + x * 90 + 'px, ' + y *90 + 'px)'
        );
        $('.mouse-parallax__content2').css(
            'transform',
            'translate(' + x * 90 + 'px, ' + y *90 + 'px)'
        );
        $('.mouse-parallax__content3').css(
            'transform',
            'translate(' + x * 90 + 'px, ' + y *90 + 'px)'
        );
    });

    $("#phone").mask("+375(99)999-99-99", {
        completed: function(){ alert("Вы ввели номер: " + this.val()); }
      });

});