import {fetchAllUsers} from "../fetch.js";
import {buildList} from "./buildList.js";
import {mainContainer} from "../container.js";

const container = mainContainer();
const getUsersList = async () => {
    const fetchUsers = await fetchAllUsers();
    try {
        buildList(fetchUsers, 'miniProject/userCard/user-details.html', container);
    } catch (err) {
        container.innerHTML = '<h3 class="card_title"> This address does not exist, please try again</h3>';
    }
};

getUsersList();