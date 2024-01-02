import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio  from './pages/Portfolio'
import Education from './pages/Education'
import Skills from './pages/Skills';
import Footer from './components/Footer';

function App() {

  return (
<div className='App'>
    <Navbar/>
    <Home/>
    <Education/>
    <Portfolio/>
    <Skills/>
    <Footer/>
</div> 
  )
}

export default App
