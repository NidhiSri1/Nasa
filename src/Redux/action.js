export const ADD_ASTEROID_LIST = "ADD_ASTEROID_LIST";
export const ADD_LOADING = "ADD_LOADING";

export const add_asteroid_list = (payload) => {
    return { type: ADD_ASTEROID_LIST, payload: payload };
};

export const loading = (payload) => {
    return { type: ADD_LOADING,payload:payload };
};
