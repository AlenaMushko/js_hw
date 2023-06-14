const baseURL = 'http://jsonplaceholder.typicode.com/users';
const basePostURL = 'https://jsonplaceholder.typicode.com/posts';
const userId = new URL(location.href).searchParams.get('id');

const container = document.createElement('section');
container.classList.add('container');
document.body.appendChild(container);

const postCard = document.createElement('div');
postCard.classList.add('card');

const commentsWraper = document.createElement('div');
commentsWraper.classList.add('card');
commentsWraper.classList.add('card_comments');

const getUserPost = async () => {
    const post = await fetchPostById(userId, container);
    const currentUser = await fetchUserById(post.userId);
    const comments = await fetchCommentById(post.id)

    try {
        const title = document.createElement('h2');
        title.classList.add('title');
        title.classList.add('post_user');
        title.textContent = `${currentUser.username} - post № ${post.id}`;

        container.append(title, postCard);
        buildPostCurd(post, postCard);
        if (comments) {
            document.body.appendChild(commentsWraper);
            buildCommentsList(comments, commentsWraper);
        }
    } catch (err) {
        postCard.innerHTML = '';
        commentsList.innerHTML = '';
    }
};

getUserPost();

async function fetchUserById(id) {
    try {
        const userURL = `${baseURL}/${id}`;
        const res = await fetch(userURL);
        const user = await res.json();
        return user;
    } catch (err) {
        console.log(err);
    }
};

async function fetchPostById(id) {
    const postURL = `${basePostURL}/${id}`;
    const res = await fetch(postURL);
    const post = await res.json();
    return post;
};

async function fetchCommentById(id) {
    const commentURL = `${basePostURL}/${id}/comments`;
    const res = await fetch(commentURL);
    const comment = await res.json();
    return comment;
};

function buildPostCurd(element, parent) {
    const post = element.title;
    const body = element.body;
    const firstLetter = element.title.split('')[0].toUpperCase();
    const newTitle = firstLetter + post.slice(1);
    const newBody = firstLetter + body.slice(1);

    const postId = document.createElement('h3');
    postId.textContent = `Post № ${element.id}`;
    postId.classList.add('card_key');
    postId.style.textAlign= 'center';

    const postTitle = document.createElement('p');
    postTitle.textContent = `${newTitle}`;
    postTitle.classList.add('post_title');

    const postBody = document.createElement('p');
    postBody.textContent = `${newBody})`;
    postBody.classList.add('curd_text');

    parent.append(postId, postTitle, postBody);
}

function buildCommentsList(arr, parent) {

    const titleComment = document.createElement('h3');
    titleComment.classList.add('title');
    titleComment.classList.add('post_user');
    titleComment.textContent = 'Comments on this post';

    const commentsList = document.createElement('ul');
    commentsList.classList.add('comments_list');

    arr.map(comment => {
        const firstLetter = comment.name.split('')[0].toUpperCase();
        const newTitle = firstLetter.concat(comment.name.slice(1));

        const newBody = firstLetter.concat(comment.body.slice(1));

        const commentItem = document.createElement('li');
        commentItem.classList.add('comment_item');

        const commentTitle = document.createElement('h4');
        commentTitle.classList.add('post_title');
        commentTitle.classList.add('comment_title');
        commentTitle.textContent = `Comment № ${comment.id} / ${comment.email} `;

        const commentName = document.createElement('h5');
        commentName.classList.add('post_title');
        commentName.classList.add('comment_afterTitle');
        commentName.textContent = `* ${newTitle} `;

        const commentText = document.createElement('p');
        commentText.classList.add('curd_text');
        commentText.classList.add('comment_text');
        commentText.textContent = `${newBody}`;

        commentItem.append(commentTitle,commentName, commentText)
        commentsList.appendChild(commentItem);
    });

    parent.append(titleComment, commentsList);
}