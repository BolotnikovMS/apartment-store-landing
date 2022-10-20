document.addEventListener('DOMContentLoaded', () => {
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
