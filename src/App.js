import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
function App() {
  return (
      <>
    <div className='app'>
        <Header>  </Header> 
        <div className='container'>
        <BrowserRouter>    
          <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          </Routes> 
          </BrowserRouter>
          </div>
          <Footer/>
          </div>
          </>
  );
}

export default App;
