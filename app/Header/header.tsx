const Header =()=>{
    return(
        <div className="bg-orange-500 flex justify-between p-4 w-full">
            <div className="flex justify-between gap-2">
                <button className="hover:bg-black rounded-md p-2">Home</button>
                {/* <button className="hover:bg-black rounded-md p-2">Delet Post</button> */}
                {/* <button className="hover:bg-black rounded-md p-2">Add Post</button> */}
            </div>
            {/* <button className="hover:bg-black rounded-md p-2">
                Logout
            </button> */}
            <button className="hover:bg-black rounded-md p-2">
                Login
            </button>
        </div>
    )
}

export default Header;