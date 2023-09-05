import classes from "./Header.module.scss";
import {NavLink} from "react-router-dom";

export const Header = () => {
  const getActiveClass = ({isActive}: { isActive: boolean }): string => isActive ? `${classes.active} ${classes.link}` : classes.link;

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <NavLink to="/" className={getActiveClass}>Home</NavLink>
        <NavLink to="/list" className={getActiveClass}>List</NavLink>
      </div>
    </header>
  );
}
