const mongoose = require("mongoose")

const url = "mongodb://localhost:27017/UserTable"

mongoose.connect(url, {
    useNewUrlParser:true
}).then(() =>{
    console.log("Connected...")
}).catch((err) =>{
    console.log("Not Connected...")
})