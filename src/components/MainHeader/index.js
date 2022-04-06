import { NavLink } from "react-router-dom";
import { GiSpartanHelmet } from "react-icons/gi";
import classes from "./styles.module.scss";

const MainHeader = () => {
  return (
    <div className={classes.header}>
      <GiSpartanHelmet className={classes.icon}/>
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
