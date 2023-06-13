

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

const getPosts = async (userId) => {
    const baseURL = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const res = await fetch(baseURL);
    const posts = await res.json();
    buildPostList(posts);
};

const postsBox = document.createElement('div');
postsBox.classList.add('posts_box');

const buildPostList = (posts) => {
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
