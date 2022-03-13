const signupForm = document.querySelector('#signup_form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    username: e.target.username.value,
    password: e.target.password.value,
  };
  fetchData('/api/v1/signup', 'POST', data);
});
