window.onload = (event) => {
  const username = document.querySelector('#username');
  const postUsername = document.querySelector('.post_username');
  const cookie = document.cookie.split('=')[1];
  const parseJwt = (token) => {
    try {
      const user = JSON.parse(atob(token.split('.')[1]));
      username.textContent = user.name;
      postUsername.textContent = 'u/' + user.name;
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
    fetchData('/api/v1/user/post', 'POST', data)
      .then((window.location.href = '/'))
      .catch(console.log);
  }
});
