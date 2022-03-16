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
  // console.log(info);
  const post = document.createElement('div');
  post.className = 'user_post';
  const postTop = document.createElement('div');
  postTop.classList = 'post_top';
  const postInfo = document.createElement('div');
  postInfo.className = 'post_info';
  const postIcons = document.createElement('div');
  postIcons.className = 'post_icons';
  const deletePost = document.createElement('a');
  deletePost.href = '/api/v1/post/delete';
  deletePost.className = 'icon_link';
  const deleteIcon = document.createElement('img');
  deleteIcon.className = 'icon';
  deleteIcon.height = '16px';
  deletePost.innerHTML = 'Remove';
  deletePost.appendChild(deleteIcon);
  const editPost = document.createElement('a');
  editPost.href = '/api/v1/post/delete';
  editPost.className = 'icon_link';
  const editIcon = document.createElement('img');
  editIcon.className = 'icon';
  editPost.innerHTML = 'Edit';
  postIcons.setAttribute('post_id', info.id);
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
  postTop.appendChild(postIcons);
  post.appendChild(postTop);
  postBody.appendChild(postTitle);
  postBody.appendChild(postDesc);
  post.appendChild(postBody);
  homeContent.appendChild(post);
};
renderPosts();

window.onload = (event) => {
  const cookie = document.cookie.split('=')[1];
  const parseJwt = (token) => {
    try {
      return console.log(JSON.parse(atob(token.split('.')[1])));
    } catch (e) {
      return null;
    }
  };
  parseJwt(cookie);
};
