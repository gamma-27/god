import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import FastfoodIcon from '@mui/icons-material/Fastfood'; // Icon for "eat"
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // Icon for "package"
import FlightIcon from '@mui/icons-material/Flight'; 
import Ride from './books/ride'
import Package from './books/package'
import Eat from './books/eat'
export default function Book(){

    const [value,setValue]=React.useState(0)
    const handleTabs = (e, val) => {
        console.warn(val);
        setValue(val)
      
      };

    return(
        <>
         <header class="bg-amber-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            
            <nav>
                <div>
                  <ul class="flex space-x-4">
                {/* <li><a href="#" class="text-white text-2xl font-semibold ml-20 pt-10">Uber</a></li> */}
                <a href="#" class="text-white text-2xl font-semibold ml-20 mt-[0.3rem] ">Uber</a>
                <Tabs value={value} onChange={handleTabs} >
        <Tab label={
              <div class="flex basis-1/3 items-center">
                 <DriveEtaIcon style={{ fontSize: '1.5rem' , color:'white' }}  />
            
                <span style={{ color:'white' , fontWeight:'italic', marginLeft:'0.4rem'}}>
                  Ride
                </span>
              </div>
            } />
            <Tab label={
              <div class="flex basis-1/3 items-center">
               <LocalShippingIcon style={{ fontSize: '1.5rem' ,color:'white' }} /> 

                <span style={{ color:'white' , fontWeight:'italic', marginLeft:'0.4rem'}}>
                Package
                </span>
              </div>
            } />
            <Tab label={
              <div class="flex  basis-1/3 items-center">
                   <FastfoodIcon style={{ fontSize: '1.5rem',color:'white' }} />

                <span style={{ color:'white', fontWeight:'italic', marginLeft:'0.4rem' }}>
                  Eat
                </span>
              </div>
            } />

<Tab label={
              <div class="flex  basis-1/3 items-center">
              <FlightIcon style={{ fontSize: '1.5rem',color:'white' }} />

                <span style={{ color:'white', fontWeight:'italic' , marginLeft:'0.2rem'}}>
                  Charter
                </span>
              </div>
            } />
        
        </Tabs>
                
                </ul>
              </div> 
            </nav>
            <div class="flex items-center  mr-[1rem]">
           
           <div class="flex items-center h-10 w-[6.5rem] text-white rounded-full   "> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
</svg>

           <a href="#" class="text-white font-semibold text-sm  pl-2">Help</a>
           </div>

           <div class="flex items-center h-10 w-[6.5rem] text-white rounded-full  "> 
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-9 h-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

           </div>

           

         
    
        </div> 

        </div>     
    </header>

    <div>
      {
        value===0&&<Ride/>

      }


    </div>


        </>
    );
}