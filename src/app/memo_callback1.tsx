"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function page() {
  const [num, setnum] = useState(1);
  const [counter, setcounter] = useState(11);
  const callback = useCallback(() => {
    return num * 10;
  }, [num]);

  const variable = useMemo(() => num + counter, [num, counter]);

  return (
    <div className="h-screen w-screen  flex flex-col gap-2 justify-center items-center bg-gradient-to-r from-blue-500 to-red-500">
      <div className="flex flex-col mt-2">results : {callback()}</div>
      <button className="btn" onClick={() => setnum((prev) => prev + 1)}>
        add num
      </button>
      <button className="btn" onClick={() => setcounter((prev) => prev + 1)}>
        add counter
      </button>
      <div>
        <span>num: {num}</span>
        <span>counter: {counter}</span>
      </div>
      <div>varaible: {variable}</div>
    </div>
  );
}
