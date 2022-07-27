import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from './components/About';
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
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/productholder"
          element={<ProductHolder products={product} />}
        />
      </Routes>
    </div>
  );
}

export default App;
