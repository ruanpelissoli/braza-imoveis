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
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(setImoveis(currentPage));
  }, [dispatch, currentPage]);

  const filterOptions = useSelector((state) => state.filterOptions);

  useEffect(() => {
    const filteredImoveis = applyFilter(imoveis, filterOptions);
    setAtualImoveis(filteredImoveis.slice(0, 12)); // Carrega os primeiros 12 imóveis
  }, [imoveis, filterOptions]);

  const handleShowMoreClick = () => {
    const startIndex = (currentPage + 1) * 12; // Calcula o índice inicial para os próximos 12 imóveis
    const endIndex = startIndex + 12; // Calcula o índice final para os próximos 12 imóveis
    const nextImoveis = applyFilter(imoveis, filterOptions).slice(startIndex, endIndex); // Obtém os próximos 12 imóveis
    setAtualImoveis((prevImoveis) => [...prevImoveis, ...nextImoveis]); // Adiciona os próximos imóveis à lista atual
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
