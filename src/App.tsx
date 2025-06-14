import Sidebar from "./components/Sidebar";
import PromptInput from "./components/PromptInput";
import ChatMessage from "./components/ChatMessage";
import RightPanel from "./components/RightPanel";
import ChatPromptCard from "./components/ChatPromptCard";
import TopNavbar from "./components/TopNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApiKeyPage from "./pages/ApiKeyPage";


function App() {
  const messages = [
    { sender: "user", text: "Explain the probability of rolling 7" },
    {
      sender: "ai",
      text: "The probability of rolling a 7 with two six-sided dice is 6/36 or 1/6, since there are 6 combinations that yield a 7.",
    },
  ];

   return (
    <div className="flex flex-col h-screen bg-surface text-white">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
           <Routes>
              <Route path="/" element={<ChatPromptCard />} />
              <Route path="/dashboard" element={<ApiKeyPage />} />
            </Routes>
        </main>
        <RightPanel />
      </div>
    </div>
  );
}


export default App;
