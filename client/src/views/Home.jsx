import React, { useState, useEffect } from "react"
import axios from "axios"
import ListAllProducts from "../components/ListAllProducts"
import CreateNewProduct from "../components/CreateNewProduct"

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/products/")
            .then((res) => {
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
    }, [])

    const addProductToList = (newProduct) => setProducts((prev) => [...prev, newProduct])

  return (
    <div>
        <CreateNewProduct addProductToList={addProductToList} />
        <ListAllProducts allProducts={products} />
    </div>
  )
}

export default Home