import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from "./Components/Categories/Categories";

function App() {
  return (
    <BrowserRouter>
      <Categories/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Countries/:type' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;