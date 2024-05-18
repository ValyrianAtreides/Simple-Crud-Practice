const express=require('express');
const mongoose=require('mongoose');
const productRoute=require('./routes/product.route.js');
const app=express();


app.use(express.json()); //middlleware


app.use("/api/products", productRoute)

app.get('/',(req,res) => {
  res.send("Server running")
});





mongoose.connect("mongodb+srv://berkay:NPhZkCaFFCIgPIUn@backenddeneme.zbp2r0e.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDeneme")
  .then(()=>{
    console.log('conncected');
    app.listen(3000, ()=> {
      console.log("server is running on port 3000");
    });

  });