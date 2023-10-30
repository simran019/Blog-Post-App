import UsernameIcon from "../../public/images/icons8-username-50.png";
import PasswordIcon from "../../public/images/icons8-password-50 (1).png";
import Image from "next/image";
const Login = () => {

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
          />
        </div>
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
          />
        </div>
      </div>
      <button className="bg-black text-white hover:bg-orange-500 rounded-md p-2">
                Login
            </button>
    </div>
  );
};

export default Login;
