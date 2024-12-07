import express from 'express'
import {Admin} from '../models/Admin.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post('/login',async (req,res) => { //req(request) is from the frontend, and res(response) is a response back to the frontend
    const {username,password,role} = req.body;
    

    if(role === 'admin'){           //logic for the admin
        const admin = await Admin.findOne({ username: username })// finds admin in the database based on the username given

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
    } else if(role === 'student') { 
        return res.json({ message: "Student logic not implemented yet" });
    } else {                        // role is not a valid role 
        return res.json({ message: "Invalid role" });
    }
})

export {router as AdminRouter}