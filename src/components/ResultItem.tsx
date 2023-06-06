import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ResultItem.module.css";
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
  images
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
    <li className={classes.modalcontent}>
      <div className={classes.titleWrapper}>
        <h2>{title}</h2>
      </div>

      <div className={classes.itemImageWrapper}>
        <div className={classes.itemImage}>
          {images.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={imagem}
              className={classes.currentImage}
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
        </div>

        <button
          className={`${classes.navigationButton} ${classes.left}`}
          onClick={goToPreviousImage}
          style={{ display: currentImageIndex === 0 ? "none" : "block" }}
        >
          &lt;
        </button>
        <button
          className={`${classes.navigationButton} ${classes.right}`}
          onClick={goToNextImage}
          style={{
            display:
              currentImageIndex === images.length - 1
                ? "none"
                : "block",
          }}
        >
          &gt;
        </button>
      </div>
      <div className={classes.detailsWrapper}>
        {filterType && (
          <div className={classes.details}>
            {filterType.charAt(0).toUpperCase() + filterType.slice(1).toLowerCase()}
          </div>
        )}
        {filterBedrooms > 0 && (
          <div className={classes.details}>
            {filterBedrooms === 1 ? `${filterBedrooms} Quarto` : `${filterBedrooms} Quartos`}
          </div>
        )}
        {filterBathrooms > 0 && (
          <div className={classes.details}>
            {filterBathrooms === 1 ? `${filterBathrooms} Banheiro` : `${filterBathrooms} Banheiros`}
          </div>
        )}
        {filterGarageSpaces > 0 && (
          <div className={classes.details}>
            {filterGarageSpaces === 1 ? `${filterGarageSpaces} Garagem` : `${filterGarageSpaces} Garagens`}
          </div>
        )}
        {filterSquareFoot > 0 && (
          <div className={classes.details}>
            {filterSquareFoot}m²
          </div>
        )}
      </div>

      <div className={classes.moreDetailsWrapper}>
        <Link
          to={`/results/${id}`}
          className={classes.moreDetails}
        >
          Mais Detalhes
        </Link>
      </div>
      <div className={classes.priceWrapper}>
        <h3>{price}</h3>
      </div>
    </li>
  );
};

export default ResultItem;
