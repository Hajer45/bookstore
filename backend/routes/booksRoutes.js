import express from 'express'
import { createBook ,
    getAllBooks,
} from '../controllers/bookController.js';


const router = express.Router()

// POST a new book
router.post('/',  createBook)
// get all books 
router.get('/books',  getAllBooks)







export default router;