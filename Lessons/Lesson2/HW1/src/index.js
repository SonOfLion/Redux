import  { deleteUser, addUser }  from './users.actions';
import  store  from './store';

const user1 = {id:76, name:'Sarah'};
const user2 = {id:200, name:'Leonid'};

const addUsers = (user) => {
    store.dispatch(addUser(user1))
};

// console.log(addUser(user2));
// console.log(store.getState());
// console.log(store.dispatch);

const deleteUsers = (id) => {
    store.dispatch(deleteUser(id))
};