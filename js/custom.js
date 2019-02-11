jQuery(document).ready(function(e) {
    //var the_height2 = $(window).height() - 215;
    var the_height2 = $(window).height() - 220;
    jQuery('.ah-main-carousel').css('height', the_height2);
    jQuery('#myPlayer').css('height', the_height2);
});

  jQuery(window).resize(function(e) {
       
        showViewportSize();
  });
  
  function showViewportSize() { 
    var the_height = $(window).height();
    //alert(the_height);
 
    var the_final = the_height - 56;
    var the_height3 = $(window).height() - 220;
    jQuery('.navbar').css('top', the_final);
    jQuery('.ah-main-carousel').css('height', the_height3);
    jQuery('#myPlayer').css('height', the_height3);

  }

  jQuery(window).scroll(function (event) {
    var y = $(this).scrollTop(); //set position from top when to change style in pixels
      
    var the_height4 = $(window).height() - 220;

    if (y >= 5) {
        jQuery('.navbar').addClass('ah-fixed-menu');
    } else {
        jQuery('.navbar').removeClass('ah-fixed-menu');
    }
      
});


  



/* Parallax Effect */
$(window).scroll(function() {

    if ($(window).width() < 1750) {
        var y1 = $(window).scrollTop() / 8.5 - 250;
        var y2 = $(window).scrollTop() / 8.5 - 840;
    }
    else {
        var y1 = $(window).scrollTop() / 8.5 - 340;
        var y2 = $(window).scrollTop() / 8.5 - 840;
    }

    var x1 = "center ";

    if ($(window).scrollTop() > 0) {
        $('.parallax').css('background-position',  x1+y1+'px ');
        $('.parallax-2').css('background-position',  x1+y2+'px ');
    }
    else {
        $('.parallax').css('background-position',  'center -50px');
        $('.parallax-2').css('background-position',  'center -50px');
    }

});
/* Parallax Effect */


/* Owl Carousel */
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 2,
      loop: true,
      margin: 10,
      nav:true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true
    });
    $('.play').on('click', function() {
      owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function() {
      owl.trigger('stop.owl.autoplay')
    })
  })
  /* Owl Carousel */


  /* YT Player Mask */
  jQuery(document).ready(function() {
    var myPlayer = jQuery('.player').YTPlayer();
    myPlayer.on("YTPTime", function (e) {
         var currentTime = e.time;
         switch (currentTime) {
             case 1:
                 myPlayer.YTPAddMask('/images/clickforsound.png');
                 break;
             case 7:
                 myPlayer.YTPRemoveMask();
                 break;
         }
         $("#myPlayer").click(function(){
              $(".player").YTPToggleVolume();
          })
     });
     //YTPlayer Call Script 

  })