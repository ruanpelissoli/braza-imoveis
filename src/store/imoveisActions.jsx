export const setImoveis = () => async (dispatch) => {
    try {
      const response = await fetch(
        `https://braza-imoveis-api.azurewebsites.net/properties?page=3&size=12`,
        { mode: "cors" }
      );
      const data = await response.json();
      dispatch({ type: "SET_IMOVEIS", payload: data });
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
    }
  };

  const initialState = {
    imoveis: null,
    filterOptions: {
      bedrooms: "",
      bathrooms: "",
      garageSpace: "",
      squareFoot: "",
      precoMin: "",
      precoMax: "",
    },
  };
  
  export const reducer = (state = initialState, action) => {
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
      default:
        return state;
    }
  };