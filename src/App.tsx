import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useFetchUserData } from './hooks/useFetchUserData';

import TwitterIcon from '@mui/icons-material/Twitter';

import ChosenTweet from './components/FullTweet';
import MainSide from './components/MainSide';
import ProfileLikes from './components/ProfileLikes';
import ProfileMediaSection from './components/ProfileMediaSection';
import Tweets from './components/Tweets';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn/Layout';
import { fetchTopics } from './store/ducks/topics/actionCreators';
import { fetchTweets } from './store/ducks/tweets/actionCreators';
import { Centered } from './styles';

//TODO:
//1. create profile page;
//2 fix bug after registration redirect to home, but user is not confirmed
//3. Update user data backend/frontend

const App: React.FC = (): React.ReactElement => {
  const { isReady } = useFetchUserData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTopics());
  }, [dispatch]);

  if (!isReady) {
    return (
      <Centered>
        <TwitterIcon color='primary' sx={{ width: 50, height: 50 }} />
      </Centered>
    );
  }
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/home' element={<MainSide />} />
        <Route path='/profile' element={<Profile />}>
          <Route path='/profile/' element={<Tweets />} />
          <Route path='/profile/with_replies' element={<Tweets />} />
          <Route path='/profile/media' element={<ProfileMediaSection />} />
          <Route path='/profile/likes' element={<ProfileLikes />} />
        </Route>
        <Route path='/home/tweets/*' element={<ChosenTweet />} />
      </Route>
      <Route path='/signIn' element={<SignIn />} />
    </Routes>
  );
};

export default App;
