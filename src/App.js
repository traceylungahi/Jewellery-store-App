import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Contacts from './components/Contacts';
import ProductHolder from './components/ProductHolder';

function App() {
  const url = "https://fakestoreapi.com/products/category/jewelery";
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
            path="/"
            element={<Home product={product} />}
        />
          <Route path="/about" element={<About />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/productholder" element={<ProductHolder />} />
      </Routes>
    </div>
  );
}

export default App;
