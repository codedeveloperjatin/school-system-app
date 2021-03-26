import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    }
});

//  we have created a schema , this is how the 
// data will look

const student = mongoose.model('student', studentSchema);

export default student;

// we have created our model and exported it so that
// it can be used to create data in a particular schema.
