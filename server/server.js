const express = require('express');
const cors= require('cors');
const app = express();

app.use(cors(),
        express.json(),
        
        express.urlencoded({ extended: true })
        
        )
       

require("./config/mongoose.config")

require("./routes/product.route")(app)

app.listen(5000,() => console.log("the server is fired up on port 5000 "))