import express from 'express'
import booksRoute from './routes/booksRoutes.js';
import 'dotenv/config'
import mongoose from 'mongoose'
const app = express()

//middelware
app.use(express.json())

app.use('/books', booksRoute);


mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("App connected to db")
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(err)
})