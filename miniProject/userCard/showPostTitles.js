// блоки з короткою іфною про post - в ряд по 5 .

let isPostVisible = false;

const postsBox = document.createElement('div');
postsBox.classList.add('posts_box');

export const buildPostList = (posts) => {
    const postBtn = document.createElement('button');
    postBtn.classList.add('curd_btn');
    postBtn.type = 'button';
    postBtn.textContent = 'Post of user';

    postBtn.addEventListener('click', async () => {
        if (!isPostVisible) {
            await showPostTitles(posts);
            isPostVisible = true;
        } else {
            isPostVisible = false;
            postsBox.innerHTML = '';
        }
    });
    document.body.append(postBtn, postsBox);
};



const showPostTitles = async (posts) => {
    const postsList = document.createElement('ul');
    postsList.classList.add('posts_list');

    for (const post of posts) {
        const postsItem = document.createElement('li');
        postsItem.classList.add('post_item');

        const postsText = document.createElement('p');
        postsText.classList.add('post_text');
        postsText.textContent = post.title;

        const postsLink = document.createElement('a');
        const postDetailsURL = `../userPosts/post-details.html?id=${post.id}`;
        postsLink.href = postDetailsURL;

        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.classList.add('icon');
        icon.setAttribute('viewBox', '0 0 32 32');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute(
            'd',
            'M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM0 22v-12l8 6z'
        );

        icon.appendChild(path);
        postsLink.appendChild(icon);

        postsItem.append(postsText, postsLink);
        postsList.appendChild(postsItem);
    }

    postsBox.innerHTML = '';
    postsBox.appendChild(postsList);
};