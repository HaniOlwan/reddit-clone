let userId = 0;
window.onload = (event) => {
  const username = document.querySelector('#username');
  const cookie = document.cookie.split('=')[1];
  const parseJwt = (token) => {
    try {
      const user = JSON.parse(atob(token.split('.')[1]));
      username.textContent = user.name;
      userId = user.id;
      return userId;
    } catch (e) {
      return null;
    }
  };
  parseJwt(cookie);
};

const postForm = () => {
  window.location.href = '/post';
};

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
  const postTop = document.createElement('div');
  postTop.classList = 'post_top';
  const postInfo = document.createElement('div');
  postInfo.className = 'post_info';
  const postIcons = document.createElement('div');
  postIcons.className = 'post_icons';
  const deletePost = document.createElement('a');
  deletePost.href = 'javascript:;';
  deletePost.setAttribute('onclick', `return deletePostFunc(${info.id})`);
  deletePost.className = 'icon_link';
  const deleteIcon = document.createElement('img');
  deleteIcon.className = 'icon';
  deleteIcon.height = '16px';
  deletePost.innerHTML = 'Remove';
  deletePost.appendChild(deleteIcon);
  const editPost = document.createElement('a');
  editPost.className = 'icon_link';
  editPost.href = `/edit/post/${info.id}`;
  const editIcon = document.createElement('img');
  editIcon.className = 'icon';
  editPost.innerHTML = 'Edit';
  editPost.appendChild(editIcon);
  postIcons.appendChild(deletePost);
  postIcons.appendChild(editPost);
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
  postTop.appendChild(postInfo);
  if (info.user_id === userId) {
    postTop.appendChild(postIcons);
  }
  post.appendChild(postTop);
  postBody.appendChild(postTitle);
  postBody.appendChild(postDesc);
  post.appendChild(postBody);
  homeContent.appendChild(post);
};
renderPosts();

const deletePostFunc = (post) => {
  fetch(`/api/v1/delete/${post}`, { method: 'DELETE' }).then(
    console.log('Element Deleted')
  );
};
