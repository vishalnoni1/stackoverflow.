import express from "express";
import {signup, login} from '../controllers/Auth.js'
import{getAllUsers,updateProfile} from '../controllers/users.js'
import auth from './../middlewares/Auth.js'

const router = express.Router();
router.post('/signup', signup)
router.post('/login', login)
router.get('/getAllUsers',getAllUsers)
router.patch('/update/:id', auth, updateProfile)
export default router

