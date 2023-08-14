import ActionSugestion from "../components/ActionSugestion";
import Filter from "../components/Filter";

import RentBedrooms from "../components/RentBedrooms";
import SideBar from "../components/SideBar";


const HomePage: React.FC = () => {
  return (
    <>
      <Filter />
      <RentBedrooms />
      <ActionSugestion />
      <SideBar />
    </>
  );
};

export default HomePage;
