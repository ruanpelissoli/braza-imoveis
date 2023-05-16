import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./ResultDetail.module.css";

const ResultDetailPage = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imovel, setImovel] = useState([]);
  

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await fetch(
          `https://braza-imoveis-api.azurewebsites.net/properties/${id}`,
          { mode: "cors" }
        );
        const data = await response.json();
        setImovel(data);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    };
    fetchImoveis();
  }, [id]);

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < imovel.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className={classes.resultDetailPage}>
      <div className={classes.imageWrapper}>
        <div className={classes.imageContainer}>
          {imovel.images &&
            imovel.images.map((imagem, index) => (
              <img
                key={index}
                src={imagem.url}
                alt={imovel.description}
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
              currentImageIndex === imovel.images - 1 ? "none" : "block",
          }}
        >
          &gt;
        </button>
      </div>

      <div className={classes.detailsContainer}>
        <h2>{imovel.title}</h2>
        <p>{imovel.description}</p>
        <p>{imovel.details}</p>
        <h3>{imovel.price}</h3>

        <p>
          <Link to=".." relative="path">
            Voltar
          </Link>
        </p>

        <Link to={imovel.url} target="_blank" className={classes.urlButton}>
          Ir para o anúncio
        </Link>
      </div>
    </div>
  );
};

export default ResultDetailPage;
