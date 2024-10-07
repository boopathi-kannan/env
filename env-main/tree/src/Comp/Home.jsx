import Nav from "./nav";
import Bot from "./bottom";
const home=()=>
    {
        return(
            <>
            <Nav/>
            <div className="h-full w-full">
            <div className="h-[30vh] w-full flex justify-center items-center">
    <div className="h-[20vh] w-[10vw] bg-zinc-200 text-black border-2 rounded-full font-bold border-black p-5 m-5 flex justify-center items-center text-xl text-center" >
          Achived!!<br/>
        100/1000000
    </div>
</div>

                <div className=" flex flex-row  text-center w-full pl-10 pr-10 gap-20"> 
                    <div className=" flex flex-col p-10 w-1/2 h-[30vh]  ">
                        <div className="bg-green-600 p-10 text-yellow-50  font-bold rounded-3xl ">
                            <h1 className="p-5 font-bold">Plant a million trees with us!</h1>
                            <p>Join our initiative and plant a tree in poland and Europe! Plant a tree on your company in CSR activities and tree planting.Together,we can positively impact the environment and achieve the goal of our Foundation,which is to plant a million new trees!</p>
                        </div>
                        <div className="rounded-2xl p-10">
                            <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1728231691/plant_tree_thjz0p.avif" className="rounded-3xl "/>
                        </div>
                    </div>
                    <div className="w-1/2 h-[50%]">
                        <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1728231982/planting_tree_cjykat.avif" className="rounded-3xl m-10 w-[70%]"/>
                    </div>
                </div>
                <div className="bg-slate-100 flex flex-row justify-center w-full">
                    <div className="w-1/2">
                    <h1 className="text-center font-serif font-bold text-5xl p-10">About Us</h1>
                    <p className="text-gray-500 p-10  text-center ">The One More Tree Foundation was founded by two friends whose goal is to counteract climate change through pro-environmental activities. Our priority is to plant a million trees in Indai.
                    However, as a non-profit organization,we do not focus solely on tree planting.Our mission also includes environmental protection,greening urban spaces,forest cleanup, and engaging companies in CSR activities. We also conduct workshops to increase environmental awarness in local communities.
                    </p>
                    </div>
                    <div className="w-1/2">
                    <img src="https://res.cloudinary.com/dve8r06ul/image/upload/v1728233254/about-us-768x512_c2c4yt.jpg" className="rounded-s-full p-20 h-[80%]"/>
                    </div>
                </div>
                <div className="flex flex-row justify-center w-full">
                    <div className="w-2/4 flex flex-col justify-center">
                    <h1 className="text-5xl font-serif p-10">
                        Support Our Environmental Initiatives
                    </h1>
                    <p className="text-gray-400 p-10 text-center">
                        Together, we can make our world a better place to live. Join our foundation and get involved in environmental protection activities. Choose how you want to help and join our initiatives focused on tree planting, greening urban spaces, and involve your company in environmental protection,employee volunteering, and environmental education.
                    </p>
                    </div>
                    <div className="w-2/4 p-10">
                    <div className="flex flex-row justify-center">
                    <div className="bg-slate-300 text-center rounded-3xl w-1/4 p-8 m-5 flex flex-col justify-center">
            
                        <h1 className=" font-serif font-bold">
                            Plant a Tree with us
                        </h1>
                        <p className="text-gray-500">Make a doation for planting new trees.</p>
                        <h3 className="hover:text-white underline"><a href="#">Plant with us</a></h3>
                    </div>
                    <div className="bg-red-200 text-center rounded-3xl w-1/4 p-8 m-5">
                        <h1 className=" font-serif font-bold">
                            Partnership with Business
                        </h1>
                        <p className="text-gray-500">Become a regular partner of our tree planting campaigns.</p>
                        <h3 className="hover:text-white underline"><a href="#">For Business</a></h3>
                    </div>
                    </div>
                    <div className="flex flex-row justify-center">
                    <div className="bg-orange-300 text-center rounded-3xl w-1/4 p-8 m-5">
                        <h1 className=" font-serif font-bold">
                            Coporate Volunteering
                        </h1>
                        <p className="text-gray-500">Involve your team in environmental activities.</p>
                        <h3 className="hover:text-white underline"><a href="#">Volunteering</a></h3>
                    </div>
                    <div className="bg-lime-200 text-center rounded-3xl w-1/4 p-8 m-5">
                        <h1 className=" font-serif font-bold">
                            Ecological Education
                        </h1>
                        <p className="text-gray-500">Check out how we're building environmental awarness.</p>
                        <h3 className="hover:text-white underline"><a href="#">Workshops</a></h3>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="bg-slate-400 p-10">
                    

<form className="max-w-sm mx-auto">
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No.Of.Trees</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rupees in INR</label>
    <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
     </div>
  </div>
  <div className=" text-center">
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Donate</button>
  </div>
</form>

                </div>


            </div>
            <Bot/>
            </>
        )
    }
    export default home;