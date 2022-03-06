const form = document.getElementById('form')
password2username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email)
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(username.value === '') {
    showError(username, 'This field is required');
  } else {
    showSuccess(username);
  }

  if(email.value === '') {
    showError(email, 'Email is required');
  } else if (!emailIsValid(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if(password.value === '') {
    showError(password, 'This field is required');
  } else {
    showSuccess(password);
  }

  if(password2.value === '') {
    showError(password2, 'This field is required');
  } else {
    showSuccess(password2);
  }
});