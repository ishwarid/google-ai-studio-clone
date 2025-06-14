import { useState } from "react";
import { Plus, PlayCircle } from "lucide-react";

const PromptInput = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="max-w-4xl w-full mx-auto">
      {/* Top label */}
      <div className="text-blue-400 text-sm font-medium mb-2">Chat Prompt</div>
      <hr className="border-zinc-800 mb-6" />

      {/* Welcome */}
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">
        Welcome to AI Studio
      </h1>

      {/* Prompt Bar */}
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-zinc-800 rounded-full px-6 py-3 flex items-center justify-between">
          <input
            type="text"
            placeholder="Design a REST API for a social media platform. →"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="bg-transparent outline-none text-white w-full placeholder:text-zinc-400"
          />
          <Plus className="text-zinc-400 hover:text-white cursor-pointer" size={20} />
        </div>

        {/* Run Button */}
        <button className="bg-zinc-700 hover:bg-zinc-600 transition px-4 py-2 rounded-full flex items-center gap-2 text-zinc-300 text-sm">
          <PlayCircle size={18} />
          Run
        </button>
      </div>
    </div>
  );
};

export default PromptInput;
