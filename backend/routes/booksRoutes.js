import express from 'express'
import { createBook ,
    getAllBooks,
    getBook,
    updateBook,
    deleteBook,

} from '../controllers/bookController.js';


const router = express.Router()

// POST a new book
router.post('/',  createBook)
// get all books 
router.get('/',  getAllBooks)
// get book by id
router.get('/:id',getBook)
// update a book by id 
router.put('/:id',updateBook)
// delete a book by id 
router.delete('/:id',deleteBook)






export default router;