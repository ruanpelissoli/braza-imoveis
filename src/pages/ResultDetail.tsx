import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./ResultDetail.module.css";
import { DetailedImovel } from "../store/types";

const ResultDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imovel, setImovel] = useState<DetailedImovel | null>(null);

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await fetch(
          `https://braza-imoveis-api.azurewebsites.net/properties/${id}`,
          { mode: "cors" }
        );
        const data: DetailedImovel = await response.json();
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
    if (currentImageIndex < (imovel?.images.length || 0) - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  if (!imovel) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.resultDetailPage}>
      <div className={classes.imageWrapper}>
        <div className={classes.imageContainer}>
          {imovel.images &&
            imovel.images.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
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
            display: currentImageIndex === (imovel.images?.length || 0) - 1 ? "none" : "block",
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

        <table className={classes.resultDetailTable}>
          <tbody>
            <tr>
              <th>Quartos</th>
              <th>Banheiros</th>
              <th>Vagas na Garagem</th>
              <th>Metros Quadrados</th>
            </tr>
            <tr>
              <td>{imovel.filterBedrooms}</td>
              <td>{imovel.filterBathrooms}</td>
              <td>{imovel.filterGarageSpaces}</td>
              <td>{imovel.filterSquareFoot}m²</td>
            </tr>
          </tbody>
        </table>

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
