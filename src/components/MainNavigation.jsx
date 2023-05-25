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
              to="/cadastro"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Cadastrar Imóvel
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
