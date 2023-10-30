import Header from "./Header/header";
import Login from "./Login/login";

export default function Home() {
  return (
    <div className="text-white w-screen h-screen flex flex-col items-center gap-10">
      <Header/>
      <Login/>
    </div>
  )
}
