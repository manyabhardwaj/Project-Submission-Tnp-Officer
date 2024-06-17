import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BodyContext from './components/Instructor';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';


function App() {
  return (
  <>
   <Navbar/>
  <BodyContext/>
  <Testimonial/>
  <Footer/>

   </>
  )
}



export default App;
