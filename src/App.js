import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from "./Components/Categories/Categories";
import Countries from './Pages/Countries/Countries';
import Search from './Components/Search/Search';
import Recipe from './Pages/Recipe/Recipe';

function App() {
  return (
    <BrowserRouter>
      <Categories/>
      <Search/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:type' element={<Countries />} />
        <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;