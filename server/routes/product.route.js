const ProductController= require("../controllers/product.controller");

module.exports = app =>{

    app.get("/products",ProductController.findAllProducts);
    
    app.get("/products/:id",ProductController.findOneProduct);
    app.post("/products",ProductController.createNewProduct);
    app.patch("/products/:id",ProductController.updateProduct);
    app.delete("/products/:id",ProductController.deleteProduct);

}