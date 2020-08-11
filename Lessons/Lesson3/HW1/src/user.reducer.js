import  {SET_USER, DELETE_USER} from './user.actions';

const initialState = null

const userReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SET_USER: {
            return action.payload.userData;
        };

        case DELETE_USER: {
            return null;
        };
            
        default: 
            return state;
    };
};

export default userReducer;