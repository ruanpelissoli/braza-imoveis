// ResultItem.js
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
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={classes.itemImageWrapper}>
        <Link to={`/results/${id}`} className={classes.itemImage}>
          {propertyImages.map((imagem, index) => (
            <img
              key={index}
              src={imagem.url}
              alt={description}
              className={classes.currentImage}
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
        </Link>

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
      <div className={classes.details}>
        Quartos: {bedrooms} - Banheiros: {bathrooms} - Garagem: {garageSpaces}{" "}
        Tamanho: {squareFoot}m²
      </div>
      <h3>{price}</h3>
    </li>
  );
};

export default ResultItem;
