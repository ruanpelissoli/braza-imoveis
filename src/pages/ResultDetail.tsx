import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DetailedImovel } from '../store/types';
import { Imovel } from '../store/types';

const ResultDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imovel, setImovel] = useState<DetailedImovel | null>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(1);

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await fetch(
          `https://braza-imoveis-api.azurewebsites.net/properties/${id}`,
          { mode: 'cors' }
        );
        const data: DetailedImovel = await response.json();
        setImovel(data);
      } catch (error) {
        console.error('Erro ao buscar imÃ³veis:', error);
      }
    };
    fetchImoveis();
    setCurrentImageIndex(0);
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
      setStartIndex(startIndex - 2);
      setEndIndex(endIndex - 2);
    }
  };

  const goToNextProperties = () => {
    if (endIndex < recomended.length - 1) {
      setStartIndex(startIndex + 2);
      setEndIndex(endIndex + 2);
    }
  };

  if (!imovel) {
    return <div>Loading...</div>;
  }

  const recomended: Imovel[] = imovel.similarProperties;

  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4 bg-gradient-to-b from-mainDarker to-black'>
      <div className='flex w-full p-3 justify-center relative items-center rounded-lg h-[500px] lg:h-[800px] bg-black shadow-boxMain lg:ml-8 mt-10 m-auto'>
        <div className='relative items-center justify-center w-full'>
          {imovel.images &&
            imovel.images.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={imovel.description}
                className='block m-auto w-[500px] rounded-lg shadow-boxMain lg:w-[650px] lg:max-h-[750px]'
                style={{
                  display: index === currentImageIndex ? 'block' : 'none',
                }}
              />
            ))}
        </div>
        <button
          className='absolute top-[200px] bg-[#6464648c] md:bg-transparent pb-2 lg:top-[350px] translate-y-1/2 text-5xl text-[#ffffff3f] cursor-pointer left-0 hover:text-white'
          onClick={goToPreviousImage}
          style={{ display: currentImageIndex === 0 ? 'none' : 'block' }}
        >
          &lt;
        </button>
        <button
          className='absolute top-[200px] bg-[#6464648c] md:bg-transparent pb-2 lg:top-[350px] translate-y-1/2 text-5xl text-[#ffffff3f] cursor-pointer right-0 hover:text-white'
          onClick={goToNextImage}
          style={{
            display:
              currentImageIndex === (imovel.images?.length || 0) - 1
                ? 'none'
                : 'block',
          }}
        >
          &gt;
        </button>
        <div className='absolute inset-x-3 bottom-9 text-white'>
          {currentImageIndex + 1}/{imovel.images.length}
        </div>
      </div>

      <div className='shadow-boxMain rounded-sm py-4 px-2.5 h-fit md:mr-10 my-10 bg-white mx-10'>
        <h2 className='items-center text-4xl mb-10 bg-black text-mainVeryLighter py-5 rounded-xl font-title'>
          {imovel.title}
        </h2>
        <p className='text-lg mb-4 text-justify indent-8 font-sans'>
          {imovel.description}
        </p>
        <p className='text-lg mb-4 text-justify indent-8 font-sans'>
          {imovel.details}
        </p>
        <h3 className='text-3xl text-green font-sans bg-black rounded-xl w-fit mx-auto px-2 py-2'>
          {imovel.price}
        </h3>

        <table className='w-full md:w-4/5 my-10 mx-auto p-0.5 table-fixed font-sans'>
          <tbody>
            <tr className='border-black border-[1px]'>
              <th className='w-3/12 bg-white'>Quartos</th>
              <th className='w-3/12 bg-white'>Banheiros</th>
              <th className='w-3/12 bg-white'>Vagas na Garagem</th>
              <th className='w-3/12 bg-white'>Metros Quadrados</th>
            </tr>
            <tr>
              <td className='w-3/12 bg-black text-xl text-mainVeryLighter'>
                {imovel.filterBedrooms}
              </td>
              <td className='w-3/12 bg-black text-xl text-mainVeryLighter'>
                {imovel.filterBathrooms}
              </td>
              <td className='w-3/12 bg-black text-xl text-mainVeryLighter'>
                {imovel.filterGarageSpaces}
              </td>
              <td className='w-3/12 bg-black text-xl text-mainVeryLighter'>
                {imovel.filterSquareFoot}m²
              </td>
            </tr>
          </tbody>
        </table>

        <Link
          to={imovel.url}
          target='_blank'
          className='bg-black text-white rounded-sm no-underline py-2.5 px-5 hover:text-mainDarker mx-6 my-6 font-sans hover:shadow-boxMain transition-colors duration-500'
        >
          Ir para o anúncio
        </Link>

        <Link
          to='..'
          relative='path'
          className='bg-black text-white rounded-sm no-underline py-2.5 px-5 hover:text-mainDarker mx-6 my-6 font-sans hover:shadow-boxMain transition-colors duration-500'
        >
          Voltar
        </Link>

        <h2 className='text-xl mt-10 font-sans'>Imóveis Semelhantes:</h2>
        <div className='flex flex-col w-fit px-10 relative justify-center items-center shadow-boxMain rounded-xl xl:h-[350px] border-black border-2 my-4 mx-auto font-sans'>
          <div className='flex flex-col mx-3 my-3 xl:space-x-12 xl:flex-row'>
            {recomended
              .slice(startIndex, endIndex + 1)
              .map((imovel: Imovel) => (
                <li
                  key={imovel.id}
                  className='flex my-2 justify-center border-solid border-black border-2 flex-col rounded-lg w-[200px] h-[300px] hover:shadow-cardBox'
                >
                  <div className='w-full bg-black flex justify-center items-start flex-shrink-0 h-[15%] overflow-hidden'>
                    <h2 className='text-mainVeryLighter text-base uppercase overflow-hidden mt-0 font-title'>
                      {imovel.title}
                    </h2>
                  </div>

                  <div className='flex flex-row justify-center items-center relative w-full h-[60%]'>
                    <div className='max-w-full max-h-[60%] m-auto flex justify-center items-center'>
                      <img
                        src={imovel.images[0]}
                        alt={imovel.images[0]}
                        className='block object-contain rounded-lg shadow-boxMain max-w-full h-[60%]'
                      />
                    </div>
                  </div>

                  <div className='w-full h-[20%] flex items-center'>
                    <h3 className='text-2xl text-green m-auto'>
                      {imovel.price}
                    </h3>
                  </div>

                  <div className='w-full h-[40px] mb-0'>
                    <Link
                      to={`/results/${imovel.id}`}
                      className='flex justify-center items-center bg-black no-underline text-white rounded-sm py-1.5 hover:text-mainDarker transition-colors duration-500'
                    >
                      Mais Detalhes
                    </Link>
                  </div>
                </li>
              ))}
          </div>
          <button
            className='absolute top:-[100px] xl:top-[120px] translate-y-1/2 text-5xl text-[#0000004d] cursor-pointer left-0 hover:text-black'
            onClick={goToPreviousProperties}
            style={{ display: startIndex === 0 ? 'none' : 'block' }}
          >
            &lt;
          </button>
          <button
            className='absolute top:-[100px] xl:top-[120px] translate-y-1/2 text-5xl text-[#0000004d] cursor-pointer right-0 hover:text-black'
            onClick={goToNextProperties}
            style={{
              display: endIndex === recomended.length - 1 ? 'none' : 'block',
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
