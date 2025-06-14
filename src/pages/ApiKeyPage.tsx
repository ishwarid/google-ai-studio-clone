import { Plus, Copy } from "lucide-react";

const ApiKeyPage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">API Keys</h2>
          <p className="text-sm text-zinc-400 mt-1">
            Quickly test the Gemini API
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
          <Plus size={16} />
          Create API key
        </button>
      </div>

      {/* Code Card */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h3 className="text-sm font-medium text-blue-400 mb-3 cursor-pointer hover:underline">
          API quickstart guide
        </h3>

        <div className="bg-zinc-950 rounded-lg p-4 text-sm font-mono text-blue-100 border border-zinc-800 overflow-x-auto whitespace-pre-wrap">
          <code>
            {`curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \\
  -H 'Content-Type: application/json' \\
  -X POST \\
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]
  }'`}
          </code>
        </div>

        {/* Footer under code */}
        <div className="mt-2 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <Copy size={14} className="cursor-pointer hover:text-white" />
            <span>
              Use code{" "}
              <span className="text-blue-400 underline cursor-pointer">
                with caution.
              </span>
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-zinc-400 mb-4">
        Your API keys are listed below. You can also view and manage your
        project and API keys in Google Cloud.
      </p>

      {/* Table card */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="min-w-full text-sm text-left text-zinc-300 mt-0">
          <thead className="bg-zinc-800 text-zinc-400 text-xs uppercase">
            <tr>
              <th className="py-3 px-6">Project number</th>
              <th className="py-3 px-6">Project name</th>
              <th className="py-3 px-6">API key</th>
              <th className="py-3 px-6">Created</th>
              <th className="py-3 px-6">Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-zinc-500 font-sans">
              <td colSpan={5} className="py-6 text-center">
                Create an API key to see your projects
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="px-2 py-0 text-sm text-zinc-400">
        Remember to use API keys securely. Don't share or embed them in public
        code. Use of Gemini API from a billing-enabled project is subject to{" "}
        <a href="#" className="text-blue-400 hover:underline">
          pay-as-you-go pricing
        </a>
        .
      </div>
    </div>
  );
};

export default ApiKeyPage;
