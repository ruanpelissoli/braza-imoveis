import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Results.module.css";
import ResultItem from "../components/ResultItem";
import { applyFilter } from "../store/filterActions";
import Filter from "../components/Filter";
import { RootState, Imovel, FilterOptions } from "../store/types";
import { setImoveis } from "../store/imoveisActions";

const Results: React.FC = () => {
  const dispatch = useDispatch();
  
  const imoveis: Imovel[] = useSelector(
    (state: RootState) => state.imoveis ?? []
  );
  
  const [atualImoveis, setAtualImoveis] = useState<Imovel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMoreResults, setHasMoreResults] = useState<boolean>(true);
  const filterOptions: FilterOptions = useSelector(
    (state: RootState) => state.filterOptions
  );
  const lastFilterOptions: FilterOptions = useSelector((state: RootState) => state.lastFilterOptions)

  useEffect(() => {
    if (imoveis && imoveis.length > 0) {
      const filteredImoveis: Imovel[] = applyFilter(imoveis, filterOptions);
      setAtualImoveis(filteredImoveis);
    }
  }, [imoveis, filterOptions, dispatch]);

  useEffect(() => {
    setCurrentPage(1); 
  }, [filterOptions]);

  const handleShowMoreClick = async () => {
    const nextPage: number = currentPage + 1;
    setCurrentPage(nextPage);
    const nextImoveis: Imovel[] = await dispatch(setImoveis(nextPage, lastFilterOptions));
    setAtualImoveis(nextImoveis);
    setHasMoreResults(nextImoveis.length > 0);
    
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
              realStateName={result.realStateName}
              url={result.url}
              title={result.title}
              price={result.price}
              state={result.state}
              city={result.city}
              filterBedrooms={result.filterBedrooms}
              filterBathrooms={result.filterBathrooms}
              filterGarageSpaces={result.filterGarageSpaces}
              filterSquareFoot={result.filterSquareFoot}
              filterCost={result.filterCost}
              filterType={result.filterType}
              images={result.images}
            />
          ))}
      </ul>
      {!hasMoreResults && <p>Não há mais resultados correspondentes</p>}
      {hasMoreResults && (
        <button onClick={handleShowMoreClick}>Ver mais</button>
      )}
    </div>
  );
};

export default Results;
