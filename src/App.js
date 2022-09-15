import { Route, Routes } from 'react-router-dom';
// import LogIn from './components/LogIn'
// import SignUp from './components/SignUp'
import Home from './components/Home';
import Movies from './components/Movies';
import Series from './components/Series';
import Bookmark from './components/Bookmark';
import { createContext } from 'react';
import { useState, useMemo } from 'react';
import data from './data.json';


export const UserContext = createContext({
  movies: [],
  setMovies: () => {}
});

function App() {
  const [movies, setMovies] = useState(data);
  const value = useMemo(
    () => ({ movies, setMovies }), 
    [movies]
  );
  return (
    <UserContext.Provider value={value}>
      <div className="w-full min-h-screen font-light text-white leading-tight mx-auto px-6 py-8 h-screen sm:p-10">
        <Routes base>
          {/* <Route path='/' element={<LogIn />} />
          <Route path='/sign-up' element={<SignUp />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/bookmark' element={<Bookmark />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
