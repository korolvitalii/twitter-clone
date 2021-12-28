import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChosenTweet from './components/FullTweet';
import MainSide from './components/MainSide';
// import { TagElement } from './components/TagElement';
import Home from './pages/Home';
import SignIn from './pages/SignIn/SignInPage';
import { authMe } from './store/ducks/user/actionCreators';
import { selectIsAuth } from './store/ducks/user/selectors';
import { fetchUsers } from './store/ducks/users/actionCreators';

//TODO:
//1. Add registration + form registration

function App() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authMe());
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
    dispatch(fetchUsers());
  }, [isAuth, dispatch, navigate]);

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
