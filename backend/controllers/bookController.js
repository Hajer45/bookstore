import {Book} from '../models/bookModel.js'


export const createBook = async(req,res)=>{
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
}

export const getAllBooks = async(req,res)=>{
    try{
        const books = await Book.find()
        return res.status(201).send({
        count : books.length,
        data : books,
    })

    }catch(err){
        console.log(err.message)
        res.status(500).send({message : err.message})
    }
}

export const getBook = async(req,res)=>{
    try{
        const {id} = req.params
        const book = await Book.findById(id)
        if(!book){
            return res.status(404).json({message : "Book not found"})
        }
        else{
        return res.status(201).send(book)
        }

    }catch(err){
        console.log(err.message)
        res.status(500).send({message : err.message})
    }
}

export const updateBook = async(req,res)=>{
    try{

        if(!req.body.title ||
            !req.body.author ||
            !req.body.publishYear){
                return res.status(400).send({message : 'Send all required fields'})
        }
        else {
            const {id} = req.params
            const result = await Book.findByIdAndUpdate(id,req.body)
            if(!result){
                return res.status(404).json({message : "Book not found"})
            }
            else{
                return res.status(201).send({message : "Book updated succesfully"})
            }
        }

    }catch(err){
        console.log(err.message)
        res.status(500).send({message : err.message})
    }
}

export const deleteBook = async(req,res)=>{
    try{
            const {id} = req.params
            const result = await Book.findByIdAndDelete(id)
            if(!result){
                return res.status(404).json({message : "Book not found"})
            }
            else{
                return res.status(201).send({message : "Book deleted succesfully"})
            }

    }catch(err){
        console.log(err.message)
        res.status(500).send({message : err.message})
    }
}

