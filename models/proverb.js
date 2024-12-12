import mongoose from "mongoose";

const proverbSchema = mongoose.Schema(
  {
    text: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["English", "Igbo", "Yoruba", "Hausa"], // Restricting the values to these options
    },
    origin: { type: String, required: false },
    author: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Proverb", proverbSchema);
