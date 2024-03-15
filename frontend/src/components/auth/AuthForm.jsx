import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

function AuthForm({ type }) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-[70%] m-auto">
      <span className="text-2xl font-bold mb-14">
        {type === "register" ? "Register" : "Login"}
      </span>
      {type === "register" && <InputField type={"text"} placeholder={"Name"} />}
      <InputField type={"email"} placeholder={"Email"} />
      <InputField type={"password"} placeholder={"Password"} />
      {type === "register" && (
        <InputField type={"password"} placeholder={"Confirm Password"} />
      )}
      <div className="my-5 w-full">
        <Button
          text={type === "register" ? "Register" : "Log In"}
          onClick={() => {}}
          outlined={false}
        />
      </div>

      <span>
        {type === "register" ? "Have an account?" : "Have no account?"}
      </span>

      <Link
        to={type === "register" ? "/login" : "/register"}
        className="w-full my-5"
      >
        <Button
          text={type !== "register" ? "Register" : "Log In"}
          outlined={true}
        />
      </Link>
    </div>
  );
}

export default AuthForm;
