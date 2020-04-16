import React from 'react';
import "./App.css";


// Import Components
import NavBar from "./layout/NavBar";
import Carousel from "./Carousel";
import DataFilter from "./Filter";
import Product from "./Product";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
     <NavBar />
     <Carousel />
     <DataFilter />
     <Product/>
     <Footer/>
    </div>
  );
}

export default App;
