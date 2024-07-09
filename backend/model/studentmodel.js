import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    classname: {
        type: String,
        maxlength: 30
    },
    description:{
        type: String,
        maxlength: 200
    },
    totalseats: {
        type: String,
        maxlength: 3
    },
    classtime: {
        type: String,
        maxlength: 4 
    },
    tuitionfee: {
        type: String,
        maxlength: 10
    },
    image: {
        data: Buffer,
        contentType: String
    }
});

const studentmodel = mongoose.model('Student', StudentSchema);

export default studentmodel;
