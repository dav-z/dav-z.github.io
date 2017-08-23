$(document).ready(function() {

  $(".navlist").hide();

  $(".nav").hover(
    function() {
      $(".navlist").slideDown(500);
  },
    function(){
      $(".navlist").slideUp(200);
    }
  );

  var viewportHeight = $(window).height();

  $(".uparr").hide();

    $(window).scroll(
      function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $(".downarr").hide();
            $(".uparr").show();
        }
        else {
          $(".downarr").show();
          $(".uparr").hide();
        }
    });

    $("#downscroll").on("click", function(event) {
      event.preventDefault(); //Prevent default action of anchor
      $("html, body").animate({
        scrollTop: window.pageYOffset + $(window).height()  //Get the document height
      }, 1000); //Animates the scroll
      /* Can also use 3000, 4000 i.e 3 seconds, 4 seconds to animate the scroll */
    });
    $("#upscroll").on("click", function(event) {
      event.preventDefault(); //Prevent default action of anchor
      $("html, body").animate({
        scrollTop: 0  //Get the document height
      }, 1000); //Animates the scroll
      /* Can also use 3000, 4000 i.e 3 seconds, 4 seconds to animate the scroll */
    });


    $("#homebtn").on("click", function(event) {
      event.preventDefault(); //Prevent default action of anchor
      $("html, body").animate({
        scrollTop: 0  //Get the document height
      }, 1000); //Animates the scroll
      /* Can also use 3000, 4000 i.e 3 seconds, 4 seconds to animate the scroll */
    });

    $("#projectbtn").click(function (){
      $('html, body').animate({
        scrollTop: viewportHeight
      }, 1000);
    });

    $("#contactbtn").click(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      return false;
    });

    $("#contactclick").click(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      return false;
    });


    var wHeight = $(window).height();
    function parallax() {
      var pHeight = $(this).outerHeight();
      var pMiddle = pHeight / 2;
      var wMiddle = wHeight / 2;
      var fromTop = $(this).offset().top;
      var scrolled = $(window).scrollTop();
      var speed = $(this).attr('data-parallax-speed');
      var rangeA = (fromTop - wHeight);
      var rangeB = (fromTop + pHeight);
      var rangeC = (fromTop - wHeight);
      var rangeD = (pMiddle + fromTop) - (wMiddle + (wMiddle / 2));

      if (rangeA < 0) {
        rangeA = 0;
        rangeB = wHeight
      }

      var percent = (scrolled - rangeA) / (rangeB - rangeA);
        percent = percent * 100;
        percent = percent * speed;
        percent = percent.toFixed(2);

      var animFromBottom = (scrolled - rangeC) / (rangeD - rangeC);
      animFromBottom = animFromBottom.toFixed(2);

      if (animFromBottom >= 1) {
        animFromBottom = 1;
      }
      $(this).css('background-position', 'center ' + percent + '%');
      $(this).find('.parallax-content').css('opacity', animFromBottom);
      $(this).find('.parallax-content').css('transform', 'scale(' + animFromBottom + ')');
    }
    $('.parallax').each(parallax);
      $(window).scroll(function(e) {
        $('.parallax').each(parallax);
      });

});
