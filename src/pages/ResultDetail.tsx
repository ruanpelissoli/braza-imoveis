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
    <div className="flex flex-col justify-between items-start">
      <div className="flex justify-center items-center fixed rounded-lg h-[800px] w-2/5 ml-6 bg-black shadow shadow-black">
        <div className="relative items-center justify-center m-w-[600px]">
          {imovel.images &&
            imovel.images.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={imovel.description}
                className="block m-auto object-contain rounded-lg shadow shadow-black max-w-[80%] max-h-[80%]"
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

      <div className="w-6/12 fixed right-0 bg-[ebebeb] shadow shadow-black rounded-sm py-4 px-2.5 h-fit">
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





      

      <div className="flex flex-row w-3/5 bg-[ebebeb] shadow shadow-black rounded-sm h-[500px] fixed bottom-0 right-0  border-black border-2">
        <div className="flex flex-row ">
          {recomended.slice(startIndex, endIndex + 1).map((imovel: Imovel) => (
            <li
              key={imovel.id}
              className="flex justify-center border-solid border-black border-2 flex-col rounded-lg max-w-xs h-[450px] shadow shadow-black my-5 mx-10"
            >
              <div className="w-full h-20">
                <h2 className="mt-0 items-center text-black text-xl uppercase">
                  {imovel.title}
                </h2>
              </div>

              <div className="flex flex-row justify-center items-center m-auto relative w-full h-60 bg-[#5c5c5c]">
                <div className="max-w-{250px} max-h-{180px}">
                  {imovel.images.map((imagem, index) => (
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
                  className={
                    "absolute top-2/4 translate-y-1/2 text-2xl text-white bg-[#5c5c5c67] py-2 px-3.5 cursor-pointer left-0 hover:opacity-50"
                  }
                  onClick={goToPreviousImage}
                  style={{
                    display: currentImageIndex === 0 ? "none" : "block",
                  }}
                >
                  &lt;
                </button>
                <button
                  className={
                    "absolute top-2/4 translate-y-1/2 text-2xl text-white bg-[#5c5c5c67] py-2 px-3.5 cursor-pointer right-0 hover:opacity-50"
                  }
                  onClick={goToNextImage}
                  style={{
                    display:
                      currentImageIndex === imovel.images.length - 1
                        ? "none"
                        : "block",
                  }}
                >
                  &gt;
                </button>
              </div>
              <div className="flex flex-wrap w-full h-12">
                {imovel.filterType && (
                  <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
                    {imovel.filterType.charAt(0).toUpperCase() +
                      imovel.filterType.slice(1).toLowerCase()}
                  </div>
                )}
                {imovel.filterBedrooms > 0 && (
                  <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
                    {imovel.filterBedrooms === 1
                      ? `${imovel.filterBedrooms} Quarto`
                      : `${imovel.filterBedrooms} Quartos`}
                  </div>
                )}
                {imovel.filterBathrooms > 0 && (
                  <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
                    {imovel.filterBathrooms === 1
                      ? `${imovel.filterBathrooms} Banheiro`
                      : `${imovel.filterBathrooms} Banheiros`}
                  </div>
                )}
                {imovel.filterGarageSpaces > 0 && (
                  <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
                    {imovel.filterGarageSpaces === 1
                      ? `${imovel.filterGarageSpaces} Garagem`
                      : `${imovel.filterGarageSpaces} Garagens`}
                  </div>
                )}
                {imovel.filterSquareFoot > 0 && (
                  <div className="flex justify-center items-center p-0.5 max-w-1200px} max-h-{30px} my-0.5 mx-1 text-yellow-200 bg-black rounded-lg text-base">
                    {imovel.filterSquareFoot}m²
                  </div>
                )}
              </div>

              <div className="w-full h-12">
                <Link
                  to={`/results/${imovel.id}`}
                  className="flex justify-center items-center bg-black no-underline text-white rounded-sm pt-2.5 pb-2.5 mt-2.5 hover:bg-[#707070]"
                >
                  Mais Detalhes
                </Link>
              </div>
              <div className="w-full h-14">
                <h3 className="text-2xl text-green-600">{imovel.price}</h3>
              </div>
              
            </li>
          ))}
          
        </div>
        <button
          className="absolute top-2/4 translate-y-1/2 text-2xl text-white bg-[#5c5c5c67] py-2 px-3.5 cursor-pointer left-0 hover:opacity-50"
          onClick={goToPreviousProperties}
          style={{ display: startIndex === 0 ? "none" : "block" }}
        >
          &lt;
        </button>
        <button
          className="absolute top-2/4 translate-y-1/2 text-2xl text-white bg-[#5c5c5c67] py-2 px-3.5 cursor-pointer right-0 hover:opacity-50"
          onClick={goToNextProperties}
          style={{
            display: endIndex === recomended.length - 1 ? "none" : "block",
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ResultDetailPage;
