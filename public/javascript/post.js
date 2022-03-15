const postForm = () => {
  window.location.href = '/post';
};
const post = document.querySelector('#post_form');

post.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.post.value;
  fetch('/api/v11/post', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ input }),
  });
});
