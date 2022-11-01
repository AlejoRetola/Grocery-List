import { BsTrash } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";

export default function List(info) {
  let aber = undefined;

  const { data, setData, setAction, inputValue, setValue, setButtonChanger, setTracker } = info;
  useEffect(() => {
    setData(info.data);
  }, [info]);

  function handleDelete(id) {
    let filteredInfo = data.filter((pedido, index) => {
      return index !== id;
    });
    setData(filteredInfo);
    setAction({ text: "Item removed", id: 2 });
    setTimeout(() => {
      setAction("");
    }, 1500);
  }

  function handleEdit(id) {
    setValue(data[id]);
    setButtonChanger(1);
    setTracker(id);
  }

  function deleteAll() {
    setData([]);
    setAction({ text: "Empty list", id: 3 });
    setTimeout(() => {
      setAction("");
    }, 1500);
  }

  return (
    <div>
      {data.map((pedido, index) => {
        aber = index;
        return (
          <div className="flex flex-row justify-between items-center px-2 py-1 bg-slate-50 hover:bg-slate-100 mt-4 " key={index} id={index}>
            <h4 className="capitalize">{pedido}</h4>
            <div id="botones" className="flex gap-4">
              <button
                className="text-green-500 cursor-pointer hover:text-[16.2px] hover:text-green-600"
                onClick={() => {
                  handleEdit(index);
                }}
              >
                <AiFillEdit />
              </button>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
                id={index}
              >
                <BsTrash className="text-red-500 cursor-pointer hover:text-[16.2px] hover:text-red-600" />
              </button>
            </div>
          </div>
        );
      })}
      {aber >= 0 ? (
        <button className="w-full mt-8 bg-transparent text-red-400 flex items-center justify-center" onClick={deleteAll}>
          Clear items
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

// for (let i = 0; info.data.length > i; i++) {

//
