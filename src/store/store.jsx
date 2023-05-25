import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  imoveis: null,
  filterOptions: {
    type: "",
    bedrooms: "",
    bathrooms: "",
    garageSpace: "",
    minSquareFoot: "",
    maxSquareFoot: "",
    minPrice: "",
    maxPrice: "",
    stateId: "",
    cityId: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMOVEIS":
      return {
        ...state,
        imoveis: action.payload,
      };
    case "SET_FILTER_OPTIONS":
      return {
        ...state,
        filterOptions: action.payload,
      };
    case "RESET_FILTER_OPTIONS":
      return {
        ...state,
        filterOptions: {
          type: "",
          bedrooms: "",
          bathrooms: "",
          garageSpace: "",
          minSquareFoot: "",
          maxSquareFoot: "",
          minPrice: "",
          maxPrice: "",
          stateId: "",
          cityId: "",
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
