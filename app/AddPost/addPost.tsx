"use client";

import { useState, useContext } from "react";
import Image from "next/image";

import TitleIcon from "../../public/images/icons8-title-50.png";
import DescriptionIcon from "../../public/images/icons8-description-100.png";
import PostContext from "../store/post-context";

const AddPost = () => {
  
  const postCtx = useContext(PostContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler =()=>{
    postCtx.addPost({
      id:'post1',
      title:title,
      description:description
    })
  }

  return (
    <div className="text-black w-1/3 shadow-xl shadow-slate-500 flex flex-col items-center gap-8 px-2 py-4">
      <p className="text-5xl font-extrabold text-orange-500">ADD POST</p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Image src={TitleIcon} width={40} height={40} alt="title_logo" />

          <input
            className="rounded-md p-2 border-2 border-orange-500"
            placeholder="Enter Post title"
              onChange={(event)=>setTitle(event.target.value)}
          />
        </div>
        {/* {isSubmit && username.validity==false && <span className="text-red-800">Invalid Username</span>} */}
        <div className="flex gap-4 items-center">
          <Image
            src={DescriptionIcon}
            width={40}
            height={40}
            alt="password_logo"
          />
          <input
            className="rounded-md p-2 border-2 h-64 border-orange-500"
            placeholder="Enter description"
              onChange={(event)=>setDescription(event.target.value)}
          />
        </div>
        {/* {isSubmit && password.validity==false && <span className="text-red-800">Invalid Password</span>} */}
      </div>
      <button
        className="bg-black text-white focus:bg-orange-500 rounded-md p-2"
        onClick={submitHandler}
      >
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
