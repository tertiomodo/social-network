import ProfileInformation from './ProfileInformation/ProfileInformation';
import WriteField from './WriteField/WriteField';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
  return (
    <main>
      <ProfileInformation avatar={props.state.avatar} />
      <WriteField />
      <MyPosts state={props.state} />
    </main>
  );
};

export default Profile;