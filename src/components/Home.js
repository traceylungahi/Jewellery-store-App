import React from 'react';
import Header from './Header';
import ProductHolder from './ProductHolder';

function Home({ product, deleteProduct }) {
    return (
        <div>
            <Header />
            <ProductHolder product={product} deleteProduct={deleteProduct} />
        </div >
    )
};

export default Home;