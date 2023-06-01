import { Imovel, FilterOptions } from "./types"; // Importe a interface de tipo Imovel

export const resetFilterOptions = () => {
  return {
    type: "RESET_FILTER_OPTIONS",
  };
};

export const setFilterOptions = (filterOptions: FilterOptions) => {
  return {
    type: "SET_FILTER_OPTIONS",
    payload: filterOptions,
  };
};

export const applyFilter = (imoveis: Imovel[], filterOptions: FilterOptions) => {
  if (!imoveis) {
    return [];
  }
  const filteredImoveis = imoveis.filter((imovel) => {
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

    if (type !== "" && imovel.filterType !== type) {
      return false;
    }
    if (bedrooms !== "" && imovel.filterBedrooms !== parseInt(bedrooms)) {
      return false;
    }
    if (bathrooms !== "" && imovel.filterBathrooms !== parseInt(bathrooms)) {
      return false;
    }
    if (
      garageSpace !== "" &&
      imovel.filterGarageSpaces !== parseInt(garageSpace)
    ) {
      return false;
    }
    if (
      minSquareFoot !== "" &&
      imovel.filterSquareFoot < parseInt(minSquareFoot)
    ) {
      return false;
    }
    if (
      maxSquareFoot !== "" &&
      imovel.filterSquareFoot > parseInt(maxSquareFoot)
    ) {
      return false;
    }
    if (minPrice !== "" && imovel.filterCost < parseInt(minPrice)) {
      return false;
    }
    if (maxPrice !== "" && imovel.filterCost > parseInt(maxPrice)) {
      return false;
    }
    if (stateId !== "" && imovel.state !== stateId) {
      return false;
    }
    if (cityId !== "" && imovel.city !== cityId) {
      return false;
    }

    return true;
  });

  

  return filteredImoveis;
};
