import { connectDB } from "@/lib/db";
import SuggestionForm from "./UI/homepage/SuggestionForm";
import Suggestion from "@/models/suggestion";
import toast from "react-hot-toast";

export default function Page() {
  return (
    <main>
      <h1 className="text-5xl font-bold my-12 text-center md:text-left md:px-4">
        Homepage
      </h1>
      <SuggestionForm />
    </main>
  );
}
