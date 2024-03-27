import mongoose, { Schema, models } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const suggestionSchema = new Schema(
  {
    senderName: {
      type: String,
      required: true,
    },
    suggestion: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Suggestion =
  models.Suggestion || mongoose.model("Suggestion", suggestionSchema);
export default Suggestion;
