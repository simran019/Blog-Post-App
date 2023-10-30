"use client";

import { useState } from "react";

import Header from "./Header/header";
import Login from "./Login/login";

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler =(val:boolean)=>{
    setIsLoggedIn(val)
  }
  return (
    <div className="text-white w-screen h-screen flex flex-col items-center gap-10">
      <Header hasLoggedIn={isLoggedIn} onLogin={loginHandler}/>
      { isLoggedIn==false && <Login onLogin={loginHandler}/> }
    </div>
  )
}
