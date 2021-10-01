import express from 'express';
import User from '../models/userModel.js';
import data from '../data/data.js';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import {generateToken} from '../utils.js';

const userRouter=express.Router();
 
userRouter.get('/seed', expressAsyncHandler(async(req,res)=>{ //seed api  //Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
    await User.remove({}); //removes previous data and reenters data to avoid duplication
    const createdUsers= await User.insertMany(data.users); 
    res.send({createdUsers});

}))

userRouter.post('/signin',expressAsyncHandler(async(req,res)=>{
    const user= await User.findOne({email:req.body.email}); //user is verified from User schema which is part of database
    if(user){
        if(bcrypt.compareSync(req.body.password,user.password)){ //if passwords are matching bcrypt for comparing encrypted and decrypted passwords
            res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                isadmin:user.isadmin,
                token:generateToken(user),  //using jsonwebtoken
            });
            
        }
        else{
            res.status(404).send({message:"invalid password"});
        }
        return;
    }
    else{
        res.status(404).send({message:"invalid email or password"});
    }
 
}));

userRouter.post('/register',expressAsyncHandler(async(req,res)=>{
    const user = new User({  //created new user in User schema
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,8)
    })

    await user.save(); //saves user
}));

export default userRouter;