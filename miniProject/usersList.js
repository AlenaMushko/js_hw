
const getUsersList = async () => {
    const baseURL = 'http://jsonplaceholder.typicode.com/users';
    const res = await fetch(baseURL);
    const fetchUsers = await res.json();

    const container = document.createElement('section');
    container.classList.add('container');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Users of our products';

    const usersList = document.createElement('ul');
    usersList.classList.add('users_list');

    fetchUsers.forEach(user => {
        const aboutUserURL = `./user-details.html?id=${user.id}`;
        const item = document.createElement('li');

        const userName = document.createElement('h3');
        userName.textContent = `${user.id}) ${user.name}`;
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

    container.append(title,usersList);
    document.body.appendChild(container)
};
const runHTML = async () => {
    try {
        await getUsersList();
    } catch (error) {
        const errorTitle = document.createElement('h2');
        errorTitle.classList.add('title');
        errorTitle.textContent = 'This address does not exist, please try again';
        document.body.appendChild(errorTitle);
    }
};

runHTML();