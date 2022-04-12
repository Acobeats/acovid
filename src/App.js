import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Store from './components/Store';


function App() {

  return (
    <div className="App">
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route exact path='/' element={<Landing />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/store' element={<Store />}/>
            </Routes>
            <Footer/>
    </div>
  );
}

export default App;
