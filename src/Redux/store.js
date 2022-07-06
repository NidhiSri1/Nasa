import { createStore } from "redux";
import { reducer } from "./reducer";

const init = { asteroid_det: "", loading: false };
export const store = new createStore(reducer, init);
