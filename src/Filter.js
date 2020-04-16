import React from 'react';



export default function DataFilter() {

        
    return (
        <section className="filter-container">
         
           <form action="" className="filter-form">
               {/* select Price */}
               <div className="form-group">
               <label htmlFor="type">Price</label>
               <select 
               name="type" 
               id="type"                
               className="form-control"             
               >
               <option value="0">Select Brand:</option>
                <option value="1">Iphone</option>
                <option value="2">Samsung</option>
                <option value="3">Huawei</option>
                <option value="4">Nokia</option>
                <option value="5">Wiko</option>                           
               </select>
               </div>
               {/* End Select  */}
                {/* Color  */}
                <div className="form-group">
               <label htmlFor="color">Color</label>               
               <select 
               name="capacity" 
               id="capacity"               
               className="form-control"               
               >
                <option value="1">Red</option>
                <option value="2">Blue</option>
                <option value="3">Dark</option>
                <option value="4">Pink</option>
                <option value="5">White</option> 
               </select>
               </div>
               {/* End Samsung */}
               {/* Price */}
               <div className="form-group">
                   <label htmlFor="price">
                       Price $
                   </label>
                   <input type="range" name="price" min="1"
                   max="1050"  id="price"  className="form-control"/>
               </div>
               {/* end Price */}
              
           </form>
        </section>
    )
}
