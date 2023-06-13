import {fetchUserById} from "./fetch.js";
import {mainContainer} from "./container.js";

const userId = new URL(location.href).searchParams.get('id');

const container = mainContainer();
const userCard = document.createElement('ul');
userCard.classList.add('card');

const title= document.createElement('h2');
title.classList.add('title');
title.textContent = 'Detailed information about user';

container.append(title, userCard);

const getUserCard = async () => {
    const user = await fetchUserById(userId);
    try {
        buildUserInfo(user, userCard)
    } catch (err) {
        userCard.innerHTML = '<h3 class="card_title">The information about this user has not yet been filled in, come back later</h3>'
    }
}
    getUserCard(userId);

<!--блоки з короткою іфною про post - в ряд по 5 .-->

