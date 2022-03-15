const renderPosts = () => {
  fetch('/api/v1/posts')
    .then((data) => data.json())
    .then((posts) =>
      posts.forEach((element) => {
        createPost(element);
      })
    );
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
  username.textContent = `u/${info.username}`;
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
