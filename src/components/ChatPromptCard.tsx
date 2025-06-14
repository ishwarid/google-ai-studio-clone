import { useState } from "react";
import {
  Clipboard,
  Expand,
  Share,
  MoreVertical,
  Plus,
  PlayCircle,
} from "lucide-react";
import ChatMessage from "./ChatMessage";

const icons = [Clipboard, Expand, Share, PlayCircle, MoreVertical];

const ChatPromptCard = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([]);
  const hasMessages = messages.length > 0;

  const handleRun = () => {
    if (!prompt.trim()) return;

    setMessages(prev => [...prev, { sender: "user", text: prompt }]);
    setPrompt("");

    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "ai", text: "Simulated response to: " + prompt }]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-6xl h-[80vh] flex flex-col bg-zinc-900 rounded-xl border border-zinc-800 shadow-md overflow-hidden">
      {/* Header */}
      <div className="p-6 flex justify-between items-center">
        <span className="text-blue-400 font-medium text-sm">Chat Prompt</span>
        <div className="flex gap-3 text-zinc-400">
          {icons.map((Icon, i) => (
            <Icon key={i} size={18} className="hover:text-white cursor-pointer" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      {!hasMessages ? (
        // ---------------------
        // 🟦 Initial View: Welcome + What's New + Input near top
        // ---------------------
        <div className="flex-1 overflow-y-auto px-6 pt-6 space-y-6">
          <h1 className="text-4xl text-center bg-gradient-to-l from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-sans">
            Welcome to AI Studio
          </h1>

          {/* Prompt input (top) */}
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-zinc-800 rounded-full px-6 py-3 flex items-center justify-between">
              <input
                placeholder="Type your prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="bg-transparent text-white placeholder:text-zinc-500 w-full focus:outline-none"
              />
              <Plus size={18} className="text-zinc-400 hover:text-white cursor-pointer" />
            </div>

            <button
              onClick={handleRun}
              className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-zinc-200"
            >
              <PlayCircle size={16} />
              Run
            </button>
          </div>

          {/* What's New */}
          <div>
            <p className="text-sm text-zinc-400 mb-3">What's new</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-zinc-800 rounded-xl p-4 text-sm text-white"
                >
                  <div className="w-12 h-12 bg-zinc-700 rounded-md flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">
                      Native speech generation{" "}
                      <span className="ml-2 text-xs px-2 py-0.5 bg-blue-500 rounded-full">New</span>
                    </div>
                    <p className="text-zinc-400">
                      Generate high quality text to speech with Gemini.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // ---------------------
        // 🟨 Chat View: Messages scrollable + input at bottom
        // ---------------------
        <>
          <div className="flex-1 overflow-y-auto px-6 pt-4 space-y-4">
            {messages.map((msg, idx) => (
              <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
            ))}
          </div>

          <div className="p-4 border-t border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-zinc-800 rounded-full px-6 py-3 flex items-center justify-between">
                <input
                  placeholder="Type your prompt..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="bg-transparent text-white placeholder:text-zinc-500 w-full focus:outline-none"
                />
                <Plus size={18} className="text-zinc-400 hover:text-white cursor-pointer" />
              </div>

              <button
                onClick={handleRun}
                className="bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-zinc-200"
              >
                <PlayCircle size={16} />
                Run
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatPromptCard;
