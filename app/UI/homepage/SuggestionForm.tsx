"use client";

import toast from "react-hot-toast";
import { addSuggestion } from "@/lib/actions";
import { useRef } from "react";

export default function SuggestionForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        const toastId = toast.loading("Invio...");
        //input validation
        const res = await addSuggestion(formData);
        setTimeout(() => {
          if (res.message) toast.success(res.message, { id: toastId });
          if (res.error) toast.error(res.error, { id: toastId });
        }, 1000);
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
        className="w-full p-4 rounded-lg shadow-lg bg-zinc-800/80 border border-zinc-600 hover:outline-zinc-400 hover:outline-offset-2 focus:outline-offset-0 focus:outline-zinc-400 outline-none transition-all ease-out"
      />
      <textarea
        cols={50}
        rows={10}
        name="suggestion"
        id="suggestion"
        placeholder=". . ."
        spellCheck="false"
        className="w-full p-4 bg-zinc-800/80 rounded-lg shadow-lg max-h-[350px] min-h-[100px] border border-zinc-600 hover:outline-zinc-400 hover:outline-offset-2 focus:outline-offset-0 focus:outline-zinc-400 outline-none transition-all ease-out"
      />
      <button
        type="submit"
        className="bg-blue-600 w-full py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:-translate-y-1 hover:scale-[1.01] focus:scale-[1.01] focus:-translate-y-1 focus:outline-blue-400 focus:outline-offset-0 transition-all ease-out outline-none"
      >
        Invia
      </button>
    </form>
  );
}
