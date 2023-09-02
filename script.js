//Typewriter text effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      if (this.txt.length== fullTxt.length){
        this.el.innerHTML='<span class="wrap">'+this.txt+'<span class="text_colour">.</span></span>';
      }
      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
  };
	
//Slide to top smoothly
$(document).ready(function(){
  $(".navbar-brand a ,.navbar a, footer a[href='#top'], button a[href='#about'], a[href='#contact'").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 600, function(){
      window.location.hash = hash;
      });
    } 
  });
})

//animation slide in
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 700) {
      $(this).addClass("slide");
    }
  });
});
$(window).scroll(function() {
  $(".slideanim1").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 1000) {
      $(this).addClass("slide1");
    }
  });
});
$(window).scroll(function() {
  $(".slideanim2").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 900) {
      $(this).addClass("slide2");
    }
  });
});
// Highlight the top nav as scrolling occurs
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

/* Image gallery */
jQuery(document).ready(function ($) {
  $("#work-education").click(function(){
	$('#slider ul').html("<li><h2>Image 3</h2><img src='https://i.postimg.cc/1t80xBwS/card2-2.png'></li><li><h2>Image 1</h2><img src='https://i.postimg.cc/j2G7rrKQ/card2.jpg'></li><li><h2>Image 2</h2><img src='https://i.postimg.cc/4NV5NWMN/card2-1.png'></li>");
  });
  $("#work-menu").click(function(){
    $('#slider ul').html("<li><h2>Image 4</h2><img src='https://i.postimg.cc/3wcpZG6c/card3-4.png'></li><li><h2>Image 1</h2><img src='https://i.postimg.cc/1X5Q5gRy/card3-1.png'></li><li><h2>Image 2</h2><img src='https://i.postimg.cc/mDS4s3sd/card3-2.png'></li><li><h2>Image 3</h2><img src='https://i.postimg.cc/1zqRLNXT/card3-3.png'></li>");
  });
  $("#work-brochure").click(function(){
    $('#slider ul').html("<li><h2>Back Page</h2><img src='https://i.postimg.cc/BbxKsVvr/card4-1.png'></li><li><h2>Front Page</h2><img src='https://i.postimg.cc/N0MmTDNX/card4-2.png'></li>");
  })
  $("#work-bootstrap").click(function(){
    $('#slider ul').html("<li><h2>Image 5</h2><img src='https://i.postimg.cc/Fs3M5gV0/card5-5.png'></li><li><h2>Image 1</h2><img src='https://i.postimg.cc/SQ5TK2xV/card5-1.png'></li><li><h2>Image 2</h2><img src='https://i.postimg.cc/x8k6RYtK/card5-2.png'></li><li><h2>Image 3</h2><img src='https://i.postimg.cc/ZRnHb4k1/card5-3.png'></li><li><h2>Image 4</h2><img src='https://i.postimg.cc/Y2J5syYp/card5-4.png'></li>");
  });
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    
