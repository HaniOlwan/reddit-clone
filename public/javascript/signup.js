const signupForm = document.querySelector('#signup_form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    username: e.target.username.value,
    password: e.target.password.value,
  };
  fetchData('/api/v1/signup', 'POST', data)
    .then((response) => response.json())
    .then((result) => {
      return result.status === 200 ? (window.location.href = '/') : '';
    });
});
