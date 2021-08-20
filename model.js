const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
     },
    email:{
        type:String,
        required:true,
        },

password:{
        type:String,
        required:true,
       },

     date:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('secure',userSchema)
