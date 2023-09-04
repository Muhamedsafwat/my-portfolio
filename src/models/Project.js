import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  gallery: [String],
  description: String,
  features: [String],
  technologiesUsed: [String],
  category: String,
  previewLink: String,
  sourceCodeLink: String,
});

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
