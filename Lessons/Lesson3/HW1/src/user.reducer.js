import  {SET_USER, REMOVE_PRODUCT} from './user.actions';

const initialState = null;

const userReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SET_USER: {
            return action.payload.userData;
        };

        case REMOVE_PRODUCT: {
            return null;
        };
            
        default: 
            return state;
    };
};

export default userReducer;