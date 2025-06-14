type ChatMessageProps = {
  sender: "user" | "ai";
  text: string;
};

const ChatMessage = ({ sender, text }: ChatMessageProps) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-zinc-800 text-zinc-100 rounded-bl-none"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
