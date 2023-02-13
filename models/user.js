const mongoose = require('mongoose')

const userSchema = new Schema({
    username: {
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator: ()=>Promise.resolve(false),
            message:'Email Validation failed'
        }
    },
    thoughts:{

    },
    friends:{
        
    }
})