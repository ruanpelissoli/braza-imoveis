import { Link } from "react-router-dom";
import classes from "./Filter.module.css";

const Filter = () => {
  return (
    <>
      <label className={classes.box}>
        <input type="select" list="categoria" placeholder="Categoria" />

        <datalist id="categoria">
          <option value="Apartamento" />
          <option value="Área" />
          <option value="Box" />
          <option value="Casa" />
          <option value="Casa em Condomínio" />
          <option value="Casa Geminada" />
          <option value="Chácara" />
          <option value="Cobertura" />
          <option value="Depósito" />
          <option value="Duplex" />
          <option value="Fazenda" />
          <option value="Flat" />
          <option value="Garagem" />
          <option value="Hotel" />
          <option value="Imóvel Comercial" />
          <option value="JK" />
          <option value="Kitnet" />
          <option value="Loft" />
          <option value="Loja" />
          <option value="Pavilhão" />
          <option value="Pousada / Chalé" />
          <option value="Prédio Comercial" />
          <option value="Prédio Residencial" />
          <option value="Sala Comercial" />
          <option value="Sítio" />
          <option value="Sobrado" />
          <option value="Terreno" />
          <option value="Terreno em Condomínio" />
        </datalist>

        <input type="number" placeholder="Valor Mínimo" />
        <input type="number" placeholder="Valor Máximo" />

        <Link to="/results" className={classes.button}>
          Buscar
        </Link>
      </label>
    </>
  );
};

export default Filter;
