for (let index = 0; index < 5; index++) {
  const homeContent = document.querySelector('.home_content');
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
  username.textContent = 'u/heenoow';
  const postDate = document.createElement('small');
  postDate.className = 'post_date';
  postDate.textContent = '56 min ago';
  const postBody = document.createElement('div');
  postBody.className = 'post_body';
  const postTitle = document.createElement('h3');
  postTitle.textContent =
    'When I was a kid, me and my older brother smashed the windows to a car.';
  const postDesc = document.createElement('p');
  postDesc.textContent =
    ' I cant really remember how old we were. I was probably around 6-7. My brother was 8-9. (Lets call him jay). And we decided to throw rocks and bash the windows of a car. The car was an old family van, and it was abandoned. It hadnt seen use in years.';
  postInfo.appendChild(avatar);
  postInfo.appendChild(username);
  postInfo.appendChild(postDate);
  post.appendChild(postInfo);
  postBody.appendChild(postTitle);
  postBody.appendChild(postDesc);
  post.appendChild(postBody);
  homeContent.appendChild(post);
}
