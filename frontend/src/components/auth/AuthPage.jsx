import React from "react";
import logo from "../../assets/logo.png";
import AuthForm from "./AuthForm";

function AuthPage({ type }) {
  return (
    <div className="flex items-center h-full">
      <div className="flex flex-col items-center justify-center w-3/5 bg-cyan-600 h-screen">
        <img src={logo} alt="logo" className="w-[300px]" />
        <span className="text-white font-bold text-2xl">
          Welcome aboard my friend
        </span>
        <span className="text-white text-xs font-light m-1">
          Just a couple of clicks and we start
        </span>
      </div>
      <div className="w-2/5 h-screen">
        <AuthForm type={type === "register" ? "register" : "login"} />
      </div>
    </div>
  );
}

export default AuthPage;
