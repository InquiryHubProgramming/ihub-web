var scroll = 0;

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();

    scroll = currentScroll;

    if (scroll > 345) {
      $('header').addClass('scrolldown');
      $('#topbutton').removeClass('hidden');
    }
    else {
      $('header').removeClass('scrolldown');
      $('#topbutton').addClass('hidden');
    }

});
