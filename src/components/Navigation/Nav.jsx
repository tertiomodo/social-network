import style from './nav.module.css';
import { NavLink } from 'react-router-dom';
import BestFriend from './BestFriend/BestFriend';

const active = ({isActive}) => isActive ? `${style.active} ${style.link}` : style.link;

const Nav = (props) => {

  const bestFrend = props.sidebar.bestFriends.map(friend => (<BestFriend name={friend.name} avatar={friend.avatar} key={friend.id} />));

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
      <p className={style.friends_title}>Best friends</p>
      <ul className={style.best_friend}>
        {bestFrend}
      </ul>
    </nav>
  );
};

export default Nav;