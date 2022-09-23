import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Card from './components/Card/Card';
import MovieDetail from './components/MovieDetail/MovieDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route path="/*" element={<h1>Error Page</h1>}></Route>

      </Routes>
    </Router>
  )
}

export default App