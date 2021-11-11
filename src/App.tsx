import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
