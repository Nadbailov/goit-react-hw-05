import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const getLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <div className={s.navigation}>
      <NavLink to="/" className={getLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getLinkClass}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
