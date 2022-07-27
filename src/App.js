import React from 'react';
import './App.css';
import About from './components/NavBar';
import Contacts from './components/Contacts';
import ProductHolder from './components/ProductHolder';

function App() {
  return (
    <div className="App">
      <About />
      <Contacts />
      <ProductHolder />
    </div>
  );
}

export default App;
