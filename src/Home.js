import React from 'react'


import Carousel from "./Carousel";
import DataFilter from "./Filter";
import Product from "./Product";

function Home() {
    return (
        <div>
            <Carousel />
            <DataFilter />
            <Product />
        </div>
    )
}

export default Home
