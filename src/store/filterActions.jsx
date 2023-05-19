export const setFilterOptions = (filterOptions) => {
    return {
      type: "SET_FILTER_OPTIONS",
      payload: filterOptions,
    };
  };

  
  export const applyFilter = (imoveis, filterOptions) => {
    const filteredImoveis = imoveis.filter((imovel) => {
        const {
          bedrooms,
          bathrooms,
          garageSpace,
          squareFoot,
          precoMin,
          precoMax,
        } = filterOptions;
    
        // Verifica cada critério de filtro
        if (bedrooms && imovel.bedrooms !== parseInt(bedrooms)) {
          return false;
        }
        if (bathrooms && imovel.bathrooms !== parseInt(bathrooms)) {
          return false;
        }
        if (garageSpace && imovel.garageSpaces !== parseInt(garageSpace)) {
          return false;
        }
        if (squareFoot && imovel.squareFoot < parseInt(squareFoot)) {
          return false;
        }
        if (precoMin && imovel.price < parseInt(precoMin)) {
          return false;
        }
        if (precoMax && imovel.price > parseInt(precoMax)) {
          return false;
        }
    
        // Retorna true se o imóvel atender a todos os critérios de filtro
        return true;
      });
    
      return filteredImoveis;
  };