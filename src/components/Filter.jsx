import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilterOptions, resetFilterOptions } from "../store/filterActions";
import classes from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector((state) => state.filterOptions);

  useEffect(() => {
    dispatch(resetFilterOptions());
  }, [dispatch]);

  const handleFilterChange = (event) => {
    const { id, value } = event.target;
    dispatch(
      setFilterOptions({
        ...filterOptions,
        [id]: value,
      })
    );
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
            <option value="">Selecione</option>
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

          <Link to="/results" className={classes.filterButton}>
            Buscar
          </Link>
        </div>
      </div>
    </>
  );
};

export default Filter;
