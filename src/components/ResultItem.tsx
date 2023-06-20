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
    <li className="flex justify-center border-solid border-black border-2 flex-col mx-24 my-4 rounded-lg max-w-xs h-[450px] shadow shadow-black ">
      <div className="w-full h-20">
        <h2 className="mt-0 items-center text-black text-xl uppercase">{title}</h2>
      </div>

      <div className="flex justify-center items-center m-auto relative w-full h-60 bg-[#5c5c5c]">
        <div className="max-w-{250px} max-h-{180px}">
          {images.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={imagem}
              className="m-auto block object-contain rounded-lg shadow shadow-black max-w-{250px} max-h-{180px}"
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
        </div>

        <button
          className={"absolute top-1/2 translate-y-1/2 text-2xl text-white bg-[#5c5c5c67] py-2 px-3.5 cursor-pointer left-0 hover:opacity-50"}
          onClick={goToPreviousImage}
          style={{ display: currentImageIndex === 0 ? "none" : "block" }}
        >
          &lt;
        </button>
        <button
          className={"absolute top-1/2 translate-y-1/2 text-2xl text-white bg-[#5c5c5c67] py-2 px-3.5 cursor-pointer right-0 hover:opacity-50"} 
          onClick={goToNextImage}
          style={{
            display: currentImageIndex === images.length - 1 ? "none" : "block",
          }}
        >
          &gt;
        </button>
      </div>
      <div className="flex flex-wrap w-full h-12">
        {filterType && (
          <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
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
          <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">{filterSquareFoot}m²</div>
        )}
      </div>

      <div className="w-full h-12">
        <Link to={`/results/${id}`} className="flex justify-center items-center bg-black no-underline text-white rounded-sm pt-2.5 pb-2.5 mt-2.5 hover:bg-[#707070]">
          Mais Detalhes
        </Link>
      </div>
      <div className="w-full h-14">
        <h3 className="text-2xl text-green-600">{price}</h3>
      </div>
    </li>
  );
};

export default ResultItem;
