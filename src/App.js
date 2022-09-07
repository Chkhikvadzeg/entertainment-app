import { Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="w-screen min-h-screen font-light bg-darkBlue mx-auto px-6">
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        {/* <img src={logo} alt="Logo" />
        <div className="log-in">
          <h1 className='log-in-heading'>Login</h1>
          <div className="input-container">
            <Input type="email" placeholder="Email address"></Input>
            <Input type="password" placeholder="Password"></Input>
          </div>
        </div> */}
      </Routes>
    </div>
  );
}

export default App;
