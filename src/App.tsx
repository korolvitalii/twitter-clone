import './App.css';
import React from 'react';
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
import { useSelector } from 'react-redux';
import { selectLoadingStatus } from './store/ducks/appication/selectors';

const ProfilePage = React.lazy(() => import('./pages/Profile'));
const MainSide = React.lazy(() => import('./components/MainSide'));
const HomePage = React.lazy(() => import('./pages/Home'));

const App: React.FC = () => {
  const { isReady } = useFetchUserData();

  const localLoadingStatus = useSelector(selectLoadingStatus);

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
        <Route
          path='/home'
          element={
            <React.Suspense
              fallback={
                <Centered>
                  <CircularProgress />
                </Centered>
              }>
              <MainSide />
            </React.Suspense>
          }
        />
        <Route
          path='/profile'
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
