
const baseURL = 'http://jsonplaceholder.typicode.com/users';
const userId = new URL(location.href).searchParams.get('id');

const container = document.createElement('section');
container.classList.add('container');

const userCard = document.createElement('ul');
userCard.classList.add('card');

const title = document.createElement('h2');
title.classList.add('title');
title.textContent = 'Detailed information about user';

container.append(title, userCard);
document.body.appendChild(container);

const getUserCard = async () => {
    const user = await fetchUserById(userId);
    try {
        buildUserInfo(user, userCard)
    } catch (err) {
        userCard.innerHTML = '<h3 class="card_title">The information about this user has not yet been filled in, come back later</h3>'
    }
};

getUserCard(userId);

const getUserPosts = async () => {
    const posts = await fetchPosts(userId);
    try {
        buildPostList(posts);
    } catch (err) {
        userCard.innerHTML = '';
    }
};

getUserPosts();


async function fetchUserById(id){
    try {
        const userURL = `${baseURL}/${id}`;
        const res = await fetch(userURL);
        const user = await res.json();
        return user;
    } catch (err){
        console.log(err);
    }
};

async function fetchPosts(id) {
    const postsURL = `${baseURL}/${id}/posts`;
    const res = await fetch(postsURL);
    const posts = await res.json();
    return posts;
};

function buildUserInfo(obj, parent){
    for (const key in obj) {
        const userValue = obj[key];
        if (typeof userValue === 'object') {
            curdListBuilder(key, userValue, parent);
        } else {
            curdItemBuilder(key, userValue, parent);
        }
    }
}

const curdListBuilder = (key, objValue, parent) => {
    const curdList = document.createElement('ul');
    curdList.classList.add('curd_list');
    curdList.classList.add('wrapper');

    const curdItem = document.createElement('li');
    curdItem.classList.add('curd_item');

    const curdTitle = document.createElement('h3');
    curdTitle.classList.add('curd_title');
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
    curdKey.classList.add('card_key');

    let curdText = document.createElement('p');
    curdText.textContent = `${value}`;
    curdText.classList.add('curd_text');

    curdItem.append(curdKey, curdText);
    parent.appendChild(curdItem);
};

let isPostVisible = false;

const postsBox = document.createElement('div');
postsBox.classList.add('posts_box');

function buildPostList(posts){
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
}

const showPostTitles = async (posts) => {

    const postsList = document.createElement('ul');
    postsList.classList.add('post_list');

    for (const post of posts) {
        let postText = post.title;

        if(postText.length > 35){
            postText = postText.substring(0, 35) + "...";
        }

        const postsItem = document.createElement('li');
        postsItem.classList.add('post_item');

        const postsText = document.createElement('p');
        postsText.classList.add('post_text');
        postsText.textContent = postText;

        const postsLink = document.createElement('a');
        const postDetailsURL = `/js_hw/miniProject/post-details.html?id=${post.id}`;
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