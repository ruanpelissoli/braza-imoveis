import { useDispatch, useSelector } from "react-redux";
import { RootState, FilterOptions } from "../store/types";
import { useState, ChangeEvent } from "react";
import {
  setFilterOptions,
  setLastFilterOptions,
  resetFilterOptions,
} from "../store/filterActions";
import { setImoveis } from "../store/imoveisActions";
import { useNavigate } from "react-router-dom";

const SideBarFilter: React.FC = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector((state: RootState) => state.filterOptions);
  const [filterValues, setFilterValues] =
    useState<FilterOptions>(filterOptions);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    <div className="flex flex-col w-full justify-center items-center rounded-xl py-2 px-5 bg-black gap-2">
      <div className="text-black w-full px-2 rounded-xl">
        <label
          htmlFor="type"
          className="flex items-center justify-center text-white"
        >
          Tipo:
        </label>
        <select
          id="type"
          onChange={handleFilterChange}
          className="flex items-center justify-center w-full p-1 rounded-lg text-center"
        >
          <option value="">Qualquer</option>
          <option value="VENDA">Venda</option>
          <option value="TEMPORADA">Temporada</option>
          <option value="ALUGUEL">Aluguel</option>
        </select>
        <label
          htmlFor="bathrooms"
          className="flex items-center justify-center text-white"
        >
          Banheiros:
        </label>
        <select
          id="bathrooms"
          onChange={handleFilterChange}
          className="flex items-center justify-center w-full p-1 rounded-lg text-center"
        >
          <option value="">Qualquer</option>
          <option value="1">1 Banheiro</option>
          <option value="2">2 Banheiros</option>
          <option value="3">3 Banheiros</option>
          <option value="4">4 Banheiros</option>
          <option value="5">5 ou mais Banheiros</option>
        </select>
      </div>
      <div className="text-black w-full px-2 rounded-xl">
        <label
          htmlFor="bedrooms"
          className="flex items-center justify-center text-white"
        >
          Quartos:
        </label>
        <select
          id="bedrooms"
          onChange={handleFilterChange}
          className="flex items-center justify-center w-full p-1 rounded-lg text-center"
        >
          <option value="">Qualquer</option>
          <option value="1">1 Quarto</option>
          <option value="2">2 Quartos</option>
          <option value="3">3 Quartos</option>
          <option value="4">4 Quartos</option>
          <option value="5">5 ou mais Quartos</option>
        </select>
        <label
          htmlFor="garageSpace"
          className="flex items-center justify-center text-white"
        >
          Garagem:
        </label>
        <select
          id="garageSpace"
          onChange={handleFilterChange}
          className="flex items-center justify-center w-full p-1 rounded-lg text-center"
        >
          <option value="">Qualquer</option>
          <option value="0">Sem Garagem</option>
          <option value="1">1 Vaga</option>
          <option value="2">2 Vagas</option>
          <option value="3">3 Vagas</option>
          <option value="4">4 Vagas</option>
          <option value="5">5 ou mais Vagas</option>
        </select>
      </div>
      <div className="text-black w-full px-2">
        <label
          htmlFor="minSquareFoot"
          className="flex items-center justify-center text-white"
        >
          m² Mínimo:
        </label>
        <input
          type="number"
          className="flex items-center justify-center w-full p-1 rounded-lg text-center"
          id="minSquareFoot"
          min="0"
          placeholder="Digite o m² mínimo"
          onChange={handleFilterChange}
        />
        <label
          htmlFor="maxSquareFoot"
          className="flex items-center justify-center text-white"
        >
          m² Máximo:
        </label>
        <input
          type="number"
          className="flex items-center justify-center w-full p-1 rounded-lg text-center"
          id="maxSquareFoot"
          min="0"
          placeholder="Digite o m² máximo"
          onChange={handleFilterChange}
        />
      </div>
      <div className="text-black w-full px-2">
        <label
          htmlFor="minPrice"
          className="flex items-center justify-center w-full p-1 rounded-lg text-center text-white"
        >
          Preço Mínimo:
        </label>
        <input
          type="number"
          className="flex items-center justify-center w-full p-1 rounded-lg text-center"
          id="minPrice"
          min="0"
          placeholder="Digite o preço mínimo"
          onChange={handleFilterChange}
        />
        <label
          htmlFor="maxPrice"
          className="flex items-center justify-center w-full p-1 rounded-lg text-center text-white"
        >
          Preço Máximo:
        </label>
        <input
          type="number"
          className="flex items-center justify-center w-full p-1 rounded-lg text-center"
          id="maxPrice"
          min="0"
          placeholder="Digite o preço máximo"
          onChange={handleFilterChange}
        />
      </div>
      
      <button
        className="bg-white text-black w-full p-3.5 my-2 rounded-xl cursor-pointer border-0 hover:text-[#fcf94d] hover:bg-black transition-color duration-500"
        onClick={handleFilterSubmit}
      >
        {isLoading ? (
          <span className="inline-block w-9 h-9 animate-spin rounded-[50%]"></span>
        ) : (
          "Buscar"
        )}
      </button>
    </div>
  );
};

export default SideBarFilter;
