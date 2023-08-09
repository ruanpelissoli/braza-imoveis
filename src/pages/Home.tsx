import ActionSugestion from "../components/ActionSugestion";
import Filter from "../components/Filter";

import RentBedrooms from "../components/RentBedrooms";

const HomePage: React.FC = () => {
  return (
    <>
      <Filter />
      <RentBedrooms />
      <ActionSugestion />
    </>
  );
};

export default HomePage;
