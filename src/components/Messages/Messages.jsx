import style from './messages.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Messages = (props) => {
    
  const dialogsElements = props.state.dialogs.map(dialog => (<DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar} />));
  const messagesElements = props.state.messages.map(message => (<Message message={message.text} key={message.id} />));

  return (
    <div className={style.wrapper}>
      <div className={style.dialogs}>
        <h2 className={style.title}>Dialogs</h2>
        <ul className={style.list}>
          {dialogsElements}
        </ul>
      </div>
      <div className={style.messages}>
        {messagesElements}
      </div>
    </div>
  )
};

export default Messages;