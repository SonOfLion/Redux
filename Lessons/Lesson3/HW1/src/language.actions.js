export const SET_LANGUAGE = 'LANGUAGE/SET';

export const setLanguage = (language) => {
    return {
        type: SET_LANGUAGE,
        payload: {
            language
        }
    };
};

// export default { SET_LANGUAGE, setLanguage };