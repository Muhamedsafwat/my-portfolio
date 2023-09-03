import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String,
});

export default mongoose.models.Message ||
  mongoose.model("Message", messageSchema);
