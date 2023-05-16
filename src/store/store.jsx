import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  imoveis: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMOVEIS":
      return {
        ...state,
        imoveis: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;