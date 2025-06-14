import Sidebar from "../components/Sidebar";
import PromptInput from "../components/PromptInput";
import RunSettingsPanel from "../components/RunSettingsPanel";

const Home = () => {
  return (
    <div className="flex h-screen bg-zinc-900 text-white">
      <Sidebar />
      <main className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
        <PromptInput />
        {/* Simulated response */}
        <div className="bg-zinc-800 p-4 rounded shadow">
          <p><strong>User:</strong> Explain the probability of rolling 7</p>
          <p className="mt-2 text-green-400">
            AI: The probability of rolling a 7 with two dice is 6/36 or 1/6.
          </p>
        </div>
      </main>
      <RunSettingsPanel />
    </div>
  );
};

export default Home;
