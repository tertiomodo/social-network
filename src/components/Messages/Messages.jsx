import React from 'react';
import style from './messages.module.css';
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Messages = (props) => {
  const newMessageElement = React.createRef();

  const sendMessage = () => {
    props.dispatch({type: 'SEND-MESSAGE'});
  }

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text});
  }
    
  const dialogsElements = props.messagesPage.dialogs.map(dialog => (<DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar} />));
  const messagesElements = props.messagesPage.messages.map(message => (<Message message={message.text} key={message.id} />));

  return (
    <div className={style.wrapper}>
      <div className={style.dialogs}>
        <h2 className={style.title}>Dialogs</h2>
        <ul className={style.list}>
          {dialogsElements}
        </ul>
      </div>
      <div className={style.messages}>
        <div className={style.messages_wrapper}>
          {messagesElements}
        </div>
        <div className={style.write_field_wrap}>
          <textarea onChange={onMessageChange} value={props.messagesPage.newMessageText} ref={newMessageElement} className={style.write_field} />
          <button onClick={sendMessage} className={style.send_button}>Send</button>
        </div>
      </div>
    </div>
  )
};

export default Messages;