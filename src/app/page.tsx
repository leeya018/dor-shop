"use client";
import React, { useEffect, useState } from "react";

let inter;
const ops = ["*", "+"];
export default function page() {
  const [drill, setDrill] = useState("3 * 5");
  const [ans, setAns] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [isStop, setIsStop] = useState(false);

  useEffect(() => {
    if (checkAns()) {
      cretaeDrill();
    }
  }, [ans]);

  useEffect(() => {
    inter = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    if (time >= 20) {
      clearTimeout(inter);
      setIsStop(true);
    }
    return () => clearInterval(inter);
  }, [time]);

  // useEffect(() => {
  //   if (time > 10) {
  //     clearInterval(inter);
  //   }
  // }, [time]);

  const cretaeDrill = () => {
    setScore((prev) => prev + 1);
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const ind = Math.floor(Math.random() * 2);
    console.log(a, ops[ind], b);
    const newDrill = `${a}${ops[ind]}${b}`;
    setDrill(newDrill);
    setAns(0);
  };

  const checkAns = () => {
    return ans === eval(drill);
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-red-500">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-5">Math Game:</div>
        <div className="text-xl ">
          time : <span className="font-bold">{time}</span>
        </div>
        <div className="text-xl ">
          your score : <span className="font-bold">{score}</span>
        </div>
        <div className="mt-10">{drill}</div>
        <div>
          <input
            disabled={isStop}
            type="number"
            className="p-2 rounded-md text-black mt-5"
            placeholder="put answer"
            onChange={(e) => setAns(parseInt(e.target.value))}
            value={ans}
          />
        </div>
        <div>{checkAns() === true && <span>good</span>}</div>
      </div>
    </div>
  );
}
