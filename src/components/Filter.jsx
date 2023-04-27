import { Link } from "react-router-dom";
import classes from "./Filter.module.css";

const Filter = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.filter}>
          <label for="bedrooms">Quartos:</label>
          <select id="bedrooms">
            <option value="">Qualquer</option>
            <option value="1">1 Quarto</option>
            <option value="2">2 Quartos</option>
            <option value="3">3 Quartos</option>
            <option value="4">4 Quartos</option>
            <option value="5">5 ou mais Quartos</option>
          </select>
          <label for="bathrooms">Banheiros:</label>
          <select id="bathrooms">
            <option value="">Qualquer</option>
            <option value="1">1 Banheiro</option>
            <option value="2">2 Banheiros</option>
            <option value="3">3 Banheiros</option>
            <option value="4">4 Banheiros</option>
            <option value="5">5 ou mais Banheiros</option>
          </select>
          <label for="garageSpace">Garagem:</label>
          <select id="garageSpace">
            <option value="">Qualquer</option>
            <option value="0">Sem Garagem</option>
            <option value="1">1 Vaga</option>
            <option value="2">2 Vagas</option>
            <option value="3">3 Vagas</option>
            <option value="4">4 Vagas</option>
            <option value="5">5 ou mais Vagas</option>
          </select>
          <label for="squareFoot">Metros Quadrados:</label>
          <input
            type="number"
            id="squareFoot"
            min="0"
            placeholder="Digite a área em m²"
          />
          <label for="precoMin">Preço Mínimo:</label>
          <input
            type="number"
            id="precoMin"
            min="0"
            placeholder="Digite o preço mínimo"
          />
          <label for="precoMax">Preço Máximo:</label>
          <input
            type="number"
            id="precoMax"
            min="0"
            placeholder="Digite o preço máximo"
          />

          <Link to="/results" className={classes.button}>
            Buscar
          </Link>
        </div>
      </div>
    </>
  );
};

export default Filter;
