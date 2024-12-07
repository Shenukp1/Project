import express from 'express'
import bcrypt from 'bcrypt'
import { Admin } from './models/Admin.js'
import './db.js'

// TODO: must run this function to create an admin. 


async function AdminAccount(){
    try {
        const adminCount = await Admin.countDocuments() // counts the records inside the admin
        if(adminCount === 0){                     // generating a admin because we always need one admin
            const hashPassword = await bcrypt.hash('adminpassword',10) // 10 is the salt that is added to the password
            const newAdmin = new Admin({
                username: 'admin',
                password: hashPassword
            })
            await newAdmin.save()
            console.log('Account Created!')
        } else {
            console.log('Account Already Created')
        }
    } catch (err) {

        console.log('Error: '+ err)
        
    }
}

AdminAccount()