"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function page() {
  const [num, setnum] = useState(1);
  const [counter, setcounter] = useState(11);
  const [just, setJust] = useState(0);

  const variable = useMemo(() => num + counter, [num, counter]);

  return (
    <div className="h-screen w-screen  flex flex-col gap-2 justify-center items-center bg-gradient-to-r from-blue-500 to-red-500">
      <div>I am the parent</div>
      <div>just:{just}</div>
      <button className="btn" onClick={() => setJust((prev) => prev + 1)}>
        add just
      </button>
      <button className="btn" onClick={() => setnum((prev) => prev + 1)}>
        add num
      </button>
      <button className="btn" onClick={() => setcounter((prev) => prev + 1)}>
        add counter
      </button>
      <Child data={variable} />
    </div>
  );
}
const Child = React.memo(({ data }) => {
  console.log("child is getting render");
  return (
    <div>
      <div>Child data : {data}</div>
    </div>
  );
});

// const Child = ({ data }) => {
//   console.log("child is getting render");
//   return (
//     <div>
//       <div>Child data : {data}</div>
//     </div>
//   );
// };
