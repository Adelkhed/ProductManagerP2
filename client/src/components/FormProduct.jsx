import React, { useState,useEffect } from 'react'

import '../components/ProductForms.css'

const FormProduct = ({onSubmit, initProduct}) => {

    const [title,setTitle]=useState("")
    const [price,setPrice]=useState("")
    const [description,setDescription]=useState("")


    useEffect(() => {
        setTitle(initProduct.title)
        setPrice(initProduct.price)
        setDescription(initProduct.description)
    },[initProduct])

    const handleSubmit = (e) => {
        e.preventDefault();
       onSubmit({title,price,description});
        setTitle("");
        setPrice("");
        setDescription("");
    }
    return (
    <div className='container'>
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <label>Price</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <label>Description</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button className='btn'  type="submit">Create</button>
        </form>

        
    
    </div>
  )
}

export default FormProduct
