import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import ChatPromptCard from "./components/ChatPromptCard";
import TopNavbar from "./components/TopNavbar";
import {  Routes, Route } from "react-router-dom";
import ApiKeyPage from "./pages/ApiKeyPage";


function App() {

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
