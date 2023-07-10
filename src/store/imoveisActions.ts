import { Dispatch } from "redux";
import { RootState, FilterOptions } from "./types"; 
import { setLastFilterOptions } from "./filterActions";

export const setImoveis = (
  page: number,
  filterOptions: FilterOptions
): any => async (dispatch: Dispatch<any>, getState: () => RootState) => {
  try {
    const {
      type,
      bedrooms,
      bathrooms,
      garageSpace,
      minSquareFoot,
      maxSquareFoot,
      minPrice,
      maxPrice,
      stateId,
      cityId,
    } = filterOptions;
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
    if (minSquareFoot) {
      url += `&minSquareFoot=${minSquareFoot}`;
    }
    if (maxSquareFoot) {
      url += `&maxSquareFoot=${maxSquareFoot}`;
    }
    if (minPrice) {
      url += `&minPrice=${minPrice}`;
    }
    if (maxPrice) {
      url += `&maxPrice=${maxPrice}`;
    }
    if (stateId) {
      url += `&stateId=${stateId}`;
    }
    if (cityId) {
      url += `&cityId=${cityId}`;
    }

    const response = await fetch(url, { mode: "cors" });
    const data = await response.json();
    dispatch({ type: "SET_IMOVEIS", payload: data });
    dispatch(setLastFilterOptions(filterOptions));
    return data;
  } catch (error) {
    console.error("Erro ao buscar imóveis:", error);
  }
};


  