const form = document.getElementById('form')
const firstName = document.getElementById('first_name')
const lastName = document.getElementById('last_name')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', e => {
  e.preventDefault()
  validateInputs()
})

const input = [firstName, lastName, email, password]

input.forEach(input => {
  input.addEventListener('focus', () => {
    setSuccess(input)
  })
})

const isValidEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function setError(input, message) {
  const formControl = input.parentElement
  const errorInput = formControl.querySelector('input')
  errorInput.className = 'error_input'
  const label = formControl.querySelector('label')
  label.innerText = message
}

function setSuccess(input) {
  const formControl = input.parentElement
  const label = formControl.querySelector('label')
  label.innerText = ''
  const errorInput = formControl.querySelector('input')
  errorInput.classList.remove('error_input')
}

const validateInputs = () => {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if (firstNameValue === '') {
    setError(firstName, 'First name is required')
  } else {
    setSuccess(firstName)
  }

  if (lastNameValue === '') {
    setError(lastName, 'Last name is required')
  } else {
    setSuccess(lastName)
  }

  if (emailValue === '') {
    setError(email, 'Email is required')
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address')
  } else {
    setSuccess(email)
  }

  if (passwordValue === '') {
    setError(password, 'Password is required')
  } else if (passwordValue.length < 4) {
    setError(password, 'Password must be at least 4 character.')
  } else {
    setSuccess(password)
  }
}
