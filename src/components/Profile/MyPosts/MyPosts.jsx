import style from './my-posts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map(post => (<Post message={post.message} likes={post.likes} key={post.id} avatar={props.profilePage.myInfo[0].avatar} />));

  return (
    <div className={style.post_wrap}>
      <h2 className={style.title}>My posts</h2>
      {postsElements}
    </div>
  );
};

export default MyPosts;