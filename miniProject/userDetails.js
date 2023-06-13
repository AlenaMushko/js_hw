const userId = new URL(location.href).searchParams.get('id');

const container = document.querySelector('.container');
const userCard = document.querySelector('.card');

const getUserCard = async (userId) => {
    const baseURL = `http://jsonplaceholder.typicode.com/users/${userId}`;
    const res = await fetch(baseURL);
    const user = await res.json();
    user
        ? buildUserInfo(user, userCard)
        :userCard.innerHTML = '<h3 class="curd_title">The information about this user has not yet been filled in, come back later</h3>'
};

getUserCard(userId);

const buildUserInfo = (obj, parent) => {
    for (const key in obj) {
        const userValue = obj[key];
        if (typeof userValue === 'object') {
            curdListBuilder(key, userValue, parent);
        } else {
            curdItemBuilder(key, userValue, parent);
        }
    }
};

const curdListBuilder = (key, objValue, parent) => {
    const curdList = document.createElement('ul');
    curdList.classList.add('curd_list');
    curdList.classList.add('wrapper')

    const curdItem = document.createElement('li');
    curdItem.classList.add('curd_item');

    const curdTitle = document.createElement('h3');
    curdTitle.classList.add('curd_title')
    curdTitle.textContent = `${key}`;

    curdItem.appendChild(curdTitle);
    parent.appendChild(curdItem);
    curdItem.appendChild(curdList);

    buildUserInfo(objValue, curdList);
};

const curdItemBuilder = (key, value, parent) => {
    const curdItem = document.createElement('li');
    curdItem.classList.add('curd_item');

    let curdKey = document.createElement('b');
    curdKey.textContent = `${key}`;
    curdKey.classList.add('card_key')

    let curdText = document.createElement('p');
    curdText.textContent = `${value}`;
    curdText.classList.add('curd_text');

    curdItem.append(curdKey, curdText);
    parent.appendChild(curdItem);
};

let isPostVisible = false;

const getPosts = async (userId) => {
    const baseURL = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const res = await fetch(baseURL);
    const posts = await res.json();
    console.log(posts[0])
    buildPostList(posts);
};

const postsBox = document.createElement('div');
postsBox.classList.add('posts_box');

const buildPostList = (posts) => {
    const postBtn = document.createElement('button');
    postBtn.classList.add('curd_btn');
    postBtn.type = 'button';
    postBtn.textContent = 'Post of user';

    postBtn.addEventListener('click', () => {

        if (!isPostVisible) {
            showPostTitles(posts);
            isPostVisible = true;
        } else {
            isPostVisible = false;
            postsBox.innerHTML = ' ';
        }
    });
    document.body.append(postBtn, postsBox);
};

const showPostTitles = (posts) => {
    const postsList = document.createElement('ul');
    postsList.classList.add('posts_list');

    posts.forEach((post) => {
        const postsItem = document.createElement('li');
        postsItem.classList.add('post_item');

        const postsText = document.createElement('p');
        postsText.classList.add('post_text');
        postsText.textContent = post.title;

        const postsLink = document.createElement('a');
        const postsUserURL = `post-details.html?id=${userId}`;
        postsLink.href = postsUserURL;
        postsLink.target = '_blank';

        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.classList.add('icon');
        icon.setAttribute('viewBox', '0 0 32 32');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM0 22v-12l8 6z');

        icon.appendChild(path);
        postsLink.appendChild(icon);

        postsItem.append(postsText, postsLink);
        postsList.appendChild(postsItem);
    });

    postsBox.innerHTML = '';
    postsBox.appendChild(postsList);
};

getPosts(userId)