
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faQrcode } from '@fortawesome/free-solid-svg-icons'; 
export default function RequestNow(){
    return(
        <div>
            <header class="bg-amber-900 p-4">
        <div class="container mx-auto flex justify-between items-center">
            
            
                <div>
                  <ul class="flex space-x-4">
                <li><a href="#" class="text-black text-2xl font-semibold ml-[3rem]">Uber</a></li>
                
                    
                </ul>
              </div> 
            
            

        </div>     
    </header>

    <div className='flex flex-col mt-6 items-center'>
        <div className='text-amber-950 font-medium text-2xl basis-3'>What's your phone number or email?</div>
        <div className=' mt-4 items-center'>
            <input type="text"
        placeholder="Enter phone number or email"
        // value={inputValue}
        // onChange={handleInputChange}
        className="border border-stone-50 rounded-lg p-3 bg-zinc-100 w-[20rem]"></input>
        </div>

        <div className=' mt-4 items-center'>
            <button className="border border-black rounded-lg p-3 bg-amber-800 w-[20rem] font-semibold text-white text-lg mt-5">Continue</button>
        </div>

        <div className='flex  mt-5 space-x-4'>
        <hr className='h-[0.11rem] w-[8.5rem] mt-[1rem] bg-amber-900'/>
            <span className=' text-amber-900 mt-[0.13rem]'> or</span>
            <hr className='h-[0.11rem] w-[8.5rem] mt-[1rem] bg-amber-900'/>

        </div>

        <div className=' mt-4 items-center '>
        


            <button className="border border-zinc-200 rounded-lg p-2 bg-zinc-200 hover:bg-amber-500 w-[20rem] text-black text-md mt-1"
            
            >
                  <FontAwesomeIcon icon={faGoogle} className="w-6 h-6 mr-2   " />
                Continue with Google</button>
        </div>

        <div className=' mt-4 items-center '>
        


            <button className="border border-zinc-200 rounded-lg p-2 bg-zinc-200 hover:bg-amber-500 w-[20rem] text-black text-md "
            
            >
                  <FontAwesomeIcon icon={faApple} className="w-6 h-6 mr-2   " />
                Continue with Apple</button>
        </div>

        <div className=' mt-4 items-center '>
        


            <button className="border border-zinc-200 rounded-lg p-2 bg-zinc-200 hover:bg-amber-500 w-[20rem] text-black text-md "
            
            >
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 mr-2   " />
                Continue with Faccebook</button>
        </div>

        <div className='flex  mt-5 space-x-4'>
            <hr className='h-[0.10rem] w-[8.5rem] mt-[1rem] bg-amber-900'/>
            <span className=' text-amber-900 mt-[0.13rem]'> or</span>
            <hr className='h-[0.10rem] w-[8.5rem] mt-[1rem] bg-amber-900'/>

        </div>

        <div className=' mt-4 items-center '>
        


        <button className="border border-white rounded-lg p-2 bg-white w-[20rem] text-black text-md  hover:bg-amber-500"
        
        >
              <FontAwesomeIcon icon={faQrcode} className="w-6 h-6 mr-2 mt-2  " />
            Log in with QR Code</button>
    </div>

   <div className='flex'>
   <div className='text-xs text-amber-950 basis-2/6 mt-3  ml-[27rem]'>
    By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
    </div>
   </div>

   <div className='flex'>
   <div className='text-xs text-amber-950 basis-3/5 mt-3  ml-[7rem]'>
   This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
    </div>
   </div>

    </div>

    </div>
    


        
    )
}