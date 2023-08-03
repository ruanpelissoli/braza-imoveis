import Filter from "../components/Filter";


import RentBedrooms from "../components/RentBedrooms";

const HomePage: React.FC = () => {
  return (
    <>
      <div>
        <Filter />
      </div>

      <RentBedrooms />
      
    </>
  );
};

export default HomePage;
