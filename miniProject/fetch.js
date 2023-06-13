
const baseURL = 'http://jsonplaceholder.typicode.com/users';

export const fetchAllUsers = async ()=>{
    try{
        const res = await fetch(baseURL);
        const users = await res.json();
        return users;
    } catch (err) {
        console.log(err);
    }
};

export const fetchUserById = async (id)=>{
   try {
       const userURL = `${baseURL}/${id}`;
       const res = await fetch(userURL);
       const user = await res.json();
       return user;
   } catch (err){
       console.log(err);
   }
};

//
// export const fetchPosts = ()=>{
//
// };

