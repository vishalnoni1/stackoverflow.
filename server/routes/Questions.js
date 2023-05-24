import express from 'express'
import auth from "../middlewares/Auth.js";
import {AskQuestion,getAllQuestions,voteQuestion,deleteQuestion} from '../controllers/Question.js'
//import
const router = express.Router()  
router.post('/Ask',auth, AskQuestion)
router.get('/get',getAllQuestions)
router.delete('/delete/:id', auth,deleteQuestion)
router.patch('/vote/:id',auth,voteQuestion)
export default router