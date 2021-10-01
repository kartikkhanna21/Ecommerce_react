import express from 'express';
import Products from '../models/productModel.js';
import data from '../data/data.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter=express.Router();
 
//3 api's for each url

productRouter.get('/', expressAsyncHandler(async(req,res)=>{ 
    const products = await Products.find({});
    res.send(products);


}));


productRouter.get('/seed', expressAsyncHandler(async(req,res)=>{ //seed api  //Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
    await Products.remove({});
    const createdProducts= await Products.insertMany(data.product); 
    res.send({createdProducts}); //sending data to particular url in this case /api/products/seed

}))

productRouter.get('/:id', expressAsyncHandler(async(req,res)=>{ 
    const products = await Products.findById(req.params.id);
    if(products){
        res.send(products);
    }
    else{
        res.status(404).send({message:"Product Not Found"});
    }


}));

export default productRouter;