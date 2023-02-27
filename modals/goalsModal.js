import mongoose from "mongoose";

const goalsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true ,
    ref: "user"
  },
  text: {
    type: String,
    required: true,
  }
} 
);
const goalModel = mongoose.model('goal' , goalsSchema)

export default goalModel;
