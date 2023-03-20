const errorMsg = document.querySelector('.error')
const submitBtn = document.querySelector('.submit-btn')
const input = document.querySelector('#email')
const modal = document.querySelector('.modal')
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const verifyForm = e => {
	e.preventDefault()
	if (regex.test(input.value)) {
		errorMsg.classList.remove('show')
		modal.classList.add('show')
		input.style.border = '1px solid var(--black)'
		setTimeout(() => {
			closeModal()
		}, 7000)
	} else {
		errorMsg.classList.add('show')
		modal.classList.remove('show')
		input.style.border = '1.5px solid var(--warning)'
	}
}
const closeModal = () => {
	modal.classList.remove('show')
}

submitBtn.addEventListener('click', verifyForm)
modal.addEventListener('click', closeModal)
