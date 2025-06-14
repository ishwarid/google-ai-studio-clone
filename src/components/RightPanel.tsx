const RightPanel = () => {
  return (
    <aside className="w-[320px] border-l border-zinc-800 bg-primary p-4 text-sm space-y-4">
      <div>
        <label className="block mb-1 text-zinc-300 font-medium">Model</label>
        <select className="w-full bg-zinc-800 border border-zinc-700 p-2 rounded text-white">
          <option>Gemini 1.5 Pro</option>
          <option>Gemini Flash</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-zinc-300 font-medium">Tokens</label>
        <input
          type="number"
          defaultValue={2048}
          className="w-full bg-zinc-800 border border-zinc-700 p-2 rounded text-white"
        />
      </div>

      <div>
        <label className="block mb-1 text-zinc-300 font-medium">Temperature</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          defaultValue={0.7}
          className="w-full"
        />
      </div>

      <div>
        <label className="block font-medium text-zinc-300 mb-1">Tools</label>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            Structured Output
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            Code Execution
          </label>
        </div>
      </div>
    </aside>
  );
};

export default RightPanel;
