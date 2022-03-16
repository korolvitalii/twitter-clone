import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useFetchUserData } from './hooks/useFetchUserData';

import TwitterIcon from '@mui/icons-material/Twitter';

import ChosenTweet from './components/FullTweet';
import ProfileLikes from './components/ProfileLikes';
import ProfileMediaSection from './components/ProfileMediaSection';

import Tweets from './components/Tweets';
import SignIn from './pages/SignIn/Layout';
import { Centered } from './styles';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { useSelector } from 'react-redux';

import Main from './components/Main';
import { selectUserTweets } from './store/ducks/user/selectors';

const ProfilePage = React.lazy(() => import('./pages/Profile'));
const HomePage = React.lazy(() => import('./pages/Home'));

const App: React.FC = () => {
  const { isReady } = useFetchUserData();
  const userTweets = useSelector(selectUserTweets);

  if (!isReady) {
    return (
      <Centered>
        <TwitterIcon color='primary' sx={{ width: 50, height: 50 }} />
      </Centered>
    );
  }

  return (
    <Routes>
      <Route
        path='/'
        element={
          <React.Suspense
            fallback={
              <Centered>
                <CircularProgress />
              </Centered>
            }>
            <HomePage />
          </React.Suspense>
        }>
        <Route path='/home' element={<Main />} />

        <Route
          path='/profile/:id'
          element={
            <React.Suspense
              fallback={
                <Centered>
                  <CircularProgress />
                </Centered>
              }>
              <ProfilePage />
            </React.Suspense>
          }>
          <Route path='/profile/:id' element={<Tweets tweets={userTweets} />} />
          <Route path='/profile/:id/with_replies' element={<Tweets tweets={userTweets} />} />
          <Route path='/profile/:id/media' element={<ProfileMediaSection />} />
          <Route path='/profile/:id/likes' element={<ProfileLikes />} />
        </Route>
        <Route path='/home/tweets/*' element={<ChosenTweet />} />
      </Route>
      <Route path='/signIn' element={<SignIn />} />
    </Routes>
  );
};

export default App;
