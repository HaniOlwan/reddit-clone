const loginForm = document.querySelector('#login_form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  fetchData('/api/v1/login', 'POST', data).then((window.location.href = '/'));
});
