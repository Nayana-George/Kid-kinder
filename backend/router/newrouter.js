import express from 'express';
import multer from 'multer';
import { bookuser, getBookings } from "../controller/controller.js";
import { Addclass, deleteClass, getBookingDetails1, getDetails1, updateClass } from "../controller/studentcontroller.js";
import { AddTeacher, getTeacher, getTeacherId , deleteTeacher, updateTeacher} from '../controller/teachercontroller.js';

const newrouter = express.Router();

// Middleware for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Routes for booking
newrouter.post('/books', bookuser);
newrouter.get('/get', getBookings);

// Routes for student details and classes
newrouter.get('/details', getDetails1);
newrouter.get('/getdetails/:id', getBookingDetails1);
newrouter.post('/class', upload.single('image'), Addclass);
newrouter.delete('/details/:id', deleteClass)
newrouter.put('/details/:id', upload.single('image'), updateClass);

// Routes for Teacher details
newrouter.get('/teacher', getTeacher);
newrouter.get('/teach/:id', getTeacherId);
newrouter.post('/addteacher', upload.single('image'),AddTeacher)
newrouter.delete('/teacher/:id', deleteTeacher)
newrouter.put('/teacher/:id', upload.single('image'), updateTeacher)


export default newrouter;
