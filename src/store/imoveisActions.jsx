export const setImoveis = () => async (dispatch) => {
    try {
      const response = await fetch(
        `https://braza-imoveis-api.azurewebsites.net/properties?page=1&size=12`,
        { mode: "cors" }
      );
      const data = await response.json();
      dispatch({ type: "SET_IMOVEIS", payload: data });
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
    }
  };