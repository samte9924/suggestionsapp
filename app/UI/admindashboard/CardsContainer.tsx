"use client";

import { CardsContainerProps } from "@/lib/types";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { test } from "@/lib/actions";
import { DialogClose } from "@radix-ui/react-dialog";
import toast from "react-hot-toast";

export default function CardsContainer({ suggestions }: CardsContainerProps) {
  return (
    <div className="card-wrapper p-4 w-full flex flex-wrap gap-8 items-center justify-center">
      {suggestions.map((suggestion, index) => {
        return (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="card">
                <div className="card-head">
                  <h1 className="m-4">{suggestion.senderName}</h1>
                  <hr className="border-t-zinc-600" />
                </div>
                <p className="card-body">{suggestion.suggestion}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-zinc-900 border-zinc-700">
              <form
                action={(formData) => {
                  console.log("ciao");
                  test(formData);
                  toast.success("Suggerimento modificato!");
                }}
              >
                <DialogHeader>
                  <DialogTitle>Modifica Suggerimento</DialogTitle>
                  <DialogDescription>
                    Effettua delle modifiche al suggerimento selezionato.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col py-4 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-left opacity-50 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="senderName"
                      id="senderName"
                      placeholder="Nome (opzionale)"
                      spellCheck="false"
                      className="p-4 rounded-lg shadow-md bg-zinc-800/80 border border-zinc-600 hover:outline-zinc-400 hover:outline-offset-2 focus:outline-offset-0 focus:outline-zinc-400 outline-none transition-all ease-out"
                      defaultValue={suggestion.senderName}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="username"
                      className="text-left opacity-50 mb-2"
                    >
                      Suggerimento
                    </label>
                    <textarea
                      rows={10}
                      name="suggestion"
                      id="suggestion"
                      placeholder=". . ."
                      spellCheck="false"
                      className="p-4 bg-zinc-800/80 rounded-md shadow-lg max-h-[350px] min-h-[100px] border border-zinc-600 hover:outline-zinc-400 hover:outline-offset-2 focus:outline-offset-0 focus:outline-zinc-400 outline-none transition-all ease-out"
                      defaultValue={suggestion.suggestion}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 w-full py-2 rounded-lg shadow-md hover:bg-blue-500 hover:outline-blue-400 focus:outline-blue-400 focus:outline-offset-0 transition-all ease-out outline-none"
                >
                  Salva
                </button>
              </form>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
