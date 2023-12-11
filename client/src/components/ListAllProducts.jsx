import React from 'react';
import { Link } from 'react-router-dom';
const ListAllProducts = ({allProducts}) => {
   
  return (
    <div>
      
      <div className='container'>
            <h1>All Products :</h1>
            <div>
               { 
               allProducts.map((product,index) => (
                <div key={index}>
                    <Link to ={`${product._id}`}>{product.title}</Link>
                </div>
               ))}
            </div>
    </div>
    </div>
  )
}

export default ListAllProducts
