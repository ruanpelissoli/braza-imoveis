export interface RootState {
    imoveis: Imovel[] | null;
    filterOptions: FilterOptions;
  }
  
  export interface FilterOptions {
    type: string;
    bedrooms: string;
    bathrooms: string;
    garageSpace: string;
    minSquareFoot: string;
    maxSquareFoot: string;
    minPrice: string;
    maxPrice: string;
    stateId: string;
    cityId: string;
  }
  
  export interface Imovel {
    id: number;
    realStateId: number;
    realStateName: string;
    url: string;
    title: string;
    price: string;
    state: string;
    city: string;
    filterBedrooms: number;
    filterBathrooms: number;
    filterGarageSpaces: number;
    filterSquareFoot: number;
    filterCost: number;
    filterType: string;
    images: string[];
  }

  export interface DetailedImovel {
    id: number;
    realStateId: number;
    realStateName: string;
    url: string;
    title: string;
    price: string;
    description: string;
    details: string;
    filterBedrooms: number;
    filterBathrooms: number;
    filterGarageSpaces: number;
    filterSquareFoot: number;
    filterCost: number;
    filterType: string;
    images: string[];
    state: string;
    city: string;
    similarProperties: Imovel[];
  }