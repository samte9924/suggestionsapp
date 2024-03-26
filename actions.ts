"use server";

import toast from "react-hot-toast";
import { connectDB } from "./lib/db";
import Suggestion from "./models/suggestion";

export const addSuggestion = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const suggestion = formData.get("suggestion");

  await connectDB();
  try {
    const result = await Suggestion.create({ senderName, suggestion });
    console.log(result);
    return { message: "Suggerimento invato!" };
  } catch (error) {
    console.log(error);
    return { error: "Errore durante l'invio." };
  }
};
