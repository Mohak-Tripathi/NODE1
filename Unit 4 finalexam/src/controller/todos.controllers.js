const express= require("express")

const router= express.Router()

const Todo = require("../models/todo.models")
const authenticate = require("../middlewares/authenticate")

router.post("", authenticate, async (req, res)=>{


    try{

       const todo =  await Todo.create(req.body)
      return  res.status(200).end(todo)
    }
    catch(error){

        return res.status(400).send(error)
    }
})

router.get("",  async (req, res)=>{
    try{

        const todo =  await Todo.find().lean().exec()
       return  res.status(200).end(todo)
     }
     catch(error){
 
         return res.status(400).send(error)
     }

})

router.get("/:id", authenticate, async (req, res)=>{
    try{

        const todo =  await Todo.findById(req.params.id).lean().exec()
       return  res.status(200).end(todo)
     }
     catch(error){
 
         return res.status(400).send(error)
     }

})

