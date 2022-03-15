const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/api/v1/user/logout', {
    method: 'POST',
  }).then(() => {
    window.location.href = '/';
  });
});

let page = 1;
const renderPosts = () => {
  fetch(`/api/v1/posts?page=${page}`)
    .then((data) => data.json())
    .then((posts) => {
      if (posts && posts.length) {
        posts.forEach((element) => {
          createPost(element);
        });
        page++;
      } else {
        page = -1;
      }
    });
};

window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    if (page !== -1) renderPosts();
  }
};

const homeContent = document.querySelector('.home_content');

const createPost = (info) => {
  const post = document.createElement('div');
  post.className = 'user_post';
  const postInfo = document.createElement('div');
  postInfo.className = 'post_info';
  const avatar = document.createElement('img');
  avatar.className = 'post_avatar';
  avatar.src = 'images/avatar.png';
  avatar.alt = 'POST AVATAR HERE';
  const username = document.createElement('small');
  username.className = 'post_username';
  username.textContent = `u/${info.name}`;
  const postDate = document.createElement('small');
  postDate.className = 'post_date';
  postDate.textContent = info.created_at;
  const postBody = document.createElement('div');
  postBody.className = 'post_body';
  const postTitle = document.createElement('h3');
  postTitle.textContent = info.title;
  const postDesc = document.createElement('p');
  postDesc.textContent = info.body;
  postInfo.appendChild(avatar);
  postInfo.appendChild(username);
  postInfo.appendChild(postDate);
  post.appendChild(postInfo);
  postBody.appendChild(postTitle);
  postBody.appendChild(postDesc);
  post.appendChild(postBody);
  homeContent.appendChild(post);
};
renderPosts();
