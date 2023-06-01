import React, { useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setImoveis } from "../store/imoveisActions";
import classes from "./Filter.module.css";
import { RootState } from "../store/types";
import { resetFilterOptions } from "../store/filterActions";
import { FilterOptions } from "../store/types";

const Filter: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector((state: RootState) => state.filterOptions);
  const navigate = useNavigate();
  const [filterValues, setFilterValues] = useState<FilterOptions>(filterOptions);
  const [isLoading, setIsLoading] = useState(false);
  const [stateOptions, setStateOptions] = useState<any[]>([]);
  const [cityOptions, setCityOptions] = useState<any[]>([]);

  useEffect(() => {
    dispatch(resetFilterOptions());

    fetchStateOptions();
  }, [dispatch]);

  const fetchStateOptions = async () => {
    try {
      const response = await fetch(
        "https://braza-imoveis-api.azurewebsites.net/states"
      );
      const data = await response.json();

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
      const data = await response.json();

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
      await dispatch(setImoveis(0, filterValues));
      setIsLoading(false);
      navigate("/results");
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.filter}>
          <div className={classes.filterRow}>
            <label htmlFor="type">Tipo:</label>
            <select id="type" onChange={handleFilterChange}>
              <option value="">Qualquer</option>
              <option value="VENDA">Venda</option>
              <option value="TEMPORADA">Temporada</option>
              <option value="ALUGUEL">Aluguel</option>
            </select>
            <label htmlFor="bathrooms">Banheiros:</label>
            <select id="bathrooms" onChange={handleFilterChange}>
              <option value="">Qualquer</option>
              <option value="1">1 Banheiro</option>
              <option value="2">2 Banheiros</option>
              <option value="3">3 Banheiros</option>
              <option value="4">4 Banheiros</option>
              <option value="5">5 ou mais Banheiros</option>
            </select>
          </div>

          <div className={classes.filterRow}>
            <label htmlFor="bedrooms">Quartos:</label>
            <select id="bedrooms" onChange={handleFilterChange}>
              <option value="">Qualquer</option>
              <option value="1">1 Quarto</option>
              <option value="2">2 Quartos</option>
              <option value="3">3 Quartos</option>
              <option value="4">4 Quartos</option>
              <option value="5">5 ou mais Quartos</option>
            </select>
            <label htmlFor="garageSpace">Garagem:</label>
            <select id="garageSpace" onChange={handleFilterChange}>
              <option value="">Qualquer</option>
              <option value="0">Sem Garagem</option>
              <option value="1">1 Vaga</option>
              <option value="2">2 Vagas</option>
              <option value="3">3 Vagas</option>
              <option value="4">4 Vagas</option>
              <option value="5">5 ou mais Vagas</option>
            </select>
          </div>

          <div className={classes.filterColor1}>
            <div className={classes.filterRow}>
              <label htmlFor="minSquareFoot">m² Mínimo:</label>
              <input
                type="number"
                id="minSquareFoot"
                min="0"
                placeholder="Digite o m² mínimo"
                onChange={handleFilterChange}
              />
              <label htmlFor="maxSquareFoot">m² Máximo:</label>
              <input
                type="number"
                id="maxSquareFoot"
                min="0"
                placeholder="Digite o m² máximo"
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className={classes.filterColor2}>
            <div className={classes.filterRow}>
              <label htmlFor="minPrice">Preço Mínimo:</label>
              <input
                type="number"
                id="minPrice"
                min="0"
                placeholder="Digite o preço mínimo"
                onChange={handleFilterChange}
              />
              <label htmlFor="maxPrice">Preço Máximo:</label>
              <input
                type="number"
                id="maxPrice"
                min="0"
                placeholder="Digite o preço máximo"
                onChange={handleFilterChange}
              />
            </div>
          </div>
          <div className={classes.filterColor3}>
            <div className={classes.filterRow}>
              <label htmlFor="stateId">Estado:</label>
              <select id="stateId" onChange={handleFilterChange}>
                <option value="">Qualquer</option>
                {stateOptions.map((state: any) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
              {cityOptions.length > 0 && (
                <>
                  <label htmlFor="cityId">Cidade:</label>
                  <select id="cityId" onChange={handleFilterChange}>
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

          <button className={classes.filterButton} onClick={handleFilterSubmit}>
            {isLoading ? (
              <span className={classes.spinner}></span>
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
