import React from 'react';
import Navabr from './Components/Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
    <Router>
    <Navabr/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </Router>

    </div>
  );
}

 export default App;