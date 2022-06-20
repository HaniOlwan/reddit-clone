const loginForm = document.querySelector('#login_form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };

  fetch('/api/v1/signup', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(() => {
    window.location.href = '/';
  });
});
