import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import AddProduct from './components/AddProduct';
import ProductHolder from './components/ProductHolder';

function App() {
  const url = "https://jewellery-store-api.herokuapp.com/products";
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setProduct(data));
  }, []);

  function deleteProduct(id) {
    const updatedProducts = product.filter((prd) => prd.id !== id);
    setProduct(updatedProducts);
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
            path="/"
            element={<Home product={product} deleteProduct={deleteProduct}/>}
        />
          <Route path="/about" element={<About />} />
          <Route path="/productholder" element={<ProductHolder  />} />
          <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
