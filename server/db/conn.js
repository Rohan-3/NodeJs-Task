const mongoose = require('mongoose');
const DB = "mongodb+srv://rohanpuranik25:rohan@employee-management.6rn0p8o.mongodb.net/?retryWrites=true&w=majority&appName=Employee-Management"

mongoose.connect(DB)
.then(()=>{
    console.log("DB connected")
}).catch((e)=>{
    console.log(e);
})

