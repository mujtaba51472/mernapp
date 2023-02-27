import mongoose from "mongoose";
const userModelSchema = mongoose.Schema({
    name:{
        type: String ,
        required:[true , 'Please add a name']
    },
    email:{
        type: String ,
        required:[true , 'Please add a email'],
        unique: true
    },
    password:{
        type: String ,
        required:[true , 'Please add a password']
    }, 

})

const userModel = mongoose.model('user' , userModelSchema)
export default userModel ; 