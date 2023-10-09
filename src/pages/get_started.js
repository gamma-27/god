import React, { useState } from "react";
import { question } from "./questions";
import Accordian from "./accordian";
import Footer from './footer';
export default function Started(){

  const [data,setData]=useState(question);
    return(
        <div>
               <header class="bg-amber-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            
            <nav>
                <div>
                  <ul class="flex space-x-4">
                <li><a href="#" class="text-white text-2xl font-semibold ml-20">Uber</a></li>
                <li><a href="#" class="text-white font-semibold text-sm  pl-5">Home</a></li>
                <li><a href="#" class="text-white font-semibold text-sm pl-4">Comapny</a></li>
                 <li><a href="#" class="text-white font-semibold text-sm  pl-4">Safety</a></li>
                 <li><a href="#" class="text-white font-semibold text-sm  pl-4 ">Help</a></li>
              
                    
                </ul>
              </div> 
            </nav>
            <div class="flex items-center space-x-4 mr-[3rem]">
            <div class="flex items-center  h-10 w-[4.5rem] text-white rounded-full  hover:bg-amber-700 ">
                
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                     </svg>
               
                <a href="" class="text-white font-semibold text-sm  pl-3">EN</a>
            </div>
           <div class="flex items-center h-10 w-[6.5rem] text-white rounded-full  hover:bg-amber-700 "> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

           <a href="#" class="text-white font-semibold text-sm  pl-2">Product </a>
           </div>

           <div class="flex items-center h-10 w-[4.5rem] text-white rounded-full  hover:bg-amber-700 ">
            <a href="#" class="text-white font-semibold text-sm  pl-4">Log In </a></div>
            
            <div class=" text-center flex items-center h-10 w-[5rem] bg-white hover:bg-zinc-400 text-black rounded-full ">
            <a href="#" class="text-center font-semibold text-sm  pl-4 ">Sign Up </a></div>
            
        </div> 

        </div>     
    </header>

    <div
    className="relative w-full h-[35rem] bg-no-repeat bg-cover shadow-2xl shadow-black"
    style={{
      backgroundImage: `url('https://www.hdnicewallpapers.com/Walls/Big/BMW/White_BMW_GTS3_Cars_Wallpapers.jpg')`,
       boxShadow: '80px 0px 30px rgba(140, 75, 19, 0.8)', 
    }}
    
    >
        <div className="flex">
            <div className="font-bold text-5xl mt-[4rem] ml-[6rem] text-black basis-2/6">Get your vehicles on the road and you could earn more</div>
            </div>
            <div className="flex">
            <p className="font-semibold text-md  mt-[2.5rem] ml-[6rem] text-black basis-2/6">Whether you own a single vehicle or a fleet of several, you can maximize your earning potential by making them available to drivers who use the Uber app.</p>
            </div>

            
            <div class="h-[3rem] w-[9rem] bg-amber-800 text-white rounded-lg mt-10 ml-[6rem] hover:bg-amber-600 font-semibold">
          <a href='/started'><button class="pl-5 pt-3 text-center ">Sign up today</button></a>

          

          
      </div>

      <div className=" mt-[1rem] ml-[6rem]">
        <h1 className="text-black text-sm font-semibold">Already have an account? Sign in here</h1>
        <hr className='h-[0.15rem] w-[15rem]  bg-amber-800'/>
      </div>
            
      

    </div>


    <div className="bg-white mt-[5rem] w-full h-[10rem]">

   
    <div className='grid grid-cols-3 space-x-1 mr-[4rem]'>
        <div className='flex flex-col'>
        <div className='ml-[4.4rem] mt-[2rem]'>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_72,h_72/v1682380168/assets/41/ecc2ef-d316-46db-82de-23c084614415/original/LandingPage_MoneyArrowUp-Icon_Desktop_48x48-2x.png" alt="Image Description" class="h-[3rem] w-[3rem]" />
                </div>

                <div className='font-semibold text-xl ml-[4rem] mt-[0.9rem] text-amber-900'>
                Increase your fleet earnings
                </div>

                <div className='font-base text-amber-950 text-md ml-[4rem] mt-[0.9rem]'>
                    <p>Whether you’re just getting started or already on the road, Uber makes it easy to maximize your earning potential, regardless of your fleet size.</p>
                </div>

        </div>

        <div className='flex flex-col'>
        <div className='ml-[4.4rem] mt-[2rem]'>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_72,h_72/v1682534579/assets/90/5b26f0-bcb5-40e3-9265-d2a14c79b0ad/original/LandingPage_Notes-Icon_Desktop_48x48-2x.png" alt="Image Description" class="h-[3rem] w-[3rem]" />
                </div>

                <div className='font-semibold text-xl ml-[4rem] mt-[0.9rem] text-amber-900'>
                Analyze fleet performance
                </div>

                <div className='font-base text-md text-amber-950 ml-[4rem] mt-[0.9rem]'>
                    <p>Manage drivers and help ensure that as many vehicles are on the road as possible. You can add, edit, or remove drivers as needed.</p>
                </div>

        </div>

        <div className='flex flex-col '>
        <div className='ml-[4.4rem] mt-[2rem] '>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_72,h_72/v1682534510/assets/eb/46d4f1-668c-4934-b722-7c998742f183/original/LandingPage_ID-Cards-Icon_Desktop_48x48-2x.png" alt="Image Description" class="h-[3rem] w-[3rem]" />
                </div>

                <div className='font-semibold text-xl ml-[4rem] mt-[0.9rem] text-amber-900'>
                Use Uber resources—for free

                </div>

                <div className='font-base text-amber-950 text-md ml-[4rem] mt-[0.9rem]'>
                    <p>Check your balance, track transactions, and download earnings reports, so you can make more-informed decisions.</p>
                </div>

        </div>

    </div>

    



    </div>
    <div className="bg-white  h-[73rem]">
    <div>
      <div className="font-bold text-4xl mt-[10rem] ml-[4rem] text-amber-900">
        
        Tools for success at every step
      </div>
      <div className="flex">
      <div className="text-base mt-[1rem] ml-[4rem] text-amber-600 basis-2/4">
      Uber’s Supplier Portal allows you to seamlessly set up your business, get vehicles on the road, and help you increase fleet visibility.
      </div>
      </div>

      <div className="grid grid-col-4">
        <div className="flex space-x-3">
          
          <div className="mt-[2rem] ml-[5rem] ">
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_532,h_299/v1682534932/assets/e0/8425db-4529-4e4a-b5f1-2e920b00b61b/original/LandingPage_Step01-Phone_Desktop_360x202-2x.png" alt="Image Description" className="rounded-full h-[12rem] w-[12 rem]" />
          </div>
          <div className="flex flex-col">
          <div className="mt-[2rem] ml-[3rem]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 8 8">
        <rect width="100%" height="100%" rx="1" ry="1"/>
      </svg></div>
      
      <div className="ml-[3.18rem] mt-[0.02rem]">
      <div class="h-[15rem] border-l-2 border-amber-950"></div>
      </div>
     

      
          </div>
          <div className="flex flex-col ml-[4rem] mt-[2rem]">
        <div className="font-semibold text-xl ml-[4rem]  text-amber-950">Sign up easily</div>
        <div className="font-semibold text-md mt-[0.7rem] ml-[4rem]  text-amber-800">Sign up for free online and register your vehicle, so you can start earning.</div>
      
      </div>
      </div>

      <div className="flex space-x-3">
          
          <div className="mt-[2rem] ml-[5rem] ">
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_532,h_299/v1682535018/assets/63/90b260-d83e-4720-9e4b-87e5495939dd/original/LandingPage_Step02-Car_Desktop_360x202-2x.png" alt="Image Description" className="rounded-full h-[12rem] w-[12 rem]" />
          </div>
          <div className="flex flex-col">
          <div className="ml-[3rem]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 8 8">
        <rect width="100%" height="100%" rx="1" ry="1"/>
      </svg></div>
      
      <div className="ml-[3.18rem] mt-[0.02rem]">
      <div class="h-[15rem] border-l-2 border-amber-950"></div>
      </div>
     

      
          </div>
          <div className="flex flex-col ml-[4rem] mt-[2rem]">
        <div className="font-semibold text-xl ml-[4rem]  text-amber-950">Add your vehicle(s)</div>
        <div className="font-semibold text-md mt-[0.7rem] ml-[4rem]  text-amber-800">After signup, upload necessary documents and get your vehicles ready to go online.</div>
      
      </div>
      </div>

      <div className="flex space-x-3">
          
          <div className="mt-[2rem] ml-[5rem] ">
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_532,h_299/v1682535076/assets/06/c4a82f-c8ee-46ac-8795-908e4e6bc037/original/LandingPage_Step03-Graph_Desktop_360x202-2x.png" alt="Image Description" className="rounded-full h-[13rem] w-[25.8rem]" />
          </div>
          <div className="flex flex-col">
          <div className="ml-[3rem]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 8 8">
        <rect width="100%" height="100%" rx="1" ry="1"/>
      </svg></div>
      
      <div className="ml-[3.18rem] mt-[0.02rem]">
      <div class="h-[15rem] border-l-2 border-amber-950"></div>
      </div>
     

      
          </div>
          <div className="flex flex-col ml-[4rem] mt-[2rem]">
        <div className="font-semibold text-xl ml-[4rem]  text-amber-950">Get analytic insights</div>
        <div className="font-semibold text-md mt-[0.7rem] ml-[4rem]  text-amber-800">Track trip information and earnings at driver and vehicle levels. Use our Live Map to see where drivers are in real time.</div>
      
      </div>
      </div>

      <div className="flex space-x-3">
          
          <div className="mt-[2rem] ml-[9.5rem] ">
          <img src="https://cdn2.iconfinder.com/data/icons/gaming-and-beyond-part-2-1/80/Message_gray-512.png"  alt="Image Description"  className="rounded-full h-[13rem] w-[20.8rem]" />
          </div>
          <div className="flex flex-col">
          <div className="ml-[6.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 8 8">
        <rect width="100%" height="100%" rx="1" ry="1"/>
      </svg></div>
      
     
     

      
          </div>
          <div className="flex flex-col ml-[4rem] mt-[2rem]">
        <div className="font-semibold text-xl ml-[4rem]  text-amber-950">Receive in-app support</div>
        <div className="font-semibold text-md mt-[0.7rem] ml-[4rem]  text-amber-800">Receive live in-app support, chat with our agents on the phone, or go to your nearest support centre to get answers to your questions or to address concerns.</div>
      
      </div>
      </div>
      
      

      </div>




    </div>
    </div>

    <div className="bg-amber-300  h-[15rem] w-full ">
        <div className="mt-8 p-9 text-center ">
          <h1 className="font-bold text-4xl text-amber-900  mt-5">Start earning with your vehicles</h1>
          <div class="h-[3rem] w-[9rem] items-center bg-amber-800 text-white rounded-lg mt-10 ml-[32rem] hover:bg-amber-600 font-semibold">
          <a href='/started'><button class="pl-1 pt-3 text-center ">Sign up today</button></a>

          </div>
        </div>
        

      </div>

      <div className="bg-white  h-[37rem]">
        <div className="font-bold text-4xl text-amber-900 ml-[4rem] mt-14">Frequently asked questions</div>
        <Accordian/>


      </div>


    <div>
      <Footer/>
      </div>

    <div className="fixed bottom-0 left-0 right-0 p-4 bg-amber-950 ">
        <button className="bg-white hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded shadow w-full">
          Get Started
        </button>
      </div>

      

     
        </div>
    )
}