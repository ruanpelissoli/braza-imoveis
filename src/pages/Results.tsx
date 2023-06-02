import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Results.module.css";
import ResultItem from "../components/ResultItem";
import { applyFilter } from "../store/filterActions";
import Filter from "../components/Filter";
import { RootState, Imovel, FilterOptions } from "../store/types";
import { setImoveis } from "../store/imoveisActions";
import { useDispatch } from "react-redux";

const Results: React.FC = () => {
  const imoveis: Imovel[] = useSelector(
    (state: RootState) => state.imoveis ?? []
  );
  const [atualImoveis, setAtualImoveis] = useState<Imovel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreResults, setHasMoreResults] = useState(true);
  const filterOptions: FilterOptions = useSelector((state: RootState) => state.filterOptions);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (imoveis && imoveis.length > 0) {
      const filteredImoveis = applyFilter(imoveis, filterOptions);
      setAtualImoveis(filteredImoveis);
      console.log(filterOptions);
    }
  }, [imoveis, filterOptions]);

  const handleShowMoreClick = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  
    const currentImoveis = [...atualImoveis]; // Armazena os imóveis atuais em uma nova variável
  
    const response = await dispatch(setImoveis(nextPage, filterOptions));
    if (response && response.payload) {
      
      const nextImoveis = response.payload;
      console.log(nextImoveis);
      const filteredNextImoveis = applyFilter(nextImoveis, filterOptions);
  
      const updatedImoveis = [...currentImoveis, ...filteredNextImoveis];
      setAtualImoveis(updatedImoveis);
      setHasMoreResults(filteredNextImoveis.length > 0);
    }
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
