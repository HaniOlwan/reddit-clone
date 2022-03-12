/* eslint-disable max-len */
/* eslint-disable no-lone-blocks */
const createElement = (tag, classname, parent) => {
  const item = document.createElement(tag);
  item.className = classname;
  parent.appendChild(item);
  return item;
};
const homeContent = document.querySelector('.home_content');
for (let index = 0; index < 5; index++) {
  let post = createElement('div', 'user_post', homeContent);
  console.log(post);
}

/* <div class="user_post">
            <div class="post_info">
                <img class="post_avatar" src="images/avatar.png" alt="POST AVATAR HERE" height="20px">
                <small class="post_username">u/heenoow</small>
                <small class="post_date">56 min ago</small>
            </div>
            <div class="post_body">
                <h3>When I was a kid, me and my older brother smashed the windows to a car.</h3>
                <p>
                    I can’t really remember how old we were. I was probably around 6-7. My brother was 8-9. (Lets call
                    him jay). And we decided to throw rocks and bash the windows of a car. The car was an old family
                    van, and it was abandoned. It hadn’t seen use in years. </p>
            </div>
        </div> */
