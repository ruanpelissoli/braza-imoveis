import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Imovel } from "../store/types";

const ResultItem: React.FC<Imovel> = ({
  id,
  realStateId,
  realStateName,
  url,
  title,
  price,
  state,
  city,
  filterBedrooms,
  filterBathrooms,
  filterGarageSpaces,
  filterSquareFoot,
  filterCost,
  filterType,
  images,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <li className="flex justify-center border-solid border-black border-2 flex-col mx-24 my-4 rounded-lg max-w-xs h-[500px] shadow shadow-neon bg-white">
      <div className="flex items-center justify-center w-full h-[110px] bg-black">
        <h2 className="mt-0 text-[#acaa31] text-xl uppercase font-sans">
          {title}
        </h2>
      </div>

      <div className="flex items-center justify-center m-auto relative w-full h-[280px]">
        <div className="flex items-center justify-center py-4 w-full max-h-[250px]">
          {images.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={imagem}
              className="block rounded-lg shadow shadow-black w-[85%] h-[85%]"
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
        </div>

        <button
          className={
            "absolute translate-y-1/2 top-[-120px] text-3xl text-white bg-gradient-to-r from-[#434343e8] to-transparent cursor-pointer left-0 hover:opacity-50 hover:text-black h-[240px] pr-3"
          }
          onClick={goToPreviousImage}
          style={{ display: currentImageIndex === 0 ? "none" : "block" }}
        >
          &lt;
        </button>
        <button
          className={
            "absolute translate-y-1/2 top-[-120px] text-3xl text-white bg-gradient-to-l from-[#434343e8] to-transparent cursor-pointer right-0 hover:opacity-50 hover:text-black h-[240px] pr-3"
          }
          onClick={goToNextImage}
          style={{
            display: currentImageIndex === images.length - 1 ? "none" : "block",
          }}
        >
          &gt;
        </button>
      </div>
      <div className="flex flex-wrap w-full h-[60px] items-center justify-center mb-2">
        {filterType && (
          <div className="flex justify-center items-center p-[3px] max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
            {filterType.charAt(0).toUpperCase() +
              filterType.slice(1).toLowerCase()}
          </div>
        )}
        {filterBedrooms > 0 && (
          <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
            {filterBedrooms === 1
              ? `${filterBedrooms} Quarto`
              : `${filterBedrooms} Quartos`}
          </div>
        )}
        {filterBathrooms > 0 && (
          <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
            {filterBathrooms === 1
              ? `${filterBathrooms} Banheiro`
              : `${filterBathrooms} Banheiros`}
          </div>
        )}
        {filterGarageSpaces > 0 && (
          <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
            {filterGarageSpaces === 1
              ? `${filterGarageSpaces} Garagem`
              : `${filterGarageSpaces} Garagens`}
          </div>
        )}
        {filterSquareFoot > 0 && (
          <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
            {filterSquareFoot}m²
          </div>
        )}
      </div>

      <div className="flex justify-center items-center w-full h-[60px] bg-[#acaa31]">
        <h3 className="text-2xl text-green-600 font-sans bg-black p-1 rounded-xl">{price}</h3>
      </div>

      <div className="w-full h-fit mb-0">
        <Link
          to={`/results/${id}`}
          className="flex font-sans text-lg justify-center items-center bg-black no-underline text-white rounded-sm py-2 hover:text-[#fcf94d] transition-color duration-500"
        >
          Mais Detalhes
        </Link>
      </div>
    </li>
  );
};

export default ResultItem;
