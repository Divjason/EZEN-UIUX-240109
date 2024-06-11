import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    uppercase: true,
    trim: true,
    maxLength: 80,
    required: true,
  },
  description: { type: String, trim: true, minLength: 20, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
