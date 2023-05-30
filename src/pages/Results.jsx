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
  const [atualImoveis, setAtualImoveis] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const filterOptions = useSelector((state) => state.filterOptions);


  useEffect(() => {
    dispatch(setImoveis(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    setCurrentPage(1); 
  }, [filterOptions]);

  
  useEffect(() => {
    const filteredImoveis = applyFilter(imoveis, filterOptions);
    setAtualImoveis(filteredImoveis.slice(0, 12));
    setHasMoreResults(filteredImoveis.length > 12);
  }, [imoveis, filterOptions]);

  const handleShowMoreClick = () => {
    const startIndex = currentPage * 12;
    const endIndex = startIndex + 12;
    const filteredImoveis = applyFilter(imoveis, filterOptions);
    const nextImoveis = filteredImoveis.slice(startIndex, endIndex);
    setAtualImoveis((prevImoveis) => [...prevImoveis, ...nextImoveis]);
    setHasMoreResults(nextImoveis.length > 0); 
    setCurrentPage((prevPage) => prevPage + 1);
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
              type={result.filterType}
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
              realStateName={result.realStateName}
            />
          ))}
      </ul>
      {!hasMoreResults && <p>Não há mais resultados correspondentes</p>}
      {hasMoreResults && <button onClick={handleShowMoreClick}>Ver mais</button>}
    </div>
  );
};

export default Results;
