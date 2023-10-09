import React, { useState } from "react";

export default function Myaccordian({question, answer}){
    const [show,setShow]=useState(false);
    return(
        <>
        <div className="main-heading flex mt-5">
            <p className="font-semibold text-lg ml-[6rem] mt-[1.2rem] text-amber-900" onClick={()=>setShow(!show)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
</svg>


            </p>
            <h1 className="font-semibold text-lg ml-[2rem] mt-[1rem] text-amber-900">{question}</h1>
        </div>
       {
        show &&  <p className="ml-[9.5rem] mr-[3rem] mt-3 text-amber-950">{answer}
    
       
        </p>
        
       }
        <hr className='h-[0.15rem] w-[70rem] ml-[6rem] mt-[2rem] bg-amber-200'/>
       
        </>
    )
}