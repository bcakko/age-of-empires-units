import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.scss";

const MainHeader = () => {
  return (
    <div className={classes.header}>
      <h1>Age of Empires II Units</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/units"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Units
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
