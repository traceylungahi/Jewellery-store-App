import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import ProductHolder from './ProductHolder';

function Home({ product }) {
    return (
        <div>
            <NavBar />
            <Header />
            <ProductHolder product={product} />
        </div >
    )
};

export default Home;