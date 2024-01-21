import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import DarkModeCarousel from './components/carousel';
import { ChakraProvider, Divider } from '@chakra-ui/react'
import Shoes from './components/Shoes';
import Footer from './components/Footer';
import Electronics from './components/Electronics';

function App() {
  return (
    <div className="App">
    <ChakraProvider>
      <Navbar/>
      <DarkModeCarousel/>
      <Shoes/>
      <Divider borderColor='black.800'/>
      <Electronics/>
      <Divider borderColor='black.800'/>
      <Footer/>
    </ChakraProvider>
    </div>
  );
}

export default App;
