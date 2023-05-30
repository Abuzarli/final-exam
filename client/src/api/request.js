import { BASE_URL } from "./baseurl";
import axios from "axios";

//get all
export const getAllExercises = async(title)=>{
    let Exercises;
    let URL;
    if (!title) {
        URL = BASE_URL+'/exercises';
    }
    else{
        URL = BASE_URL+`/exercises/?title=${title}`
    }
    await axios.get(URL)
    .then(res =>{ 
        Exercises = res.data;
    })

    return Exercises
}
//get by id
export const getexercisesByID = async(id)=>{
    let Exercises;
    await axios.get(`${BASE_URL}/exercises/${id}`)
    .then(res =>{ 
        Exercises = res.data;
    })

    return Exercises
}
//delete
export const deleteExercisesByID = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/exercises/${id}`).then(res=>{
        message = res.data
    })
    return message
}
//post
export const postExercises = (payload)=>{
    axios.post(`${BASE_URL}/exercises`,payload)
}
//edit
export const editExercisesByID = (id,payload)=>{
    axios.put(`${BASE_URL}/exercises/${id}`,payload)
}