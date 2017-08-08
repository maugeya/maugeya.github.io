$(() => {
  console.log('JS loaded');

  $('.dropdown-button').dropdown();

  $('.parallax').parallax();

  $(function () {
    $(window).scroll(updateHeader).trigger('scroll');

    function updateHeader() {
      const viewportHeight = $(window).height();
      const scrollTop = $(window).scrollTop();

      if(scrollTop >= viewportHeight) {
        $('nav').addClass('translucent');
        $('.navbar-fixed').addClass('translucent');
      } else {
        $('nav').removeClass('translucent');
        $('.navbar-fixed').removeClass('translucent');
      }
    }
  });

});
