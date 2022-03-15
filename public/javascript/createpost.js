const postForm = document.querySelector('#post_form');
postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    title: e.target.title.value,
    body: e.target.body.value.replace(/\s/g, ' ').trim(),
  };
  fetchData('/api/v1/user/post', 'POST', data)
    .then((window.location.href = '/'))
    .catch(console.log);
});
