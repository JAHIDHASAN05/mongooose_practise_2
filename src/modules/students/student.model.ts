import { model,  Schema } from "mongoose";
import { TStuent } from "./student.interface";



const StudentSchema = new Schema<TStuent>({
    name:{
        firstName: {type:String, required: true},
        lastName: {type: String, required: true},
    },
    address:{type: String, required: true},
    bloodGroup : ['A+','B+', 'O-', 'O', 'B-'],
    mobileNo: {type: String, required: true},
    father:{
        firstName : {type : String , require: true},
        lastName: {type: String, required: true},
        mobile: {type: String, required: true},
        address : {type: String , required: true}
    }

})


export  const StudentModel = model<TStuent>('pupils', StudentSchema)
