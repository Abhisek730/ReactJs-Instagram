import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SingIn';
import Home from './Pages/Home';
import { useState } from 'react';
import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';

function App() {


  const [isLogin,setIsLogin] = useState(!!localStorage.getItem("token"))
  console.log(isLogin);

  console.log(isLogin ? "User is logged in ": "Plese login");

   return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={isLogin?<Navigate to={"/"}></Navigate>: <SignIn setIsLogin={setIsLogin}></SignIn>}></Route>
          <Route path='/register' element={<SignUp></SignUp>}></Route>
          <Route path='/' element={isLogin ? <Home setIsLogin={setIsLogin}></Home> : <Navigate to={"/login"}></Navigate>}></Route>

        </Routes>




        {/* <SignUp></SignUp> */}

      </div>
    </BrowserRouter>

  );
}

export default App;
