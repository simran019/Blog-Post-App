"use client";

import { useEffect, useState } from "react";

import Header from "./Header/header";
import Login from "./Login/login";
import AddPost from "./AddPost/addPost";
import PostProvider from "./store/postProvider";
import ShowPost from "./ShowPost/page";

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [section, setSection] = useState("home");

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
      <Header hasLoggedIn={isLoggedIn} onLogin={loginHandler} onChangeSection={setSection}/>
      { isLoggedIn==false && <Login onLogin={loginHandler}/> }
      { isLoggedIn && section=="add" && <AddPost/>}
      { section=="home" && <ShowPost/> }
    </div>
    </PostProvider>
  )
}
