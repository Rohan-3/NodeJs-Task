
const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema({

    id:{
        type: String,
        require: true
    },

    departmentId:{
        type: String,
        require: true
    },

    name:{
        type: String,
        require: true
    },

    createdOn:{
        type: Date, 
        required: true,
        default: Date.now
    }
})


const department = new mongoose.model("department",departmentSchema)

module.exports = department;