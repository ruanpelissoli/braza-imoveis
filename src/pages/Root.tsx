import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import SideBar from "../components/SideBar";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;