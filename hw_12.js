//зробити файл users.html
//з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
//при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит
// (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const getUsersList = async () => {
    const baseURL = 'http://jsonplaceholder.typicode.com/users';
    let res = await fetch(baseURL);
    let fetchUsers = await res.json();
    let userList = document.querySelector('.user');

    fetchUsers.forEach(user => {
        let aboutUserURL = `users.html?id=${user.id}`;
        let list = document.createElement('li');
        list.style.listStyle = 'none';
        let userName = document.createElement('h4');
        userName.textContent = `${user.id}) ${user.name}`;
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.addEventListener('mouseover', () => {
            btn.style.backgroundColor = 'blue';
            btn.style.color = 'yellow';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.backgroundColor = 'transparent';
            btn.style.color = 'black';
        });
        btn.textContent = 'more info';
        btn.addEventListener('click', () => {
            window.location.href = aboutUserURL;
        });

        list.append(userName, btn);
        userList.appendChild(list);
    });
};

getUsersList();
