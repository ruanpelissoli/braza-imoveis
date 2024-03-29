import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Imovel, RootState } from "../store/types";
import { useSelector } from "react-redux";

const RentBedrooms: React.FC<{}> = () => {
  const [atualEx, setAtualEx] = useState<Imovel[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(8);
  const imoveis: Imovel[] = useSelector(
    (state: RootState) => state.imoveis ?? []
  );
  useEffect(() => {
    if (imoveis && imoveis.length > 0) {
      setAtualEx(imoveis);
    }
  }, [imoveis]);

  const goToPreviousProperties = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 6);
      setEndIndex(endIndex - 6);
    }
  };

  const goToNextProperties = () => {
    if (endIndex < imoveis.length - 1) {
      setStartIndex(startIndex + 6);
      setEndIndex(endIndex + 6);
    }
  };

  return (
    <>
      <h2 className="text-3xl mt-10 font-sans mx-auto">Kitnets para Aluguel:</h2>
      <div className="flex flex-col w-full lg:px-10 relative justify-center items-center lg:items-start shadow shadow-black rounded-xl lg:h-[350px] border-black border-2 my-4 ml-20 mx-auto font-sans bg-gradient-to-r from-mainDarker to-black overflow-hidden">
        <div className="flex flex-col m-2 md:space-x-12 md:flex-row ">
          {atualEx.slice(startIndex, endIndex).map((imovel: Imovel) => (
            <li
              key={imovel.id}
              className="flex my-2 justify-center border-solid border-black border-2 flex-col rounded-lg w-[200px] h-[300px] hover:shadow-cardBox bg-white"
            >
              <div className="w-full bg-black flex justify-center items-start flex-shrink-0 h-[15%] overflow-hidden">
                <h2 className="text-mainLighter text-base uppercase overflow-hidden mt-0">
                  {imovel.title}
                </h2>
              </div>

              <div className="flex flex-row justify-center items-center relative w-full h-[60%]">
                <div className="max-w-full max-h-[60%] m-auto flex justify-center items-center">
                  <img
                    src={imovel.images[0]}
                    alt={imovel.images[0]}
                    className="block object-contain rounded-lg shadow shadow-black max-w-full h-[60%]"
                  />
                </div>
              </div>

              <div className="w-full h-[20%] flex items-center">
                <h3 className="text-2xl text-green m-auto">{imovel.price}</h3>
              </div>

              <div className="w-full h-[40px] mb-0">
                <Link
                  to={`/results/${imovel.id}`}
                  className="flex justify-center items-center bg-black no-underline text-white rounded-sm py-1.5 hover:text-main transition-color duration-500"
                >
                  Mais Detalhes
                </Link>
              </div>
            </li>
          ))}
        </div>
        <button
          className="absolute top:-[100px] xl:top-[120px] translate-y-1/2 text-5xl text-white cursor-pointer left-0 hover:text-mainUltraLighter"
          onClick={goToPreviousProperties}
          style={{ display: startIndex === 0 ? "none" : "block" }}
        >
          &lt;
        </button>
        <button
          className="absolute top:-[100px] xl:top-[120px] translate-y-1/2 text-5xl text-white cursor-pointer right-0 hover:text-mainUltraLighter"
          onClick={goToNextProperties}
          style={{
            display: endIndex === imoveis.length - 1 ? "none" : "block",
          }}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default RentBedrooms;
