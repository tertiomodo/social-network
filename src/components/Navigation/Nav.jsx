import style from './nav.module.css';
import { NavLink } from "react-router-dom";

const active = ({isActive}) => isActive ? `${style.active} ${style.link}` : style.link;

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink className={active} to="/profile">Profile</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={active} to="/messages">Messages</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={active} to="/news">News</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={active} to="/music">Music</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={active} to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;