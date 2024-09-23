import { Options } from "@/util";
import React, { Dispatch, SetStateAction, useState } from "react";

interface ToggleComponentsProps {
  options: string[];
  activeComponent: string;
  updateActiveComponent: Dispatch<SetStateAction<string>>;
}

const ToggleComponents: React.FC<ToggleComponentsProps> = ({
  options,
  activeComponent,
  updateActiveComponent,
}) => {
  return (
    <div className=" bg-gray-100 p-0 md:p-4">
      <div className="flex  items-center gap-1 md:gap-4 ">
        {options.map((option, key) => (
          <ToggleOptions
            key={key}
            updateActiveComponent={updateActiveComponent}
            activeComponent={activeComponent}
            text={option}
            name={option}
          />
        ))}
      </div>
    </div>
  );
};

export default ToggleComponents;

type ToggleOptionsProps = {
  updateActiveComponent: Dispatch<SetStateAction<string>>;
  activeComponent: string;
  text: string;
  name: string;
};
function ToggleOptions({
  updateActiveComponent,
  activeComponent,
  text,
  name,
}: ToggleOptionsProps) {
  return (
    <button
      onClick={() => updateActiveComponent(name)}
      className={`py-2 px-4 rounded ${
        activeComponent === name ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
    >
      {text}
    </button>
  );
}
