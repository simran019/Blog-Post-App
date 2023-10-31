import { createContext } from "react";

const PostContext = createContext({
    posts:[],
    addPost:(item:any)=>{},
    deletePost:(id:string)=>{}
})

export default PostContext;