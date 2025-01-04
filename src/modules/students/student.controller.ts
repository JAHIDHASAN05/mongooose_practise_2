import { Request, Response } from "express";
import { studentservices } from "./student.service";


const createAStudent=async(req:Request, res:Response)=>{
    try{
       const student= req.body.student
       const result = await studentservices.createAStudentIntoDB(student)

       res.status(200).json({
        success: true,
        message:'Student is created successfully',
        data: result
       })
        

    }catch(err){
        console.log(err)
    }
}


export const studentController={
    createAStudent
}