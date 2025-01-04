import { TStuent } from "./student.interface";
import { StudentModel } from "./student.model";



const createAStudentIntoDB= async (student:TStuent)=>{

    const result = StudentModel.create(student)
    return result

}

export const studentservices={
    createAStudentIntoDB
}