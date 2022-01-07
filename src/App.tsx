import TwitterIcon from '@mui/icons-material/Twitter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ChosenTweet from './components/FullTweet';
import MainSide from './components/MainSide';
import { useFetchUserData } from './hooks/useFetchUserData';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn/Layout';
import { fetchTopics } from './store/ducks/topics/actionCreators';
import { fetchTweets } from './store/ducks/tweets/actionCreators';
import { Centered } from './styles';

//TODO:
//1. create profile page;
//2 fix bug after registration redirect to home, but user is not confirmed
//3.

const App = () => {
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
  console.log();
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/home' element={<MainSide />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/home/tweets/*' element={<ChosenTweet />} />
      </Route>
      <Route path='/signIn' element={<SignIn />} />
    </Routes>
  );
};

export default App;
