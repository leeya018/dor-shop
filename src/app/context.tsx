"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext({ data: "good", counter: 1 });

export default function page() {
  const [data, setdata] = useState("bad");
  const [counter, setCounter] = useState(2);
  return (
    <DataContext.Provider value={{ data, counter }}>
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-red-500">
        <div className="flex flex-col mt-2">
          <div className="flex gap-2 ">
            <button
              className="btn"
              onClick={() =>
                setdata((prev) => (prev === "good" ? "bad" : "good"))
              }
            >
              change pos
            </button>
            <button
              className="btn"
              onClick={() => setCounter((prev) => prev + 1)}
            >
              increase
            </button>
          </div>
          <Child />
        </div>
      </div>
    </DataContext.Provider>
  );
}

const Child = () => {
  const { data, counter } = useContext(DataContext);
  return (
    <div className="flex flex-col gap-4 rounded-md border-2">
      <span>I am child comp </span>
      <div>{data}</div>
      <div>counter: {counter}</div>
    </div>
  );
};
