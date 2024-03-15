import React from "react";

function InputField({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-slate-300 rounded-md w-full h-10 p-2 my-3"
    />
  );
}

export default InputField;
