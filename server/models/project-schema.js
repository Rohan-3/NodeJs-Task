
const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({

    id:{
        type: String,
        require: true
    },

    projectId:{
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


const project = new mongoose.model("project",projectSchema)

module.exports = project;