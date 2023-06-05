import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { RootState } from "./types"; // Importe a interface de tipo RootState

const initialState: RootState = {
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
  lastFilterOptions: {
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

const reducer = (state = initialState, action: AnyAction) => {
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
    case "SET_LAST_FILTER_OPTIONS": 
      return {
        ...state,
        lastFilterOptions: action.payload,
      };

    default:
      return state;
  }
};

const store: Store<RootState, AnyAction> = createStore(
  reducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState, AnyAction>)
);

export default store;
