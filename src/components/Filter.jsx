import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetFilterOptions } from "../store/filterActions";
import { setImoveis } from "../store/imoveisActions";
import classes from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector((state) => state.filterOptions);
  const navigate = useNavigate();
  const [filterValues, setFilterValues] = useState(filterOptions);
  const [isLoading, setIsLoading] = useState(false);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    dispatch(resetFilterOptions());

    fetchStateOptions();
  }, [dispatch]);

  const fetchStateOptions = async () => {
    try {
      const response = await fetch("https://braza-imoveis-api.azurewebsites.net/states");
      const data = await response.json();

      setStateOptions(data);
    } catch (error) {
      console.error("Erro ao buscar estados:", error);
    }
  };

  const fetchCityOptions = async (stateId) => {
    try {
      const response = await fetch(`https://braza-imoveis-api.azurewebsites.net/cities/${stateId}`);
      const data = await response.json();

      setCityOptions(data);
    } catch (error) {
      console.error("Erro ao buscar cidades:", error);
    }
  };

  const handleFilterChange = (event) => {
    const { id, value } = event.target;

    if (id === "state") {
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
          <label htmlFor="type">Tipo:</label>
          <select id="type" onChange={handleFilterChange}>
            <option value="">Qualquer</option>
            <option value="VENDA">Venda</option>
            <option value="TEMPORADA">Aluguel</option>
          </select>
          <label htmlFor="bedrooms">Quartos:</label>
          <select id="bedrooms" onChange={handleFilterChange}>
            <option value="">Qualquer</option>
            <option value="1">1 Quarto</option>
            <option value="2">2 Quartos</option>
            <option value="3">3 Quartos</option>
            <option value="4">4 Quartos</option>
            <option value="5">5 ou mais Quartos</option>
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
          <label htmlFor="squareFoot">Metros Quadrados:</label>
          <select id="squareFoot" onChange={handleFilterChange}>
            <option value="">Qualquer</option>
            <option value="0-50">Até 50m²</option>
            <option value="50-150">Entre 50m² e 150m²</option>
            <option value="150-300">Entre 150m² e 300m²</option>
            <option value="300-500">Entre 300m² e 500m²</option>
            <option value="500+">Acima de 500m²</option>
          </select>
          <label htmlFor="precoMin">Preço Mínimo:</label>
          <input
            type="number"
            id="precoMin"
            min="0"
            placeholder="Digite o preço mínimo"
            onChange={handleFilterChange}
          />
          <label htmlFor="precoMax">Preço Máximo:</label>
          <input
            type="number"
            id="precoMax"
            min="0"
            placeholder="Digite o preço máximo"
            onChange={handleFilterChange}
          />

          <label htmlFor="state">Estado:</label>
          <select id="state" onChange={handleFilterChange}>
            <option value="">Qualquer</option>
            {stateOptions.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>

          {cityOptions.length > 0 && (
            <>
              <label htmlFor="city">Cidade:</label>
              <select id="city" onChange={handleFilterChange}>
                <option value="">Qualquer</option>
                {cityOptions.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </>
          )}

          <button className={classes.filterButton} onClick={handleFilterSubmit}>
            {isLoading ? "Loading..." : "Buscar"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;