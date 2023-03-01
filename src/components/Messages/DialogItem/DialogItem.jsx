import style from '../messages.module.css';
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  const active = ({isActive}) => isActive ? `${style.active} ${style.link}` : style.link;
  const path = "/messages/" + props.id;

  return (
    <li className={style.item}>
      <NavLink className={active} to={path}>
        <img className={style.dialog_avatar} src={props.avatar} alt="" />
        {props.name}
      </NavLink>
    </li>
  )
};

export default DialogsItem;