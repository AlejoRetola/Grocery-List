import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

export default function List(info) {
  let aber = undefined;

  const { data, setData, setAction } = info;
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
            <button
              onClick={() => {
                handleDelete(index);
              }}
              id={index}
            >
              <BsTrash className="text-red-500 cursor-pointer hover:text-[16.2px] hover:text-red-600" />
            </button>
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
