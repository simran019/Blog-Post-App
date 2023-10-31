import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import PostContext from "../store/post-context";
import PostProvider from "../store/postProvider";

const Header = (props: any) => {

  const [section, setSection] = useState("");

  const postCtx = useContext(PostContext);
  const posts = postCtx.posts;
  console.log(postCtx.posts,"header");
  const userLoggedIn = props?.hasLoggedIn;
  
  const logoutHandler =()=>{
    props?.onLogin(false);
    localStorage.setItem("isLoggedIn","false");
  }
  useEffect(()=>{
    props.onChangeSection(section)
  },[section])

  return (
    <PostProvider>
    <div className="bg-orange-500 flex justify-between p-4 w-full">
      <div className="flex justify-between gap-2">
        <button 
        className="hover:bg-black rounded-md p-2"
        onClick={()=>{setSection("home")}}
        >
          Home
        </button>
        {userLoggedIn && (
          <>
            <button className="hover:bg-black rounded-md p-2"
            onClick={()=>{setSection("delete")}}
            >
              Delet Post
            </button>
            <button className="hover:bg-black rounded-md p-2"
            onClick={()=>{setSection("add")}}
            >
              Add Post
            </button>
          </>
        )}
      </div>
      {userLoggedIn && (
        <button className="hover:bg-black rounded-md p-2"
        onClick={logoutHandler}
        >Logout</button>
      )}
      { userLoggedIn==false && <button className="hover:bg-black rounded-md p-2">Login</button>}
    </div>
    </PostProvider>
  );
};

export default Header;
