const RunSettingsPanel = () => {
  return (
    <aside className="w-[320px] border-l border-zinc-800 bg-zinc-900 p-4 text-sm">
      <div className="mb-4">
        <label className="block mb-1 font-semibold text-zinc-300">
          Model
        </label>
        <select className="w-full bg-zinc-800 border border-zinc-700 text-white p-2 rounded">
          <option>Gemini 1.5 Pro</option>
          <option>Gemini 1.5 Flash</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold text-zinc-300">Tokens</label>
        <input
          type="number"
          value={2048}
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-2 rounded"
        />
      </div>

      <div>
        <label className="block font-semibold text-zinc-300 mb-1">
          Temperature
        </label>
        <input type="range" min={0} max={1} step={0.01} defaultValue={0.7} />
      </div>
    </aside>
  );
};

export default RunSettingsPanel;
