import React from 'react';
import style from './write-field.module.css';

const WriteField = (props) => {
  const newPostElement = React.createRef();

  const createPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newPostText: text});
  };

  return (
    <div className={style.field_wrap}>
      <h2 className={style.title}>What's new?</h2>
      <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} className={style.write_field} />
      <button onClick={createPost} className={style.button}>Add post</button>
    </div>
  );
};

export default WriteField;