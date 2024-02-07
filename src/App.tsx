function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
        <button className="px-3 py-2 rounded-md bg-green-500 m-10 text-xl font-semibold text-white">
          incriment
        </button>
        <h1 className="text-3xl m-10">0</h1>
        <button className="px-3 py-2 rounded-md bg-red-500 text-xl m-10 font-semibold text-white">
          decriment
        </button>
      </div>
    </div>
  );
}

export default App;
