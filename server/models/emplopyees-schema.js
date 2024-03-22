
const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({

    id:{
        type: String,
        require: true
    },

    employeeId:{
        type: String,
        require: true
    },

    fName:{
        type: String,
        require: true
    },

    lName:{
        type: String,
        require: true
    },
    departmentID:{
        type: String,
        require: true
    },
    onBoardDate:{
        type: Date, 
        required: true,
        default: Date.now
    },
    age:{
        type:Number,
        require: true
    }
})


const employee = new mongoose.model("employee",employeeSchema)

module.exports = employee;