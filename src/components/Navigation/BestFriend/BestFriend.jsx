import style from '../nav.module.css';
import { NavLink } from 'react-router-dom';

const BestFriend = (props) => {
  return (
    <li>
      <NavLink>
        <img className={style.avatar} src={props.avatar} alt={props.name} />
        <p className={style.name}>{props.name}</p>
      </NavLink>
    </li>
  );
};

export default BestFriend;