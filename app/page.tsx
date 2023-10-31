"use client";

import { useEffect, useState } from "react";

import Header from "./Header/header";
import Login from "./Login/login";
import AddPost from "./AddPost/addPost";
import PostProvider from "./store/postProvider";

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler =(val:boolean)=>{
    setIsLoggedIn(val)
  }
  useEffect(()=>{
    const userLoginDetails = localStorage.getItem("isLoggedIn");
    if(userLoginDetails=="true"){
      setIsLoggedIn(true)
    }
  },[])
  return (
    <PostProvider>
    <div className="text-white w-screen h-screen flex flex-col items-center gap-10">
      <Header hasLoggedIn={isLoggedIn} onLogin={loginHandler}/>
      { isLoggedIn==false && <Login onLogin={loginHandler}/> }
      { isLoggedIn && <AddPost/>}
    </div>
    </PostProvider>
  )
}
