export   const buildList = (allElements, path, parent) => {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Users of our products';

    const usersList = document.createElement('ul');
    usersList.classList.add('users_list');

    allElements.forEach(element => {
        const aboutUserURL = `${path}?id=${element.id}`;
        const item = document.createElement('li');

        const userName = document.createElement('h3');
        userName.textContent = `${element.id}) ${element.name}`;
        userName.classList.add('users_title');

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.classList.add('users_btn');
        btn.textContent = 'more info';

        btn.addEventListener('click', () => {
            window.location.href = aboutUserURL;
        });

        item.append(userName, btn);
        usersList.appendChild(item);
    });

    parent.append(title, usersList);
};