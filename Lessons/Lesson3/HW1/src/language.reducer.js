const initialState = 'en';

const languageReducer = (state = initialState, action) => {
    switch(state = initialState, type) {
        case SET_LANGUAGE: {
            return  action.payload.language;
        };

        default: 
            return state;
    };
};