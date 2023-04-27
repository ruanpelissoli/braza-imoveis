// ResultItem.js
import React from "react";
import { Link } from "react-router-dom";
import classes from "./ResultItem.module.css";

const ResultItem = ({
  id,
  realStateId,
  url,
  title,
  price,
  description,
  details,
  propertyImages,
}) => {
  return (
    <li className={classes.modalcontent}>
      <Link
        to={`/results/${id}`} // Defina a rota com o ID como parte do caminho
        state={{
          id,
          realStateId,
          url,
          title,
          price,
          description,
          details,
          propertyImages,
        }} // Passe o objeto de estado com os dados do resultado diretamente
      >
        <h2>{title}</h2>
        <p>{description}</p>

        <h3>{price}</h3>
      </Link>
    </li>
  );
};

export default ResultItem;
