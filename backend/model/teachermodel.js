import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  
  teachername: {
    type: String,
    maxlength: 20,
    required: true
  },
  department: {
    type: String,
    maxlength: 20,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String
  }
});

export const Teachermodel = mongoose.model('Teacher', TeacherSchema);
