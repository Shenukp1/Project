import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import "./db.js"
import { AdminRouter } from './routes/auth.js'



const app = express()
app.use(express.json())// when we pass data, this will convert it to the json format
app.use(cors({ origin: 'http://localhost:5174', credentials: true }));
app.use(cookieParser())
dotenv.config()
app.use('/auth',AdminRouter)

app.listen(3001, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});