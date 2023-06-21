import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
    <div className="flex flex-row justify-between items-start">
      <div className="flex justify-center items-center relative rounded-lg h-[800px] w-2/5 ml-6 bg-black shadow shadow-black">
        <div className="relative items-center justify-center m-w-[600px]">
          {imovel.images &&
            imovel.images.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={imovel.description}
                className="block m-auto object-contain rounded-lg shadow shadow-black max-w-xl max-h-3xl"
                style={{
                  display: index === currentImageIndex ? "block" : "none",
                }}
              />
            ))}
        </div>
        <button
          className="absolute top-[350px] translate-y-1/2 text-5xl text-[#ffffff3f] cursor-pointer left-0 hover:text-white"
          onClick={goToPreviousImage}
          style={{ display: currentImageIndex === 0 ? "none" : "block" }}
        >
          &lt;
        </button>
        <button
          className="absolute top-[350px] translate-y-1/2 text-5xl text-[#ffffff3f] cursor-pointer right-0 hover:text-white"
          onClick={goToNextImage}
          style={{
            display:
              currentImageIndex === (imovel.images?.length || 0) - 1
                ? "none"
                : "block",
          }}
        >
          &gt;
        </button>
        <div className="absolute inset-x-3 bottom-9 text-white">
          {currentImageIndex + 1}/{imovel.images.length}
        </div>
      </div>

      <div className="w-6/12 mx-10 bg-[ebebeb] shadow shadow-black rounded-sm py-4 px-2.5 h-fit">
        <h2 className="items-center text-4xl">{imovel.title}</h2>
        <p className="text-base mb-4 text-justify indent-2.5">
          {imovel.description}
        </p>
        <p className="text-base mb-4 text-justify indent-2.5">
          {imovel.details}
        </p>
        <h3 className="text-2xl text-green-600">{imovel.price}</h3>

        <table className="w-3/4 my-2 mx-auto p-0.5 table-fixed">
          <tbody>
            <tr>
              <th className="w-3/12 bg-[#c5c4c4]">Quartos</th>
              <th className="w-3/12 bg-[#c5c4c4]">Banheiros</th>
              <th className="w-3/12 bg-[#c5c4c4]">Vagas na Garagem</th>
              <th className="w-3/12 bg-[#c5c4c4]">Metros Quadrados</th>
            </tr>
            <tr>
              <td className="w-3/12 bg-white">{imovel.filterBedrooms}</td>
              <td className="w-3/12 bg-white">{imovel.filterBathrooms}</td>
              <td className="w-3/12 bg-white">{imovel.filterGarageSpaces}</td>
              <td className="w-3/12 bg-white">{imovel.filterSquareFoot}m²</td>
            </tr>
          </tbody>
        </table>

        <p>
          <Link to=".." relative="path">
            Voltar
          </Link>
        </p>

        <Link
          to={imovel.url}
          target="_blank"
          className="bg-black text-white rounded-sm no-underline py-2.5 px-5 hover:bg-[#929292]"
        >
          Ir para o anúncio
        </Link>
      </div>
    </div>
  );
};

export default ResultDetailPage;
