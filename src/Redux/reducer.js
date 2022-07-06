import { ADD_ASTEROID_LIST, ADD_LOADING } from "./action";

export const reducer = (store, { type, payload }) => {
    switch (type) {
        case ADD_ASTEROID_LIST:
            return { ...store, asteroid_det: payload, loading: false };
        case ADD_LOADING:
            return { ...store, loading: payload };
        default:
            return store;
    }
};
