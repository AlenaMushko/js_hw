const getUsersList = async () => {
    const baseURL = 'http://jsonplaceholder.typicode.com/users';
    const res = await fetch(baseURL);
    const fetchUsers = await res.json();
    const usersList = document.createElement('ul');
    usersList.classList.add('users_list');

    fetchUsers.forEach(user => {
        const aboutUserURL = `user-details.html?id=${user.id}`;
        const item = document.createElement('li');

        const userName = document.createElement('h3');
        userName.textContent = `${user.id}) ${user.name}`;
        userName.classList.add('users_title')

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.classList.add('users_btn')
        btn.textContent = 'more info';

        btn.addEventListener('click', () => {
            window.location.href = aboutUserURL;
        });

        item.append(userName, btn);
        usersList.appendChild(item);
    });
    const container = document.querySelector('.container');
    container.appendChild(usersList);
};

getUsersList();
