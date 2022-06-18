const loginForm = document.querySelector('#login_form');

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
    console.log(response);
    // window.location.href = '/';
  });
});
