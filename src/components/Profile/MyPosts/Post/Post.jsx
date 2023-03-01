import style from './post.module.css';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img className={style.avatar} src={props.avatar} alt="Profile pic" />
      <p className={style.text}>{props.message}</p>
      <p>Like {props.likes}</p>
    </div>
  );
};

export default Post;