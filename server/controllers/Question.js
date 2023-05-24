import mongoose from 'mongoose';
import Questions from '../models/Questions.js';
export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;

 
  const postQuestion = new Questions(postQuestionData);
  try {
      await postQuestion.save();
      res.status(200).json("Posted a question successfully")
  } catch (error) {
      console.log(error)
      res.status(409).json("Couldn't post a new question")        
  }
}




export const getAllQuestions = async (req, res) => {
  try {
      const questionList = await Questions.find();
      
      res.status(200).json(questionList);
  } catch (error) {
      console.log(error);
      res.status(404).json({ message: error.message });
  }
}
export const deleteQuestion=async (req,res)=>{
  const {id:_id} = req.params;
  
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        console.log(_id);
        return res.status(404).send('question unavailable...');
    }
    try {
      await Questions.findByIdAndRemove(_id)
      res.status(200).json({massage:"succesfully deleted"})
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
    
}
export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value } = req.body;
  const { userId } = req;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Question unavailable...');
  }

  try {
    const question = await Questions.findById(_id);
    const upIndex = question.upVote.indexOf(userId);
    const downIndex = question.downVote.indexOf(userId);

    let voteCount = question.voteCount || 0;
    if (value === 'upVote') {
      if (downIndex !== -1) {
        question.downVote.splice(downIndex, 1);
        voteCount++;
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
        voteCount++;
      } else {
        question.upVote.splice(upIndex, 1);
        voteCount--;
      }
    } else if (value === 'downVote') {
      if (upIndex !== -1) {
        question.upVote.splice(upIndex, 1);
        voteCount--;
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
        voteCount--;
      } else {
        question.downVote.splice(downIndex, 1);
        voteCount++;
      }
    }
    question.voteCount = voteCount;

    await question.save();
    res.status(200).json({ message: 'Voted successfully...' });
  } catch (error) {
    res.status(404).json({ message: 'Question not found' });
  }
};
