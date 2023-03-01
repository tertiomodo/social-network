import './default-styles/normalize.css';
import './default-styles/App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/profile" element={<Profile state={props.state.profilePage} />} />
          <Route path="/messages/*" element={<Messages state={props.state.messagesPage} />}/>
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
