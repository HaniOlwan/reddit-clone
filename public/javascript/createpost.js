const errMessage = document.querySelector('.error_message');

window.onload = () => {
  const username = document.querySelector('#username');
  const postUsername = document.querySelector('.post_username');
  // const cookie = document.cookie.split(';')[1].split('=')[1];
  const cookie = document.cookie.split('=')[1];
  const parseJwt = (token) => {
    try {
      const user = JSON.parse(atob(token.split('.')[1]));
      username.textContent = user.name;
      postUsername.textContent = `u/${user.name}`;
    } catch (e) {
      return null;
    }
  };
  parseJwt(cookie);
};

const postForm = document.querySelector('#post_form');
const warning = document.querySelector('#error_message');
postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    title: e.target.title.value,
    body: e.target.body.value.replace(/\s/g, ' ').trim(),
  };
  if (data.title.length < 3 || data.body.length < 8) {
    warning.textContent = 'Make sure to fill all the inputs';
    warning.style.display = 'block';
  } else {
    fetch('/api/v1/post/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 400) {
        errMessage.textContent = 'Post could not be created';
      } if (response.status === 201) {
        window.location.href = '/';
      } else {
        errMessage.textContent = 'Something went wrong';
      }
    });
  }
});
