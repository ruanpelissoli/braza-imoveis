import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { DetailedImovel } from "../store/types";
import { Imovel } from "../store/types";

const ResultDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imovel, setImovel] = useState<DetailedImovel | null>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(2);
  

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

  const goToPreviousProperties = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
      setEndIndex(endIndex - 3);
    }
  };

  const goToNextProperties = () => {
    if (endIndex < recomended.length - 1) {
      setStartIndex(startIndex + 3);
      setEndIndex(endIndex + 3);
    }
  };

  if (!imovel) {
    return <div>Loading...</div>;
  }

  const recomended: Imovel[] = imovel.similarProperties;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex w-[90%] justify-center relative items-center rounded-lg h-[800px] bg-black shadow shadow-black ml-10">
        <div className="relative items-center justify-center w-full">
          {imovel.images &&
            imovel.images.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={imovel.description}
                className="block m-auto object-contain rounded-lg shadow shadow-black max-w-[650px] max-h-[750px]"
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

      <div className="bg-[ebebeb] shadow shadow-black rounded-sm py-4 px-2.5 h-fit mr-10">
        <h2 className="items-center text-4xl mb-10">{imovel.title}</h2>
        <p className="text-base mb-4 text-justify indent-2.5">
          {imovel.description}
        </p>
        <p className="text-base mb-4 text-justify indent-2.5">
          {imovel.details}
        </p>
        <h3 className="text-2xl text-green-600">{imovel.price}</h3>

        <table className="w-3/4 my-10 mx-auto p-0.5 table-fixed">
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

        <Link
          to={imovel.url}
          target="_blank"
          className="bg-black text-white rounded-sm no-underline py-2.5 px-5 hover:bg-[#929292] mx-6 my-6"
        >
          Ir para o anúncio
        </Link>

        <Link
          to=".."
          relative="path"
          className="bg-black text-white rounded-sm no-underline py-2.5 px-5 hover:bg-[#929292] mx-6 my-6"
        >
          Voltar
        </Link>

        <h2 className="text-xl mt-10">Imóveis Recomendados:</h2>
        <div className="flex relative justify-center items-center bg-[ebebeb] shadow shadow-black rounded-xl h-[350px] border-black border-2 my-4 mx-11">
          <div className="flex flex-row space-x-12">
            {recomended
              .slice(startIndex, endIndex + 1)
              .map((imovel: Imovel) => (
                <li
                  key={imovel.id}
                  className="flex justify-center border-solid border-black border-2 flex-col rounded-lg w-[200px] h-[300px] hover:shadow-xl hover:shadow-black my-5"
                >
                  <div className="w-full h-20">
                    <h2 className="mt-0 items-center text-black text-base uppercase overflow-hidden">
                      {imovel.title}
                    </h2>
                  </div>

                  <div className="flex flex-row justify-center items-center m-auto relative w-full h-60">
                    <div className="max-w-full max-h-[150px]">
                      <img
                        src={imovel.images[0]}
                        alt={imovel.images[0]}
                        className="m-auto block object-contain rounded-lg shadow shadow-black max-w-full max-h-[150px]"
                      />
                    </div>
                  </div>

                  <div className="w-full h-14">
                    <h3 className="text-2xl text-green-600">{imovel.price}</h3>
                  </div>

                  <div className="w-full h-12 mb-0">
                    <Link
                      to={`/results/${imovel.id}`}
                      className="flex justify-center items-center bg-black no-underline text-white rounded-sm py-1.5  hover:bg-[#707070]"
                    >
                      Mais Detalhes
                    </Link>
                  </div>
                </li>
              ))}
          </div>
          <button
            className="absolute top-[120px] translate-y-1/2 text-5xl text-[#0000004d] cursor-pointer left-0 hover:text-black"
            onClick={goToPreviousProperties}
            style={{ display: startIndex === 0 ? "none" : "block" }}
          >
            &lt;
          </button>
          <button
            className="absolute top-[120px] translate-y-1/2 text-5xl text-[#0000004d] cursor-pointer right-0 hover:text-black"
            onClick={goToNextProperties}
            style={{
              display: endIndex === recomended.length - 1 ? "none" : "block",
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultDetailPage;
