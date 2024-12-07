import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import "./db.js"
import { AdminRouter } from './routes/auth.js'

dotenv.config()

const app = express()
app.use(cors({
  origin: ['http://localhost:5173'], // Frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
  credentials: true, // If using cookies or authorization headers
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json())// when we pass data, this will convert it to the json format
app.use(cookieParser())
app.use('/auth',AdminRouter)



const PORT = process.env.PORT || 3001; // Use environment variable or fallback to 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});