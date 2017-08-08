$(() => {
  console.log('JS loaded');

  $('.dropdown-button').dropdown();

  $(window).scroll(updateNav).trigger('scroll');
  function updateNav() {
    const viewportHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    if(scrollTop >= viewportHeight) {

      $('nav').css('opacity', '0.5');

    } else {
      $('nav').css('opacity', '1');

    }
  }
});
