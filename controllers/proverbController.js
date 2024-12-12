import proverbModel from "../models/proverb.js";
import notificationModel from "../models/notification.js";
import { io } from "../index.js";

export const PostProverb = async (req, res) => {
  try {
    const { text, category, author, origin } = req.body;
    const newProverb = new proverbModel({ text, category, origin, author });
    await newProverb.save();

    // Create the notification array
    const notifications = [
      {
        title: "New Proverb Published",
        message: `Check out the new proverb in ${newProverb.category}`,
        postId: newProverb._id,
      },
    ];

    // Insert notifications into the database
    await notificationModel.insertMany(notifications);

    // Emit the notification via socket.io
    io.emit("newNotification", {
      title: "New Proverb Published",
      message: `Check out the new proverb in ${newProverb.category}`,
      postId: newProverb._id,
    });

    // Respond with the created proverb
    res.status(201).json(newProverb);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const GetAllProverb = async (req, res) => {
  try {
    const proverbs = await proverbModel.find().sort({ createdAt: -1 });
    res.json(proverbs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const DeleteProverb = async (req, res) => {
  try {
    await proverbModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Proverb deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const GetEnglishProverbs = async (req, res) => {
  try {
    const proverbs = await proverbModel
      .find({ category: "English" })
      .sort({ createdAt: -1 });

    if (proverbs.length === 0) {
      return res
        .status(404)
        .json({ message: "No proverbs found in the English category." });
    }

    return res.json(proverbs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const GetIgboProverbs = async (req, res) => {
  try {
    const proverbs = await proverbModel
      .find({ category: "Igbo" })
      .sort({ createdAt: -1 });

    if (proverbs.length === 0) {
      return res
        .status(404)
        .json({ message: "No proverbs found in the Igbo category." });
    }

    return res.json(proverbs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const GetYorubaProverbs = async (req, res) => {
  try {
    const proverbs = await proverbModel
      .find({ category: "Yoruba" })
      .sort({ createdAt: -1 });

    if (proverbs.length === 0) {
      return res
        .status(404)
        .json({ message: "No proverbs found in the Yoruba category." });
    }

    return res.json(proverbs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const GetHauseProverbs = async (req, res) => {
  try {
    const proverbs = await proverbModel
      .find({ category: "Hausa" })
      .sort({ createdAt: -1 });

    if (proverbs.length === 0) {
      return res
        .status(404)
        .json({ message: "No proverbs found in the Hausa category." });
    }

    return res.json(proverbs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
