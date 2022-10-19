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

	// Modal open
	const modalTrigger = document.querySelectorAll('.modal-open')
	const modalClose = document.querySelectorAll('.modal__close')
	const modal = document.querySelector('.modal')
	const contactForm = document.querySelector('.contact-form')

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', () => {
			modal.classList.add('active')
		})
	})

	modalClose.forEach(closeBtn => {
		closeBtn.addEventListener('click', () => {
			modal.classList.remove('active')
			setTimeout(() => {
				contactForm.reset()
			}, 500)
		})
	})

	modal.addEventListener('click', e => {
		if (e.target.classList.contains('modal')) {
			modal.classList.remove('active')
			setTimeout(() => {
				contactForm.reset()
			}, 500)
		}
	})

	  // Mask form
		$("#phone").mask("+7 (999) - 999 - 9999")
})
