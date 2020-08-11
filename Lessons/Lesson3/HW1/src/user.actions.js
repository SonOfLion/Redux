export const SET_USER = 'USERS/SET_USER';
export const DELETE_USER = 'USERS/DELETE_USER';


export const setUser = (userData) => {
    return {
        type: SET_USER,
        payload: {
            userData
        }
    };
};

export const removeUser = () => {
    return {
        type: DELETE_USER
    };
};

// export default { removeUser, setUser };