const signupForm = document.querySelector('#signup_form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value,
  };
  fetchData('/api/v1/signup', 'POST', data)
    .then((response) => response.json())
    .then((result) => (window.location.href = '/'));
});
