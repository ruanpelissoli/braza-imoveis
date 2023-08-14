import logo from "../assets/logo.svg";
import chevron from "../assets/chevron.svg";
import profile from "../assets/profile.jpg";
import settings from "../assets/settings.svg";

const SideBar: React.FC = () => {
    return <nav className="sticky top-0 left-0 h-screen w-72 px-1 py-4 flex flex-col text-white transition-[width]">
    <div className="relative flex flex-col items-start justify-center min-h-[40px] px-[16px]">
      <a href="/" className="flex justify-start items-center gap-5 text-white">
        <img src={logo} alt="Logo" className="w-14 h-14 rounded-xl" />
        <h1 className="hide">Laplace</h1>
      </a>
      <div className="absolute top-4 -right-16 flex justify-center items-center rounded-[50%] w-10 h-10 bg-white cursor-pointer shadow-cardBox">
        <img src={chevron} alt="Chevron" className="rotate-180 w-10 h-10 stroke-main"/>
      </div>
    </div>
    <div className="sidebar-links">
        <ul>
          <li>
            <a href="#dashboard" title="Dashboard" className="relative">
              <img src="assets/dashboard.svg" alt="Dashboard" />
              <span className="link hide">Dashboard</span>
              <span className="invisible text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#project" title="Project" className="relative">
              <img src="assets/analytics.svg" alt="Analytics" />
              <span className="link hide">Analytics</span>
              <span className="invisible text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#performance" title="Performance" className="relative">
              <img src="assets/performance.svg" alt="Performance" />
              <span className="link hide">Performance</span>
              <span className="invisible text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center">Performance</span>
            </a>
          </li>
          <li>
            <a href="#funds" title="Funds" className="relative">
              <img src="assets/funds.svg" alt="Funds" />
              <span className="link hide">Funds</span>
              <span className="invisible text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center">Funds</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center px-2 mt-auto">
        <div className="sidebar-links">
          <ul>
            <li>
              <a href="#help" title="Help" className="relative">
               <img src="assets/help.svg" alt="Help" />
                <span className="link hide">Help</span>
                <span className="invisible text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center">Help</span>
              </a>
            </li>
            <li>
              <a href="#settings" title="Settings" className="relative">
                <img src={settings} alt="Settings" />
                <span className="link hide">Settings</span>
                <span className="invisible text-white rounded-md px-1.5 py-3 absolute z-40 left-20 text-center">Settings</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-5 px-6 py-1">
          <div className="relative flex">
            <img className="block w-12 h-12 cursor-pointer rounded-[50%] object-cover hover:scale-105 hover:transition-all" src={profile} alt="Profile" />
            <div className="absolute w-3 h-3 rounded-[50%] bottom-1 right-1"></div>
          </div>
          <div className="avatar__name hide">
              <div className="user-name">Joe Doe</div>
              <div className="email">joe.doe@atheros.ai</div>
          </div>
        </div>
      </div>
  </nav>
}

export default SideBar;