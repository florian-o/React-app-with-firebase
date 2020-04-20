import React,{useContext} from 'react';
import logo from "../src/img/tel.png";
import logo2 from "../src/img/tel2.png";

// Import des data
import {Context} from "./context";

function Product() {
    const [state] = useContext(Context);
    
    console.log(state);       

    return (
        
    <div className="results">

    {state.map((item) =>{               

       return(
        <div>
      <img src={item.products.img}/>   
      <h2>{item.products.title}</h2> 
      <span>{item.products.price} $</span>  
      <p>*{item.products.info}*</p>

      </div>

       )
    })} 
    </div>
   

    )
}

export default Product
