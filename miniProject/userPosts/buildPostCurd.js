export const buildPostCurd = (element, parent) => {
    const post = element.title;
    const body = element.body;
    const firstLetter = element.title.split('')[0].toUpperCase();
    const newTitle = firstLetter + post.slice(1);
    const newBody = firstLetter +body.slice(1);

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

    // const btn = document.createElement('button');
    // btn.type = 'button';
    // btn.classList.add('users_btn');
    // btn.textContent = 'more info';
    //
    // btn.addEventListener('click', () => {
    //     window.location.href = aboutUserURL;
    // });
    //
    // item.append(userName, btn);
    // usersList.appendChild(item);


    parent.append(postId, postTitle, postBody);
}