const signupForm = document.querySelector('#signup_form');
const error = document.querySelector('.err_message');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };
  fetch('/api/v1/signup', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 409) {
      error.textContent = 'User already exists.';
    } if (response.status === 201) {
      window.location.href = '/';
    } else {
      error.textContent = 'Please make sure your input is correct.';
    }
  });
});
