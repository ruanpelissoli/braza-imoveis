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
    id: string;
    filterType: string;
    realStateId: string;
    url: string;
    title: string;
    price: number;
    description: string;
    details: string;
    images: string[];
    filterBedrooms: number;
    filterBathrooms: number;
    filterGarageSpaces: number;
    filterSquareFoot: number;
    filterCost: number;
    city: string;
    state: string;
    realStateName: string;
  }