const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require ('dotenv')
const cors = require('cors')
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(cors())
dotenv.config()
PORT=3333

const EXERCISES=[
    {
        id:1,
        imageURL:'https://preview.colorlib.com/theme/gym/img/o1.png',
        title:"Regular Exercise",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        id:2,
        imageURL:'https://preview.colorlib.com/theme/gym/img/o2.png',
        title:"Training on the go",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    },
    {
        id:3,
        imageURL:'https://preview.colorlib.com/theme/gym/img/o3.png',
        title:"Body Building Packages",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    }
]


// BASE URL
app.get('/api',(req,res)=>{
    res.send('welcome to our API')
})

// GET ALL DATA
app.get('/api/exercises',(req,res)=>{
    const {name}=req.query
    // const searchedData= EXERCISES.filter((x)=>x.name.toLowerCase().trim().includes(name.toLowerCase().trim()))
    // if(name){
        res.send(EXERCISES)
    // }
    // else{
    //     res.send(searchedData)
    // }
})

// GET BY ID
app.get('/api/exercises/:id',(req,res)=>{
    const id = req.params.id
    res.send(EXERCISES.find((x)=>x.id==id))
})

// POST EXERCISE
app.post('/api/exercises',(req,res)=>{
    const {title, description,imageURL}=req.body
    const newExercise={
        title:title,
        description:description,
        imageURL:imageURL
    }
    EXERCISES.push(newExercise)
    if(!title){
        res.send('title is required')
    }
    if(!description){
        res.send('description is required')
    }
    if(!imageURL){
        res.send('imageURL is required')
    }
})

// DELETE EXERCISE
app.delete('/api/exercises/:id',(req,res)=>{
    const id= req.params.id
    const deletedExercise=EXERCISES.find((x)=>x.id==id)
    const idx = EXERCISES.indexOf(deletedExercise)
    EXERCISES.splice(idx,1) 
    res.send(`${deletedExercise.name}deleted`)
})
app.listen(PORT,()=>{
    console.log(`app running on PORT:${PORT}`);
    
})