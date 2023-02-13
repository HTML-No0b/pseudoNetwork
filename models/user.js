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
        type:mongoose.Types.ObjectId,
        ref:'thought'

    },
    friends:{
        type:mongoose.Types.ObjectId,
        ref:'user'
        
    }
});
userSchema.virtual('friendCount').get(()=>{
    return this.friends.length;
});

const user = model ('user',userSchema);

module.exports = user;