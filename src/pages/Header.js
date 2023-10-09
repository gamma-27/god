
import React from 'react';
export default function Header(){
    return(
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
    )

}
