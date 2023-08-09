import Image01 from "../assets/4782264.jpg";
import Image02 from "../assets/4038756.jpg";
import Image03 from "../assets/4760012.jpg";

const ActionSugestion: React.FC<{}> = () => {
  return (
    <>
      <h1 className="flex text-center items-center justify-center font-title text-3xl text-mainVeryLighter bg-black p-6">CONTE CONOSCO!</h1>
      <div className="bg-mainDarker h-8"/>
      <ul className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-10 items-center justify-center mx-auto my-10">
        <li className="flex flex-col w-96 items-center justify-center">
          <img
            src={Image01}
            alt="Imagem Ilustrativa"
            className="w-96 h-80"
          ></img>
          <h2 className="font-title text-xl mb-4">Anuncie seu imóvel</h2>
          <p className="font-sans text-base mx-2 mb-4">
            Anuncie seu imóvel conosco para conseguir o negócio mais vantajoso
            de forma ágil e simplificada!
          </p>
          <button className='flex justify-center items-center bg-black no-underline text-white rounded-sm p-2 hover:text-mainLighter transition-colors duration-500'>Saiba Mais</button>
        </li>
        <li className="flex flex-col w-96 items-center justify-center">
          <img
            src={Image03}
            alt="Imagem Ilustrativa"
            className="w-80 h-80"
          ></img>

          <h2 className="font-title text-xl mb-4">Compre um imóvel</h2>
          <p className="font-sans text-base mb-4">
            Encontre o melhor investimento no imóvel perfeito para você. Busque
            em nossa carteira e conte com atendimento especializado!
          </p>
          <button className='flex justify-center items-center bg-black no-underline text-white rounded-sm p-2 hover:text-mainLighter transition-colors duration-500'>Confira as oportunidades</button>
        </li>
        <li className="flex flex-col w-96 items-center justify-center">
          <img
            src={Image02}
            alt="Imagem Ilustrativa"
            className="w-80 h-80"
          ></img>
          <h2 className="font-title text-xl mb-4">Alugue um imóvel</h2>
          <p className="font-sans text-base mb-4">
            Encontre o imóvel ideal para construir sua história através de nosso
            site e conte conosco durante todo o processo.
          </p>
          <button className='flex justify-center items-center bg-black no-underline text-white rounded-sm p-2 hover:text-mainLighter transition-colors duration-500'>Encontre seu lar</button>
        </li>
      </ul>
    </>
  );
};

export default ActionSugestion;
