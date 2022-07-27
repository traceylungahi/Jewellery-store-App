import React from 'react'
import Header from './Header'
import ProductHolder from './ProductHolder'

function Home({ product }) {
    return (
        <div>
            <Header />
            <ProductHolder product={product} />
        </div >
    )
};

export default Home;