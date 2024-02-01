import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import {Book} from './models/bookModel.js'
const app = express()

app.get('/',(req,res)=>{
    console.log(req)
    return res.status(200).send("welcome")
})

app.post('/books',async(req,res)=>{
    try{

        if(!req.body.title ||
            !req.body.author ||
            !req.body.publishYear){
                return res.status(400).send({message : 'Send all required fields'})
        }
        else {
            const newBook = {
                title : req.body.title,
                author : req.body.author,
                publishYear : req.body.publishYear,

            }
            const book = await Book.create(newBook)
            return res.status(201).send(book)
        }

    }catch(err){
        console.log(err.message)
        res.status(500).send({message : err.message})
    }
})


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