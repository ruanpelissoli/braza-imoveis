import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImoveis } from "../store/imoveisActions";
import classes from "./Results.module.css";
import ResultItem from "../components/ResultItem.jsx";
import { applyFilter } from "../store/filterActions";
import Filter from "../components/Filter";

const Results = () => {
  const dispatch = useDispatch();
  const imoveis = useSelector((state) => state.imoveis);
  const [atualImoveis, setAtualImoveis] = useState(imoveis);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(setImoveis(currentPage));
  }, [dispatch, currentPage]);

  const filterOptions = useSelector((state) => state.filterOptions);

  useEffect(() => {
    const filteredImoveis = applyFilter(imoveis, filterOptions);
    setAtualImoveis(filteredImoveis);
  }, [imoveis, filterOptions]);

  const handleShowMoreClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <Filter />
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
      <button onClick={handleShowMoreClick}>Ver mais</button>
    </div>
  );
};

export default Results;
