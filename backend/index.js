import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
const app = express()

app.get('/',(req,res)=>{
    console.log(req)
    return res.status(200).send("welcome")
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