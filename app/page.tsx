"use client";

import { useEffect, useState } from "react";

import Header from "./Header/header";
import Login from "./Login/login";
import AddPost from "./AddPost/addPost";
import PostProvider from "./store/postProvider";
import ShowPost from "./ShowPost/page";
import DeletePost from "./DeletePost/page";

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
    <div className="text-white w-screen h-screen flex flex-col items-center gap-24">
      <Header hasLoggedIn={isLoggedIn} onLogin={loginHandler} onChangeSection={setSection}/>
      { isLoggedIn==false && <Login onLogin={loginHandler}/> }
      { isLoggedIn==true && section=="add" && <AddPost/>}
      { isLoggedIn==true && section=="home" && <ShowPost/> }
      {
        isLoggedIn==true && section=="delete" && <DeletePost/>
      }
    </div>
    </PostProvider>
  )
}
