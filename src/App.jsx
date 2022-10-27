import { useState } from "react";
import { useEffect } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setValue] = useState("");
  const [action, setAction] = useState("");

  function handleChange() {
    setValue(event.target.value);
  }
  function handleClick() {
    setData((prevData) => {
      return [...prevData, inputValue];
    });
    setValue("");
    setAction({ text: "Item added", id: 1 });
    setTimeout(() => {
      setAction("");
    }, 1500);
  }

  return (
    <div className="w-screen h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-5/12 h-5/12 bg-white shadow-lg p-8 relative">
        {action.id === 1 ? (
          <div className="flex items-center justify-center text-green-400 bg-green-100">{action.text}</div>
        ) : (
          <div className="flex items-center justify-center text-red-400 bg-red-100">{action.text}</div>
        )}
        <h1 className="text-center font-sans font-bold text-3xl tracking-wider">Grocery Bud</h1>

        <div className="flex  w-full h-7 m-auto mt-4">
          <input type="text" placeholder="e.g. eggs" className="w-10/12 h-full bg-slate-100 rounded-l pl-2 transition" onChange={handleChange} value={inputValue} />
          <button className="w-2/12 bg-blue-300 text-black h-full rounded-r font-sans tracking-wide" onClick={handleClick}>
            Submit
          </button>
        </div>
        <List data={data} setData={setData} setAction={setAction} />
      </div>
    </div>
  );
}

export default App;
