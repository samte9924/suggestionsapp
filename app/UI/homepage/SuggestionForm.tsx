"use client";

import toast from "react-hot-toast";
import { addSuggestion } from "@/actions";
import { useRef } from "react";

function sendSuggestion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ciao");
    }, 1000);
  });
}

export default function SuggestionForm() {
  const ref = useRef<HTMLFormElement>(null);

  const renderToast = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("");
        }, 1000);
      }),
      {
        loading: "Invio...",
        success: <b>Suggerimento inviato!</b>,
        error: <b>{"Errore durante l'invio."}</b>,
      }
    );
  };

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        const toastId = toast.loading("Invio...");
        //input validation
        const res = await addSuggestion(formData);
        if (res.message) toast.success(res.message, { id: toastId });
        if (res.error) toast.error(res.error, { id: toastId });
      }}
      className="w-[500px] mt-[150px] mx-auto px-4 flex flex-col justify-center items-center gap-4"
    >
      <h1 className="w-full text-lg">Scrivi un suggerimento</h1>
      <input
        type="text"
        name="senderName"
        id="senderName"
        placeholder="Nome (opzionale)"
        spellCheck="false"
        className="w-full p-4 rounded-lg bg-zinc-900 hover:outline-zinc-600 focus:outline-zinc-400 focus:scale-[1.02] outline-none transition-all ease-out"
      />
      <textarea
        cols={50}
        rows={10}
        name="suggestion"
        id="suggestion"
        spellCheck="false"
        className="w-full p-4 bg-zinc-900 rounded-lg max-h-[350px] min-h-[100px] hover:outline-zinc-600 focus:outline-zinc-400 focus:scale-[1.02] outline-none transition-all ease-out"
      />
      <button
        type="submit"
        className="bg-blue-600 w-full py-2 rounded-lg hover:bg-blue-500 hover:-translate-y-1 hover:scale-[1.02] transition-all ease-out"
      >
        Invia
      </button>
    </form>
  );
}
