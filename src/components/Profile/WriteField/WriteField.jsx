import style from './write-field.module.css';

const WriteField = () => {
  return (
    <div className={style.field_wrap}>
      <h2 className={style.title}>What's new?</h2>
      <textarea className={style.write_fied}></textarea>
      <button className={style.button}>Add post</button>
    </div>
  );
};

export default WriteField;