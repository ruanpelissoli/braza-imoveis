export const resetFilterOptions = () => {
  return {
    type: "RESET_FILTER_OPTIONS",
  };
};

export const setFilterOptions = (filterOptions) => {
  return {
    type: "SET_FILTER_OPTIONS",
    payload: filterOptions,
  };
};

export const applyFilter = (imoveis, filterOptions) => {
  if (!imoveis) {
    return [];
  }
  const filteredImoveis = imoveis.filter((imovel) => {
    const {
      type,
      bedrooms,
      bathrooms,
      garageSpace,
      squareFoot,
      precoMin,
      precoMax,
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
    if (squareFoot !== "") {
      const [min, max] = squareFoot.split("-");
      const imovelSquareFoot = imovel.filterSquareFoot;

      if (min && max) {
        
        if (
          imovelSquareFoot < parseInt(min) ||
          imovelSquareFoot > parseInt(max)
        ) {
          return false;
        }
      } else if (min) {
        
        const minValue = parseInt(min);
        if (imovelSquareFoot < minValue) {
          return false;
        }
      } else if (max) {
        
        const maxValue = parseInt(max);
        if (imovelSquareFoot > maxValue) {
          return false;
        }
      }
    }
    if (precoMin !== "" && imovel.filterCost < parseInt(precoMin)) {
      return false;
    }
    if (precoMax !== "" && imovel.filterCost > parseInt(precoMax)) {
      return false;
    }
 
    return true;
  });

  return filteredImoveis;
};
