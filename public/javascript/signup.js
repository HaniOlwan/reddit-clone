const signupForm = document.querySelector('#signup_form');

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
  }).then(() => {
    window.location.href = '/';
  });
});
