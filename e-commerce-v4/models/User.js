const mongoose=require('mongoose')
const passportLocalMongoose=require('passport-local-mongoose')
const userSchema=new mongoose.Schema({
    // username :String,=>this will automatically loaded by passport mongoose
    // passowrd:String,
    email:String, 
})
userSchema.plugin(passportLocalMongoose)
const User=mongoose.model('User',userSchema)
module.exports = User;