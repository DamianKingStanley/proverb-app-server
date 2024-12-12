import mongoose from "mongoose";
const notificationSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proverb",
      required: true,
    },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema);
