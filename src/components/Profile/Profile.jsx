import ProfileInformation from './ProfileInformation/ProfileInformation';
import WriteField from './WriteField/WriteField';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <main>
      <ProfileInformation myInfo={props.profilePage.myInfo} />
      <WriteField dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
      <MyPosts profilePage={props.profilePage} />
    </main>
  );
};

export default Profile;