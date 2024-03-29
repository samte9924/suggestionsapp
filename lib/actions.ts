"use server";

import toast, { ToastBar } from "react-hot-toast";
import { connectDB } from "./db";
import { revalidatePath } from "next/cache";
import { SuggestionObj } from "./types";
import Suggestion from "@/models/suggestion";
import { redirect } from "next/navigation";

export const fetchSuggestions = async (perPage: number, page: number) => {
  const offset = perPage * (page - 1);
  await connectDB();
  try {
    const items: SuggestionObj[] = await Suggestion.find({})
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
    JSON.parse(JSON.stringify(result));
    console.log(result);
    revalidatePath("/admin/dashboard");
    return { message: "Suggerimento inviato!" };
  } catch (error) {
    console.log(error);
    return { error: "Errore durante l'invio." };
  }
};

export const deleteSuggestion = async (formData: FormData) => {
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

export const test = (formData: FormData) => {
  let senderName = formData.get("senderName");
  const suggestion = formData.get("suggestion");

  console.log(senderName);
  console.log(suggestion);
  revalidatePath("/admin/dashboard");
};
