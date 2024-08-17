import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SingIn';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<SignIn></SignIn>}></Route>
          <Route path='/register' element={<SignUp></SignUp>}></Route>
          <Route path='/' element={<Home></Home>}></Route>

        </Routes>




        {/* <SignUp></SignUp> */}

      </div>
    </BrowserRouter>

  );
}

export default App;
