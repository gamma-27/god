import React from "react";

export default function Ride(){
    return(
        <>
        <div className="h-[18rem] w-[20rem] outline mt-8 ml-10 rounded-lg outline-amber-800">
            <h1 className="pt-[0.7rem] ml-5 font-bold text-xl text-amber-900">Get a ride</h1>
            <div class="relative "> 
            <div class="absolute ml-[0.9rem] inset-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </div>
            <input className=" mt-[0.8rem] mx-5  h-[3rem] outline-none outline-white w-[18rem] rounded-lg bg-gray-100 text-gray-500 flex flex-row items-center px-9 space-x-4 hover:outline-black " placeholder='Enter pickup location'/>
        
        </div> 

        <div class="relative "> 
            <div class="absolute ml-[1.3rem] mt-1 inset-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="2rem" height="2rem" viewBox="0 0 24 24" stroke="black" stroke-width="2rem" class="w-4 h-4">
  <rect x="1" y="1" width="6" height="6" fill="none" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </div>
            <input className=" mt-[0.8rem] mx-5  h-[3rem] outline-none outline-white w-[18rem] rounded-lg bg-gray-100 text-gray-500 flex flex-row items-center px-9 space-x-4 hover:outline-black " placeholder='Dropoff location'/>
        
        </div>


        <div class="relative mt-7 flex "> 
    <button className="mt-[0.3rem] mx-5 h-[3rem] w-[18rem] rounded-lg bg-black text-white flex flex-row items-center px-9 space-x-4 text-lg justify-center font-semibold">Search</button>
</div>
            
        </div>
        </>
    )
}