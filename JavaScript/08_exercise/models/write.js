import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  name: String, 
  salary: Number, 
  language: String, 
  city: String, 
  isManager: Boolean
});

const writed = mongoose.model('writed', dataSchema);
export default writed;
