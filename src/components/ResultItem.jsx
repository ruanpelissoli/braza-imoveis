import { React, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ResultItem.module.css";

const ResultItem = ({
  id,
  title,
  price,
  description,
  propertyImages,
  bedrooms,
  bathrooms,
  garageSpaces,
  squareFoot,
  type,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < propertyImages.length - 1) {
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
          {propertyImages.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt={description}
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
              currentImageIndex === propertyImages.length - 1
                ? "none"
                : "block",
          }}
        >
          &gt;
        </button>
      </div>
      <div className={classes.detailsWrapper}>
        {type && (
          <div className={classes.details}>
            {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
          </div>
        )}
      {bedrooms > 0 && (
          <div className={classes.details}>
            {bedrooms === 1 ? `${bedrooms} Quarto` : `${bedrooms} Quartos`}
          </div>
        )}
        {bathrooms > 0 && (
          <div className={classes.details}>
            {bathrooms === 1 ? `${bathrooms} Banheiros` : `${bathrooms} Banheiros`}
          </div>
        )}
        {garageSpaces > 0 && (
          <div className={classes.details}>
            {garageSpaces === 1 ? `${garageSpaces} Garagem` : `${garageSpaces} Garagens`}
          </div>
        )}
        {squareFoot > 0 && (
          <div className={classes.details}>
            {squareFoot}m²
          </div>
        )}
      </div>

      <div className={classes.moreDetailsWrapper}>
        <Link
          to={`/results/${id}`}
          target="_blank"
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
