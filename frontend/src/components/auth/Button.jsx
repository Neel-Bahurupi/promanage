import React from "react";

function Button({ text, outlined }) {
  return (
    <button
      className={
        !outlined
          ? "border w-full rounded-3xl h-10  text-sm bg-cyan-600 text-white"
          : "border w-full rounded-3xl h-10  text-sm border-cyan-600 text-cyan-600"
      }
    >
      {text}
    </button>
  );
}

export default Button;
