"use client";

import {useState} from "react";
import Image from "next/image";

import UsernameIcon from "../../public/images/icons8-username-50.png";
import PasswordIcon from "../../public/images/icons8-password-50 (1).png";

const Login = (props:any) => {
    
    const [username, setUsername] = useState({
        value:"",
        validity:false
    });
    
    const [password, setPassword] = useState({
        value:"",
        validity:false
    });

    const [isSubmit, setIsSubmit] = useState(false);


    const inputHandler =(identifier:string,value:string)=>{
        if(identifier=="email"){
            setUsername({value:value,validity:value.includes("@") && value.includes(".")})
        }
        else if(identifier=="password"){
            setPassword({value:value,validity:value.trim().length>6})
        }
    }

    const submitHandler =()=>{
        setIsSubmit(true);
        props.onLogin(true);
    }
    return (
    <div className="text-black w-1/3 shadow-xl shadow-slate-500 flex flex-col items-center gap-8 px-2 py-4">
      <p className="text-5xl font-extrabold text-orange-500">LOGIN</p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <Image
            src={UsernameIcon}
            width={40}
            height={40}
            alt="username_logo"
          />

          <input
            className="rounded-md p-2 border-2 border-orange-500"
            placeholder="username"
            onChange={(event)=>inputHandler("email",event.target.value)}
          />
        </div>
        {isSubmit && username.validity==false && <span className="text-red-800">Invalid Username</span>}
        <div className="flex gap-4 items-center">
          <Image
            src={PasswordIcon}
            width={40}
            height={40}
            alt="password_logo"
          />
          <input
            className="rounded-md p-2 border-2 border-orange-500"
            placeholder="password"
            onChange={(event)=>inputHandler("password",event.target.value)}
          />
        </div>
        {isSubmit && password.validity==false && <span className="text-red-800">Invalid Password</span>}
      </div>
      <button className="bg-black text-white focus:bg-orange-500 rounded-md p-2"
      onClick={submitHandler}
      >
                Login
      </button>
    </div>
  );
};

export default Login;
