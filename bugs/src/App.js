import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Counter from './Pages/Couter';
import DataFetcher from './Pages/DataFetcher';
import Navi from './Pages/Navi';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/counter' element={<Counter></Counter>}></Route>
          <Route path='/dataFetcher' element={<DataFetcher></DataFetcher>}></Route>
          <Route path='/' element={<Navi></Navi>}></Route>

        </Routes>




        {/* <SignUp></SignUp> */}

      </div>
    </BrowserRouter>




  );
}

export default App;
