import React, { useState, useEffect } from "react";
import classes from "./Results.module.css";
import ResultItem from "../components/ResultItem"; // Importe o componente filho

const Results = () => {
  const [imoveis, setImoveis] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await fetch(
          "https://braza-imoveis-api.azurewebsites.net/properties",
          { mode: "cors" }
        );
        const data = await response.json();
        setImoveis(data);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    };
    fetchImoveis();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = imoveis.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <h1>Lista de Imóveis</h1>
      <ul className={classes.resultul}>
        {currentItems.map((result) => (
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
          />
        ))}
      </ul>

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastItem >= imoveis.length}
        >
          Próximo
        </button>
      </div>
    </>
  );
};

export default Results;