import {mainContainer} from "../container.js";
import {fetchPostById, fetchUserById} from "../fetch.js";
import {buildPostCurd} from "./buildPostCurd.js";

const userId = new URL(location.href).searchParams.get('id');

const container = mainContainer();
const postCard = document.createElement('div');
postCard.classList.add('card');

const getUserPost = async () => {
    const post = await fetchPostById(userId, container);
    const currentUser = await fetchUserById(post.userId);
    try {
        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = `All posts ${currentUser.username}`;

        container.append(title, postCard);
        buildPostCurd(post, postCard);
    } catch (err) {
        postCard.innerHTML = '';
    }
};

getUserPost();

// const getPostsList = async () => {
//     const user = await fetchUserById(userId);
//     try {
//         buildUserInfo(user, userCard)
//     } catch (err) {
//         userCard.innerHTML = '<h3 class="card_title">The information about this user has not yet been filled in, come back later</h3>'
//     }
// };
//
// getPostsList(userId);
