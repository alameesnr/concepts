const Exammod = require('../models/ExamModel.js')

const createExam = async (req, res)=>{
    try {
        if(
            !req.body.RegistrationNo ||
            !req.body.Subjects ||
            !req.body.Code ||
            !req.body.Questions
             
         
       ){
            return res.status(400).send({
            message: "send all required fields: registration, subjects, code, questions"})
       }


       const book = await Exammod.create(req.body)
       res.status(200).json(book)

  } catch (error) {

       console.log(error)
       res.status(500).json({message: error.message})
   }

}

const getExam = async (req, res)=>{

}

const UpdateExam = async (req, res)=>{

}

const deleteExam = async (req, res)=>{

}

module.exports = {
    createExam,
    getExam,
    UpdateExam,
    deleteExam
}