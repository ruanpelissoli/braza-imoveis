import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImoveis } from "../store/imoveisActions";
import classes from "./Results.module.css";
import ResultItem from "../components/ResultItem.jsx";
import { applyFilter } from "../store/filterActions";

const Results = () => {
  const dispatch = useDispatch();
  const imoveis = useSelector((state) => state.imoveis);
  const [atualImoveis, setAtualImoveis] = useState(imoveis);
  
  useEffect(() => {
    dispatch(setImoveis());
  }, [dispatch]);

  const filterOptions = useSelector((state) => state.filterOptions);

  useEffect(() => {
    const filteredImoveis = applyFilter(imoveis, filterOptions);
    setAtualImoveis(filteredImoveis);
  }, [imoveis, filterOptions]);

  

  return (
    <div>
      <h1>Lista de Imóveis</h1>
      <ul className={classes.resultul}>
        {atualImoveis &&
          atualImoveis.map((result) => (
            <ResultItem
              key={result.id}
              id={result.id}
              realStateId={result.realStateId}
              url={result.url}
              title={result.title}
              price={result.price}
              description={result.description}
              details={result.details}
              propertyImages={result.images}
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
