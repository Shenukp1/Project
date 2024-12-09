import express from 'express'
import {Admin} from '../models/Admin.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/login',async (req,res) => { //req(request) is from the frontend, and res(response) is a response back to the frontend
    console.log("well hello")
    console.log('Login request received:', req.body);// this shows: Login request received: { username: 'admin', password: 'hello', role: 'admin' }
    const {username,password,role} = req.body;
    

    if(role === 'admin'){           //logic for the admin
        const admin = await Admin.findOne({username})// finds admin in the database based on the username given

        if(!admin){                 //when admin is not registered
            return res.json({message: "admin not registered"});
        }

        //else the admin exist, so lets check the password
        const validPassword = await bcrypt.compare(password,admin.password)

        if(!validPassword){                 //when password not valid
            return res.json({message: "password not valid"});
        }

        
        const token = jwt.sign({username: admin.username, role:'admin'},process.env.AdminKey)// if password was valid, we will generate a token
        res.cookie('token',token,{httpOnly:true, secure:true})                               // storing token inside cookie - httpOnly:true means that you cannot access cookie through only javascript
        return res.json({login:true, role:'admin'});
    } else if(role === 'customer') { 
        return res.json({ message: "customer logic not implemented yet" });
    }else if(role === 'employee') {
        return res.json({ message: "customer logic not implemented yet" });
    } else {                        // role is not a valid role 
        return res.json({ message: "Invalid role" });
    }
})

//this is to verify the admin, so that not everyone can "addVehicle"
const verifyAdmin = (req,res,next) => {
    const token = req.cookies.token; 
    if(!token){
        res.json({message: "Invalid Admin"})
    } else {
        jwt.verify(token,process.env.AdminKey, (err,decode)=>{
            if(err){ // if token was not valid 
                res.json({message: "Invalid token"})
            } else {
                req.username = decode.username;
                req.role = decode.role;
                next() // goes back to where it was
            }
        })
    }
}



export {router as AdminRouter, verifyAdmin}