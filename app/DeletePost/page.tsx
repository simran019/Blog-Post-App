"use client";

import { useContext } from "react";
import PostContext from "../store/post-context";
import DustbinIcon from "../../public/images/icons8-dustbin-100.png";
import Image from "next/image";


const DeletePost = () => {
  const postCtx = useContext(PostContext);
  const posts = postCtx.posts;
  const deletePostHandler =(id:string)=>{
    postCtx.deletePost(id);
    alert("Post deleted")
  }
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      {posts.length == 0 ? (
        <span className="text-red-800 text-3xl font-extrabold">No posts yet</span>
      ) : (
        posts.map((post: any, i) => {
          return (
            <div className="shadow-xl text-orange-500 border-2  w-3/4 rounded-xl px-2 py-4 gap-4 flex justify-between items-center">
              <div className="flex flex-col gap-2 w-3/4">
                <div className="text-5xl font-extrabold">{post.title}</div>
                <div className="text-xl">{post.description}</div>
              </div>
              <button
              className="w-32 h-32 w-full"
              onClick={()=>deletePostHandler(post.id)}
              >
                <Image src={DustbinIcon} width={40} height={40} alt="delete_icon"/>
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DeletePost;
