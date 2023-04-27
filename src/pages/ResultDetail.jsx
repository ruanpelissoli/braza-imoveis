import { Link, useLocation } from "react-router-dom";
import classes from "./ResultDetail.module.css";
import { useState } from "react";

const ResultDetailPage = () => {
  const location = useLocation();
  const { url, title, price, description, details, propertyImages } =
    location.state;

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
    <div className={classes.resultDetailPage}>
      <div className={classes.imageWrapper}>
        <div className={classes.imageContainer}>
          {propertyImages.map((imagem, index) => (
            <img
              key={index}
              src={"https://www.imobiliariaconceitto.com.br/" + imagem.url}
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

      <div className={classes.detailsContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{details}</p>
        <h3>{price}</h3>
        

        <p>
          <Link to=".." relative="path">
            Voltar
          </Link>
        </p>

        
          <Link to={url} target="_blank" className={classes.urlButton}>Ir para o anúncio</Link>
       
      </div>
    </div>
  );
};

export default ResultDetailPage;
