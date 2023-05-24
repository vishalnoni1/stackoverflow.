import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import Users from '../models/auth.js'

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const existinguser = await Users.findOne({ email });
        if(existinguser){
            return res.status(404).json({ message: "User already Exist."})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await Users.create({ name, email, password: hashedPassword }) 
        const token = jwt.sign({ email: newUser.email, id:newUser._id}, process.env.JWT_SECRET , { expiresIn: '1h'});
        res.status(200).json({ result: newUser, token })
    } catch(error) {
        console.log(error);
        res.status(500).json("Something went wrong...");
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await Users.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "User don't Exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message : "Invalid credentials"})
        }
        const token = jwt.sign({ email: existinguser.email, id:existinguser._id}, process.env.JWT_SECRET , { expiresIn: '1h'});
        res.status(200).json({ result: existinguser, token })
    } catch (error) {
        console.log(error);
        res.status(500).json("Something went wrong...");
    }
}
