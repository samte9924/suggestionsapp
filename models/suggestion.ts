import mongoose, { Schema, models } from "mongoose";

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
