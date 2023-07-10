import { NavLink } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  return (
    <header className='flex justify-center items-center p-2.5 bg-black text-white'>
      <nav>
        <ul className='flex m-0 p-0 list-none'>
          <li className='py-1.5 px-5'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-mainVeryLighter' : 'hover:text-mainVeryLighter'
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
