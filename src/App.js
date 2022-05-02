import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from "./Components/Categories/Categories";
import Countries from './Pages/Countries/Countries';

function App() {
  return (
    <BrowserRouter>
      <Categories/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries/:type' element={<Countries />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;