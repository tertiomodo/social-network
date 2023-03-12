import style from './profile-information.module.css';

const ProfileInformation = (props) => {
  return (
    <div className={style.profile}>
      <div className={style.profile_bg}></div>
      <div className={style.profile_info}>
        <img className={style.avatar} src={props.myInfo[0].avatar} alt="Nft Avatar" />
        <div className={style.user_descr}>
          <h1 className={style.name}>{props.myInfo[0].name}</h1>
          <ul className={style.list}>
            <li className={style.item}>Welcome to my page!</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default ProfileInformation;