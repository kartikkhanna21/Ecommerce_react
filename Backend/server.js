import express from 'express';
import mongoose from 'mongoose';
import data from './data/data.js'; //we have to use .js in server side imports
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from "dotenv";

dotenv.config(); //npm install dotenv

const app= express();

app.use(express.json());//middleware which parses json data in body of request. for postman

app.use(express.urlencoded({extended:true}));//for postman

mongoose.connect('mongodb://localhost/amazon', { //1st parameter is url and 2nd is for options
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
});


app.get('/',(req,res)=>{
    res.send("server is ready");
})

/*app.get('/api/products/:id', (req,res)=>{

    const product = data.product.find((x)=>x.id === req.params.id);  //stores the product info for each product item
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message:"Product Not Found"});
    }
})*/

/*app.get('/api/products', (req,res)=>{
    res.send(data.product);
})*/

app.use('/api/users',userRouter);

app.use((err, req, res, next)=>{  //for getting errors related to schema
    res.status(500).send({message:err.message});
});

app.use('/api/products',productRouter);



app.listen(5000,()=>{
    console.log(`serve at http://localhost:5000}`);
})