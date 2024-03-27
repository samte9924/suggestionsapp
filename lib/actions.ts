"use server";

import toast from "react-hot-toast";
import { connectDB } from "./db";
import Suggestion from "../models/suggestion";
import { revalidatePath } from "next/cache";

export type Suggestion = {
  id: string;
  senderName: string;
  suggestion: string;
};

export const fetchSuggestions = async (perPage: number, page: number) => {
  const offset = perPage * (page - 1);
  await connectDB();
  try {
    const items: Suggestion[] = await Suggestion.find({})
      .skip(offset)
      .limit(perPage);
    const itemsCount: number = await Suggestion.countDocuments({});

    const response = { items, itemsCount };

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addSuggestion = async (formData: FormData) => {
  let senderName = formData.get("senderName");
  const suggestion = formData.get("suggestion");

  if (!senderName) senderName = "Anonimo";
  if (!suggestion) return { error: "Campo 'Suggerimento' non compilato." };

  await connectDB();
  try {
    const result = await Suggestion.create({ senderName, suggestion });
    console.log(result);
    revalidatePath("/admin/dashboard");
    return { message: "Suggerimento inviato!" };
  } catch (error) {
    console.log(error);
    return { error: "Errore durante l'invio." };
  }
};
