import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import "./db.js"




const app = express()
app.use(express.json())
dotenv.config


app.listen(process.env.PORT, () => {
    console.log('Server is running');
});