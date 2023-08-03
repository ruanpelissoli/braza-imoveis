import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Imovel, RootState } from '../store/types';
import { useSelector } from 'react-redux';


const GuardMenu: React.FC<{}> = () => {
    const [atualEx, setAtualEx] = useState<Imovel[]>([]);
    const imoveis: Imovel[] = useSelector(
        (state: RootState) => state.imoveis ?? []
      );
      useEffect(() => {
        if (imoveis && imoveis.length > 0) {
          setAtualEx(imoveis);
        }
      }, [imoveis]);
    return <>
    <div className='flex h-[650px] mt-40 mb-40'>
        <div className='w-1/2 h-full bg-black '>
          <h2 className='text-white text-4xl font-sans my-10'>Mobiliados:</h2>
          <div className='bg-mainVeryLighter flex flex-row justify-center items-center'>
            {atualEx.slice(3, 5).map((imovel: Imovel) => (
              <li
                key={imovel.id}
                className='flex my-10 mx-10 justify-center border-solid border-black border-2 flex-col rounded-lg w-[200px] h-[300px] hover:shadow-cardBox bg-white'
              >
                <div className='w-full bg-black flex justify-center items-start flex-shrink-0 h-[15%] overflow-hidden'>
                  <h2 className='text-mainLighter text-base uppercase overflow-hidden mt-0'>
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
                  <h3 className='text-2xl text-green m-auto'>{imovel.price}</h3>
                </div>

                <div className='w-full h-[40px] mb-0 bg-black'>
                  <Link
                    to={`/results/${imovel.id}`}
                    className='flex justify-center items-center bg-black no-underline text-white rounded-sm py-1.5 hover:text-main transition-color duration-500'
                  >
                    Mais Detalhes
                  </Link>
                </div>
              </li>
            ))}
          </div>
        </div>
        <div className='w-1/2 h-full bg-mainVeryLighter '>
          <h2 className='text-black text-4xl font-sans my-10'>
            Desguarnecidos:
          </h2>

          <div className='bg-[#333333] flex flex-row justify-center items-center'>
            {atualEx.slice(3, 5).map((imovel: Imovel) => (
              <li
                key={imovel.id}
                className='flex my-10 mx-10 justify-center border-solid border-black border-2 flex-col rounded-lg w-[200px] h-[300px] hover:shadow-cardBox bg-white'
              >
                <div className='w-full bg-black flex justify-center items-start flex-shrink-0 h-[15%] overflow-hidden'>
                  <h2 className='text-mainLighter text-base uppercase overflow-hidden mt-0'>
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
                  <h3 className='text-2xl text-green m-auto'>{imovel.price}</h3>
                </div>

                <div className='w-full h-[40px] mb-0 bg-black'>
                  <Link
                    to={`/results/${imovel.id}`}
                    className='flex justify-center items-center bg-black no-underline text-white rounded-sm py-1.5 hover:text-main transition-color duration-500'
                  >
                    Mais Detalhes
                  </Link>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
}

export default GuardMenu;