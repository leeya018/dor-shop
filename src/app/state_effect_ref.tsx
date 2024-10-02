"use client";
import React, { useEffect, useRef, useState } from "react";

export default function page() {
  const [counter, setCounter] = useState(1);
  const [isEven, setIsEven] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    if (counter % 2 === 0) {
      setIsEven(true);
      inputRef?.current?.focus();
    } else {
      setIsEven(false);
    }
  }, [counter]);
  return (
    <div className="w-screen h-screen">
      <div>countre: {counter}</div>
      <input
        type="text"
        className="p-2 rounded-md text-black border-black "
        ref={inputRef}
      />
      <button
        onClick={(e) => setCounter((prev) => prev + 3)}
        className="p-2 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer"
      >
        add{" "}
      </button>
      <div>{isEven ? "true" : "false"}</div>
    </div>
  );
}
