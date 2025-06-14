const menu = [
  "Chat",
  "Stream",
  "Generate Media",
  "Build",
  "History",
  "Enable saving",
];

const Sidebar = () => {
  return (
    <aside className="w-[260px] bg-primary p-4 border-r border-zinc-800 flex flex-col justify-between">
      <div>
        {/* <h1 className="bg-gradient-to-l from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-sans mb-6">Google AI Studio</h1> */}
         
        <ul className="space-y-2 text-sm">
          {menu.map((item) => (
            <li key={item}>
              <button className="w-full text-left py-2 px-3 rounded hover:bg-zinc-800 transition">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-zinc-500 mt-4">
        This model is not stable and may not be suitable for production use.
      </p>
    </aside>
  );
};

export default Sidebar;
