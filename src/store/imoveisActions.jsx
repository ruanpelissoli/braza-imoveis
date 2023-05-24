export const setImoveis = (page, filterOptions) => async (dispatch) => {
  try {
    const { type, bedrooms, bathrooms, garageSpace, squareFoot, price } = filterOptions;
    let url = `https://braza-imoveis-api.azurewebsites.net/properties?page=${page}&size=12`;

    if (type) {
      url += `&type=${type}`;
    }
    if (bedrooms) {
      url += `&bedrooms=${bedrooms}`;
    }
    if (bathrooms) {
      url += `&bathrooms=${bathrooms}`;
    }
    if (garageSpace) {
      url += `&garageSpaces=${garageSpace}`;
    }
    if (squareFoot) {
      url += `&squareFoot=${squareFoot}`;
    }
    if (price) {
      url += `&price=${price}`;
    }

    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    dispatch({ type: "SET_IMOVEIS", payload: data });
  } catch (error) {
    console.error("Erro ao buscar imóveis:", error);
  }
};
  