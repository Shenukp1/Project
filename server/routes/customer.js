import express from 'express'
import {Customer} from '../models/Customer.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

router.post('/register', async (req,res)=> {
    
    try {
        const { username, password, licenseNumber, InsuranceNumber, age } = req.body;
        
        //first we check if the student alread exist
        const customer  = await Customer.findOne({licenseNumber})
        
        if(customer){
            return res.json({message: "Already registered"})
        }

        const hashPassword = await bcrypt.hash(password,10)// making a hash password
        const newCustomer = new Customer ({                // creating a customer based on front end inputs
            username,
            password: hashPassword,
            licenseNumber,
            InsuranceNumber,
            age                    
        })

        await newCustomer.save()                         

        return res.json({registered: true})                //var to check if student was created
    } catch (err) {
        return res.json({message:  "Error Registering Customer"})
    }
})

export {router as customerRouter}