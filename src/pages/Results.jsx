import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImoveis } from "../store/imoveisActions";
import classes from "./Results.module.css";
import ResultItem from "../components/ResultItem.jsx";

const Results = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setImoveis());
  }, [dispatch]);

  const imoveis = useSelector((state) => state.imoveis);

  return (
    <div>
      <h1>Lista de Imóveis</h1>
      <ul className={classes.resultul}>
        {imoveis && imoveis.map((result) => (
          <ResultItem
            key={result.id}
            id={result.id}
            realStateId={result.realStateId}
            url={result.url}
            title={result.title}
            price={result.price}
            description={result.description}
            details={result.details}
            propertyImages={result.propertyImages}
            bedrooms={result.filterBedrooms}
            bathrooms={result.filterBathrooms}
            garageSpaces={result.filterGarageSpaces}
            squareFoot={result.filterSquareFoot}
          />
        ))}
      </ul>
    </div>
  );
};

export default Results;
