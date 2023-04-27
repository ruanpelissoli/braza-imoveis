import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/imoveis"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Imóveis
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/condominios"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Condomínios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Favoritos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Suporte
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
