import { useReducer } from "react"
import PostContext from "./post-context"

const defaultPostState = {
    posts:[]
}

const postReducer =(state:any,action:any)=>{
    if(action.type=="ADD_POST"){
        const newPosts = state.posts.concat(action.payload);
        console.log(newPosts,"new")
        return{
            posts:newPosts
        }
        
    }
    return defaultPostState;
}

const PostProvider =(props:any)=>{
    
    const [postState, dispatchPostAction] = useReducer(postReducer,defaultPostState);
    
    const addPostHandler =(item:any)=>{
        dispatchPostAction({type:"ADD_POST",payload:item})
    }

    const deletePostHandler =(id:any)=>{

    }

    const postContext ={
        posts:postState.posts,
        addPost:addPostHandler,
        deletePost:deletePostHandler
    }
    return(
        <PostContext.Provider value={postContext}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostProvider;