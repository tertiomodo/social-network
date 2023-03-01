import style from '../messages.module.css';

const Message = (props) => {
  return (
    <div className={style.message}>
      <div className={style.person}>
        <img className={style.avatar} src="https://gateway.fxhash.xyz/ipfs/QmdUBkPicm7zAdXvyEYWv4BbrnEC3LeFr9dCogqxMTEPjT" alt="Avatar" />
        <p className={style.name} id={props.id}>User Name</p>
      </div>
      <p className={style.text}>{props.message}</p>
    </div>
  )
};

export default Message;