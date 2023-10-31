"use client";

import { useContext } from "react";
import PostContext from "../store/post-context";

const ShowPost = () => {
  const postCtx = useContext(PostContext);
  const posts = postCtx.posts
   
  return (
    <div className="w-full flex flex-col items-center gap-4">
        {posts.length==0 ? <span>No posts yet</span>:(
      posts.map((post:any, i) => {
        return (
          <div className="shadow-xl text-orange-500 border-2  w-3/4 rounded-xl px-2 py-4 gap-4 flex flex-col">
            <div className="text-5xl font-extrabold">{post.title}</div>
            <div className="text-xl">{post.description}</div>
          </div>
         );})
        )}
    </div>
  );
};

export default ShowPost;
