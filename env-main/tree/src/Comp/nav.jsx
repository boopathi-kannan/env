import { UserCircle, XCircle } from "lucide-react";
import imagee from "../assets/img/tree.png";
import { useRef, useState } from "react";
const Nav = () => {
    const [visible, setVisible] = useState(false);
    const name = useRef(null);
    const pass = useRef(null);

    const login = (e) => {
        e.preventDefault();
        // Implement your login logic here using name.current.value and pass.current.value
        console.log("Name:", name.current.value);
        console.log("Password:", pass.current.value);
        setVisible(false);  // Close the form after submission
    };

    return (
        <>
            <div className="h-10 w-screen mt-2 font-serif bg-white text-gray-950 flex justify-center font-bold text-2xl">
                PLANT ONE MILLION TREES WITH US
            </div>

            <div className="flex flex-row bg-neutral-300 h-20 w-screen border-t-2 border-b-2 border-slate-400 border-opacity-40 text-black items-center justify-between px-5">
                <div className="w-1/2 flex items-center p-10">
                    <img className="h-10 w-15 mt-4" src={imagee} alt="Logo" />
                    <div className="font-extrabold ml-2">
                        ONE MORE TREE <br /> FOUNDATION
                    </div>
                </div>

                <ul className="flex flex-row gap-1 font-extrabold">
                    <li className="hover:underline p-5 m-5">
                        <a href="/">HOME</a>
                    </li>
                    <li className="hover:underline p-5 m-5">
                        <a href="/Contact">CONTACT</a>
                    </li>
                    <li className="hover:underline p-5 m-5">
                        <a href="/About">ABOUT US</a>
                    </li>
                </ul>

                <div className="flex justify-end items-center p-10">
                    <UserCircle className="h-10 w-10 cursor-pointer" onClick={() => setVisible(!visible)} />
                </div>
            </div>

            {visible && (
                <div className="h-full w-full flex flex-col justify-center absolute top-0">
                    <div className="h-screen w-screen flex justify-center items-center bg-slate-600/60">
                        <div className="h-[60vh] w-[30%] flex justify-center items-center rounded-xl bg-white">
                            <form 
                                className="w-[90%] h-[90%] flex flex-col justify-center items-center gap-4" 
                                onSubmit={login}
                            >
                                <div className="flex justify-end w-full">
                                    <XCircle className="hover:cursor-pointer" onClick={() => setVisible(false)} />
                                </div>
                                <img className="h-10 w-10 mt-4" src={imagee} alt="Logo" />
                                <div className="text-black font-extrabold ml-2">
                                    ONE MORE TREE <br /> FOUNDATION
                                </div>
                                <input
                                    ref={name}
                                    type="text"
                                    placeholder="ENTER YOUR NAME"
                                    className="p-3 bg-[#f8f8f8] w-full font-bold outline-none border-2 border-gray-300 rounded-lg focus:border-blue-500"
                                />
                                <input
                                    ref={pass}
                                    type="password"
                                    placeholder="ENTER YOUR PASSWORD"
                                    className="p-3 bg-[#f8f8f8] w-full font-bold outline-none border-2 border-gray-300 rounded-lg focus:border-blue-500"
                                />
                                <button type="submit" className="p-2 bg-green-400 text-white rounded-lg mt-4 border-2 border-green-500 hover:bg-green-500">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Nav;
