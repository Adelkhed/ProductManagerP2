import React from 'react'
import axios from 'axios'
import FormProduct from './FormProduct';


const CreateNewProduct = ({addProductToList}) => {
  const handleSubmit =(newProduct) => {

    axios.post("http://localhost:5000/api/products/newProduct",newProduct)
      .then(res => addProductToList(res.data.newProduct) )
      .catch(err => console.log(err))
    }
    
 
      
  return (
    <FormProduct onSubmit={handleSubmit} initProduct={{}}/>
  )
}

export default CreateNewProduct;
