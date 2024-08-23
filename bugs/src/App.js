import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Counter from './Pages/Couter';

function App() {

  return (

    <div className="App">
      <Counter></Counter>
    </div>


  );
}

export default App;
