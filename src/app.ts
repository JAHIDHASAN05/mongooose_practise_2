import express, { Request, Response } from 'express'
import cors from 'cors'
import { studentRouts } from './modules/students/student.routes'
export const app = express()

app.use(cors())
app.use(express.json())


app.use('/api/v1/student' , studentRouts)

app.get('/', (req:Request, res:Response)=>{
    res.send("server is running")
})


