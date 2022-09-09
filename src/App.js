import { Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';
import Bookmark from './components/Bookmark';

function App() {
  return (
    <div className="w-full container min-h-screen font-light text-white leading-tight mx-auto px-6 py-8 h-screen">
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
        <Route path='/bookmark' element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
