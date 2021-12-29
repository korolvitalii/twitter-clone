import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChosenTweet from './components/FullTweet';
import MainSide from './components/MainSide';
// import { TagElement } from './components/TagElement';
import Home from './pages/Home';
import SignIn from './pages/SignIn/Layout';
import { AuthApi } from './services/api/AuthApi';
import { setUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth } from './store/ducks/user/selectors';

//TODO:
//1. Add registration + form registration
//2. Check notification after login/registration
//

function App() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.authMe();
      dispatch(setUserData(data));
      // navigate('/home');
      debugger;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/home' element={<MainSide />} />
          {/* <Route path='/home/search/' element={<TagElement />} /> */}
          <Route path='/home/tweets/*' element={<ChosenTweet />} />
        </Route>
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

// qwerty122223
