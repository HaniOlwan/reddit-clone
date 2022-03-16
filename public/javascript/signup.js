// const signupForm = document.querySelector('#signup_form');

// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const data = {
//     name: e.target.name.value,
//     email: e.target.email.value,
//     password: e.target.password.value,
//   };
//   fetchData('/api/v1/signup', 'POST', data)
//     .then((response) => response.json())
//     .then((result) => (result.status === 200 ? (window.location.href = '/') : ''));
// });

const signinForm = document.querySelector('#signin_form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  fetchData('/api/v1/signin', 'POST', data).then('IM IN FRONT').catch('CATCH IN FRONT');
});
