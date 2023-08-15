import { useState } from "react";

import logo from "../assets/logo.svg";
import chevron from "../assets/chevron.svg";
import profile from "../assets/profile.jpg";
import settings from "../assets/settings.svg";
import help from "../assets/help.svg";
import funds from "../assets/funds.svg";
import dashboard from "../assets/dashboard.svg";
import analytics from "../assets/analytics.svg";
import performance from "../assets/performance.svg";

const SideBar: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const openBarHandler = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };
  return (
    <nav
      className={`fixed top-0 left-0 ${
        isOpened
          ? "h-screen w-72 px-1 py-4 flex flex-col text-white transition-[width] bg-mainDarker"
          : " h-screen w-20 bg-mainDarker transition-[width]"
      }`}
    >
      <div className="relative flex flex-col items-start justify-center min-h-[40px] px-[16px]">
        <a
          href="/"
          className="flex justify-start items-center gap-5 text-white"
        >
          <img src={logo} alt="Logo" className="w-14 h-14 rounded-xl" />
          <h1
            className={`${
              isOpened
                ? "font-bold tracking-wider"
                : "hidden pointer-events-none"
            }`}
          >
            Laplace
          </h1>
        </a>
        <button
          onClick={openBarHandler}
          className="absolute top-4 -right-16 flex justify-center items-center rounded-[50%] w-10 h-10 bg-white cursor-pointer"
        >
          <img
            src={chevron}
            alt="Chevron"
            className={`${isOpened ? "w-10 h-10 stroke-main rotate-180" : "w-10 h-10 stroke-main"}`}
          />
        </button>
      </div>
      <div className="px-2 border-t-2 border-main">
        <ul className="relative list-none">
          <li className="relative">
            <a
              href="#dashboard"
              title="Dashboard"
              className={`flex justify-start items-center px-3 py-2 mx-2 ${
                isOpened
                  ? " text-lg rounded-xl h-14 transition-all no-underline text-black hover:w-full hover:no-underline hover:text-white hover:outline-none active:w-full active:no-underline active:text-white active:outline-none"
                  : "pointer-events-none"
              }`}
            >
              <img src={dashboard} alt="Dashboard" className="w-9 h-9" />
              <span
                className={`${
                  isOpened
                    ? "text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center"
                    : "hidden pointer-events-none"
                }`}
              >
                Dashboard
              </span>
            </a>
          </li>
          <li className="relative">
            <a
              href="#project"
              title="Project"
              className={`flex justify-start items-center px-3 py-2 mx-2 ${
                isOpened
                  ? " text-lg rounded-xl h-14 transition-all no-underline text-black hover:w-full hover:no-underline hover:text-white hover:outline-none active:w-full active:no-underline active:text-white active:outline-none"
                  : "pointer-events-none"
              }`}
            >
              <img src={analytics} alt="Analytics" className="w-9 h-9" />

              <span
                className={`${
                  isOpened
                    ? "text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center"
                    : "hidden pointer-events-none"
                }`}
              >
                Analytics
              </span>
            </a>
          </li>
          <li className="relative">
            <a
              href="#performance"
              title="Performance"
              className={`flex justify-start items-center px-3 py-2 mx-2 ${
                isOpened
                  ? " text-lg rounded-xl h-14 transition-all no-underline text-black hover:w-full hover:no-underline hover:text-white hover:outline-none active:w-full active:no-underline active:text-white active:outline-none"
                  : "pointer-events-none"
              }`}
            >
              <img src={performance} alt="Performance" className="w-9 h-9" />

              <span
                className={`${
                  isOpened
                    ? "text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center"
                    : "hidden pointer-events-none"
                }`}
              >
                Performance
              </span>
            </a>
          </li>
          <li className="relative">
            <a
              href="#funds"
              title="Funds"
              className={`flex justify-start items-center px-3 py-2 mx-2 ${
                isOpened
                  ? " text-lg rounded-xl h-14 transition-all no-underline text-black hover:w-full hover:no-underline hover:text-white hover:outline-none active:w-full active:no-underline active:text-white active:outline-none"
                  : "pointer-events-none"
              }`}
            >
              <img src={funds} alt="Funds" className="w-9 h-9" />

              <span
                className={`${
                  isOpened
                    ? "text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center"
                    : "hidden pointer-events-none"
                }`}
              >
                Funds
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center px-2 mt-auto">
        <div className="px-2 border-t-2 border-main">
          <ul className="relative list-none">
            <li className="relative">
              <a
                href="#help"
                title="Help"
                className={`flex justify-start items-center px-3 py-2 h-12 w-12 ${
                  isOpened
                    ? "text-lg rounded-xl transition-all no-underline text-black hover:w-full hover:no-underline hover:text-white hover:outline-none active:w-full active:no-underline active:text-white active:outline-none"
                    : "pointer-events-none"
                }`}
              >
                <img src={help} alt="Help" className="w-9 h-9" />

                <span
                  className={`${
                    isOpened
                      ? "text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center"
                      : "hidden pointer-events-none"
                  }`}
                >
                  Help
                </span>
              </a>
            </li>
            <li className="relative">
              <a
                href="#settings"
                title="Settings"
                className={`flex justify-start items-center px-3 py-2 h-12 w-12 ${
                  isOpened
                    ? "text-lg rounded-xl transition-all no-underline text-black hover:w-full hover:no-underline hover:text-white hover:outline-none active:w-full active:no-underline active:text-white active:outline-none"
                    : "pointer-events-none"
                }`}
              >
                <img src={settings} alt="Settings" className="w-9 h-9" />

                <span
                  className={`${
                    isOpened
                      ? "text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center"
                      : "hidden pointer-events-none"
                  }`}
                >
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-5 px-6 py-1">
          <div className="relative flex">
            <img
              className={`${isOpened ? "block w-12 h-12 cursor-pointer rounded-[50%] object-cover hover:scale-105 hover:transition-all" : "visible"}`}
              src={profile}
              alt="Profile"
            />
            
          </div>
          <div className="flex flex-col gap-1">
            <div className={`${isOpened ? "text-left text-base font-extrabold" : "hidden"}`}>Joe Doe</div>
            <div className={`${isOpened ? "text-left text-base font-extrabold" : "hidden"}`}>joe.doe@atheros.ai</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
