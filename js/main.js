document.addEventListener('DOMContentLoaded', () => {
  // Links scroll
  const headerNav = document.querySelector('.nav')
  const homeLinks = document.querySelector('.home')

  function linkScroll(nav) {
    const links = nav.querySelectorAll('a[href*="#"')

    $(links).on("click", function(e){
      const anchor = $(this)
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 777);
      e.preventDefault()
      return false;
    })
  }

  linkScroll(headerNav)
  linkScroll(homeLinks)
})
