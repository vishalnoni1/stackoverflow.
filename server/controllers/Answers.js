
import mongoose from 'mongoose'
import Questions from '../models/Questions.js'

export const postAnswer = async (req, res) => {
    const { id: _id } = req.params;
    const { noOfAnswers, answerBody, userAnswered, userId } = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      console.log(_id);
      return res.status(404).send('question unavailable...');
    }
    
    try {
        await updateNoOfAnswers(_id, noOfAnswers);
        const updatedQuestion = await Questions.findByIdAndUpdate(_id, { $push: { answer: { answerBody, userAnswered, userId } } }, { new: true });//* new :true returns the updated code.
        if (!updatedQuestion) {
            return res.status(404).send('question unavailable...');
        }
        res.status(200).json(updatedQuestion);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const updateNoOfAnswers = async (_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate(_id, { $set: { 'noOfAnswers': noOfAnswers } });
    } catch (error) {
        console.log(error);
    }
}
const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate( _id, { $set: { 'noOfAnswers' : noOfAnswers}})
    } catch (error) {
        console.log(error)
    }
}
export const deleteAnswer = async ( req, res ) => {
    const { id:_id } = req.params;
    const { answerId, noOfAnswers } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question unavailable...');
    }
    if(!mongoose.Types.ObjectId.isValid(answerId)){
        return res.status(404).send('Answer unavailable...');
    }
    updateNoOfQuestions( _id, noOfAnswers)
    try{
        await Questions.updateOne(
            { _id }, 
            { $pull: { 'answer': { _id: answerId } } }
        )
        res.status(200).json({ message: "Successfully deleted..."})
    }catch(error){
        res.status(405).json(error)
    }
}