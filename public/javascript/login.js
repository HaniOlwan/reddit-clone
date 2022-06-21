const loginForm = document.querySelector('#login_form');
const error = document.querySelector('.err_message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };

  fetch('/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status === 201) {
      window.location.href = '/';
    } else {
      error.textContent = 'Please make sure your input is correct.';
    }
  });
});
