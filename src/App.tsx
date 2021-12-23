import { Route, Routes } from 'react-router-dom';
import ChosenTweet from './components/FullTweet';
import MainSide from './components/MainSide';
// import { TagElement } from './components/TagElement';
import Home from './pages/Home';
import SignIn from './pages/SignIn/SignInPage';

function App() {
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
