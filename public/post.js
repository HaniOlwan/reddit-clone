const post = document.querySelector('#post_submit');

post.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = e.target.input;
  console.log(obj);
  console.log('WOW YOUR HAVE SUBMITED A POST');
});
