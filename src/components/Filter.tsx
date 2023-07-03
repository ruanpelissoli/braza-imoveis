import React, { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setImoveis } from "../store/imoveisActions";
import { RootState } from "../store/types";
import { FilterOptions } from "../store/types";
import { resetFilterOptions, setFilterOptions, setLastFilterOptions } from "../store/filterActions";

const Filter: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector((state: RootState) => state.filterOptions);
  const navigate = useNavigate();
  const [filterValues, setFilterValues] = useState<FilterOptions>(filterOptions);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [stateOptions, setStateOptions] = useState<string[]>([]);
  const [cityOptions, setCityOptions] = useState<string[]>([]);
  

  useEffect(() => {
    fetchStateOptions();
  }, []);

  const fetchStateOptions = async () => {
    try {
      const response = await fetch(
        "https://braza-imoveis-api.azurewebsites.net/states"
      );
      const data: string[] = await response.json();

      setStateOptions(data);
    } catch (error) {
      console.error("Erro ao buscar estados:", error);
    }
  };

  const fetchCityOptions = async (stateId: string) => {
    try {
      const response = await fetch(
        `https://braza-imoveis-api.azurewebsites.net/cities/${stateId}`
      );
      const data: string[] = await response.json();

      setCityOptions(data);
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
    }
  };

  const handleFilterChange = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = event.target;

    if (id === "stateId") {
      setFilterValues((prevFilterValues) => ({
        ...prevFilterValues,
        state: value,
        city: "",
      }));

      fetchCityOptions(value);
    } else {
      setFilterValues((prevFilterValues) => ({
        ...prevFilterValues,
        [id]: value,
      }));
    }
  };

  const handleFilterSubmit = async () => {
    setIsLoading(true);
    try {
      dispatch(setFilterOptions(filterValues)); 
      await dispatch(setImoveis(1, filterValues));
      setIsLoading(false);
      dispatch(setLastFilterOptions(filterValues));
      navigate("/results");
      dispatch(resetFilterOptions());
      
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center my-0 py-4 font-sans bg-[#ebc834]">
        <div className="flex flex-wrap w-full justify-between rounded-xl py-2 px-5 bg-black max-w-6xl gap-3">
          <div className="mb-1">
            <label htmlFor="type" className="flex items-center mb-1 basis-full text-white">Tipo:</label>
            <select id="type" onChange={handleFilterChange} className="flex flex-1 p-1 items-center w-36 min-w-0 rounded-lg">
              <option value="">Qualquer</option>
              <option value="VENDA">Venda</option>
              <option value="TEMPORADA">Temporada</option>
              <option value="ALUGUEL">Aluguel</option>
            </select>
            <label htmlFor="bathrooms" className="flex items-center mb-1 basis-full text-white">Banheiros:</label>
            <select id="bathrooms" onChange={handleFilterChange} className="flex flex-1 p-1 items-center w-36 min-w-0 rounded-lg">
              <option value="">Qualquer</option>
              <option value="1">1 Banheiro</option>
              <option value="2">2 Banheiros</option>
              <option value="3">3 Banheiros</option>
              <option value="4">4 Banheiros</option>
              <option value="5">5 ou mais Banheiros</option>
            </select>
          </div>

          <div className="mb-1">
            <label htmlFor="bedrooms" className="flex items-center mb-1 basis-full text-white">Quartos:</label>
            <select id="bedrooms" onChange={handleFilterChange} className="flex flex-1 p-1 items-center w-36 min-w-0 rounded-lg">
              <option value="">Qualquer</option>
              <option value="1">1 Quarto</option>
              <option value="2">2 Quartos</option>
              <option value="3">3 Quartos</option>
              <option value="4">4 Quartos</option>
              <option value="5">5 ou mais Quartos</option>
            </select>
            <label htmlFor="garageSpace" className="flex items-center mb-1 basis-full text-white">Garagem:</label>
            <select id="garageSpace" onChange={handleFilterChange} className="flex flex-1 p-1 items-center w-36 min-w-0 rounded-lg">
              <option value="">Qualquer</option>
              <option value="0">Sem Garagem</option>
              <option value="1">1 Vaga</option>
              <option value="2">2 Vagas</option>
              <option value="3">3 Vagas</option>
              <option value="4">4 Vagas</option>
              <option value="5">5 ou mais Vagas</option>
            </select>
          </div>

          <div className="text-black py-0 px-2.5 bg-[#ffd700] rounded-xl">
            <div className="mb-1">
              <label htmlFor="minSquareFoot" className="flex items-center mb-1 basis-full">m² Mínimo:</label>
              <input
                type="number"
                className="flex flex-1 items-center w-36 min-w-0 rounded-lg"
                id="minSquareFoot"
                min="0"
                placeholder="Digite o m² mínimo"
                onChange={handleFilterChange}
              />
              <label htmlFor="maxSquareFoot" className="flex items-center mb-1 basis-full">m² Máximo:</label>
              <input
                type="number"
                className="flex flex-1 items-center w-36 min-w-0 rounded-lg"
                id="maxSquareFoot"
                min="0"
                placeholder="Digite o m² máximo"
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="text-black py-0 px-2.5 bg-[#ebc834] rounded-xl">
            <div className="mb-1">
              <label htmlFor="minPrice" className="flex items-center mb-1 basis-full">Preço Mínimo:</label>
              <input
                type="number"
                className="flex flex-1 items-center w-36 min-w-0 rounded-lg"
                id="minPrice"
                min="0"
                placeholder="Digite o preço mínimo"
                onChange={handleFilterChange}
              />
              <label htmlFor="maxPrice" className="flex items-center mb-1 basis-full">Preço Máximo:</label>
              <input
                type="number"
                className="flex flex-1 items-center w-36 min-w-0 rounded-lg"
                id="maxPrice"
                min="0"
                placeholder="Digite o preço máximo"
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className="text-black py-0 px-2.5 bg-[#d7b94b] rounded-xl">
            <div className="mb-1">
              <label htmlFor="stateId" className="flex items-center mb-1 basis-full">Estado:</label>
              <select id="stateId" onChange={handleFilterChange} className="flex flex-1 p-1 items-center w-36 min-w-0 rounded-lg text-black">
                <option value="">Qualquer</option>
                {stateOptions.map((state: any) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
              {cityOptions.length > 0 && (
                <>
                  <label htmlFor="cityId" className="flex items-center mb-1 basis-full">Cidade:</label>
                  <select id="cityId" onChange={handleFilterChange} className="flex flex-1 p-1 items-center w-36 min-w-0 rounded-lg text-black">
                    <option value="">Qualquer</option>
                    {cityOptions.map((city: any) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </>
              )}
            </div>
          </div>

          <button className="bg-white text-black py-1 px-3.5 rounded-xl cursor-pointer border-0 hover:text-[#fcf94d] hover:bg-black transition-color duration-500" onClick={handleFilterSubmit}>
            {isLoading ? (
              <span className="inline-block w-9 h-9 animate-spin rounded-[50%]"></span>
            ) : (
              "Buscar"
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
