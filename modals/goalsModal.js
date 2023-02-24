import mongoose from "mongoose";

const goalsSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  }
} 
);
const goalModel = mongoose.model('goal' , goalsSchema)

export default goalModel;
