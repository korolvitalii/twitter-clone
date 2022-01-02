import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChosenTweet from './components/FullTweet';
import MainSide from './components/MainSide';
import TwitterIcon from '@mui/icons-material/Twitter';
import Home from './pages/Home';
import SignIn from './pages/SignIn/Layout';
import { fetchUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingStatus } from './store/types';
import { Centered } from './styles';
//TODO:
//1. how edit tweet UI
//2. Circular or Twitter Icon loader after login
//
const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  useEffect(() => {
    if (isReady && !isAuth) {
      navigate('/signin');
    } else {
      navigate('/home');
    }
  }, [isAuth, isReady]);

  if (!isReady) {
    return (
      <Centered>
        <TwitterIcon color='primary' sx={{ width: 50, height: 50 }} />
      </Centered>
    );
  }

  // console.log(`isReady - ${isReady}`, `isAuth - ${isAuth}`);
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/home' element={<MainSide />} />
        {/* <Route path='/home/search/' element={<TagElement />} /> */}
        <Route path='/home/tweets/*' element={<ChosenTweet />} />
      </Route>
      <Route path='/signIn' element={<SignIn />} />
    </Routes>
  );
};

export default App;

// qwerty122223
