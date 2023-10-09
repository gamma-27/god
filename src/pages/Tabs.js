import React,{ useState } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
// import MuiTab from '@mui/material/Tab';



export default function CustomTab() { // Rename the function to CustomTab

  
  const [value,setValue]=React.useState(0)
  const [bgImageUrl, setBgImageUrl] = useState(
    'https://thumbs.dreamstime.com/b/young-woman-driving-car-sunset-using-mobile-phone-travel-concept-169398058.jpg'
  );
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val)
    if (val === 0) {
      setBgImageUrl('https://c8.alamy.com/comp/GENYMD/young-chinese-man-opening-car-door-GENYMD.jpg'); // Replace with your image URL
    } else if (val === 1) {
      setBgImageUrl('https://media.istockphoto.com/photos/selective-focus-of-bearded-man-opening-car-door-in-car-showroom-picture-id1183325357?k=6&m=1183325357&s=612x612&w=0&h=yqZ0NkNEce9YRXO1-hgZLxguahAm4HYhQ7keBOSJelI='); // Replace with your image URL
    } else if (val === 2) {
      setBgImageUrl('http://www.talkgeo.com/wp-content/uploads/hand-holding-car-key.jpg'); // Replace with your image URL
    }
  };

  return (
    
<div   className="relative w-full h-screen bg-no-repeat bg-cover"
  style={{
    backgroundImage: `url('${bgImageUrl}')`,
     }}>
    
    <div className="absolute top-20 left-[4rem] h-[31rem] w-[36rem]  bg-white p-4">
      
      
        <Tabs value={value} onChange={handleTabs} >
        <Tab label={
              <div class="flex basis-1/3 flex-col items-center">
                <DriveEtaIcon fontSize="medium" style={{color:"black"}} />
                <span style={{ color:'black' , fontWeight:'bold'}}>
                  Ride
                </span>
              </div>
            } />
            <Tab label={
              <div class="flex flex-col basis-1/3 items-center">
                <svg  style={{color:"black"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
</svg>

                <span style={{ color:'black' , fontWeight:'bold'}}>
                Drive or Deliver
                </span>
              </div>
            } />
            <Tab label={
              <div class="flex flex-col basis-1/3 items-center">
                <svg style={{color:"black"}}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z" clip-rule="evenodd" />
</svg>

                <span style={{ color:'black', fontWeight:'bold' }}>
                  Rent you fleet
                </span>
              </div>
            } />
        
        </Tabs>
      
      <TabPanel value={value} index={0}>

      <div>
        <h1 class="text-5xl text-amber-900  font-bold items-center mx-10 my-5 font-sans-serif">Request a ride now</h1>
        <div class="relative "> 
        <div class="absolute ml-[2rem] inset-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        </div>
        <input className=" mt-[2rem] ml-[2rem] h-[3rem] outline-none outline-white w-[30rem] bg-gray-100 text-gray-500 flex flex-row items-center px-9 space-x-4 " placeholder='Enter pickup location'/>
        <div class="absolute ml-[2rem] inset-x-[28rem] inset-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clip-rule="evenodd" />
</svg>

        </div>

        </div>

        <div class="relative "> 
        <div class="absolute ml-[2rem] inset-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
</svg>

        </div>
        <input className=" mt-[2rem] ml-[2rem] h-[3rem] outline-none outline-white w-[30rem] bg-gray-100 text-gray-500 flex flex-row items-center px-9 space-x-4 " placeholder='Enter Destination'/>
        

        </div>
        


       </div>
     
     <div class="flex">
      <div class="h-[3rem] w-[10rem] bg-amber-900 text-white rounded-lg mt-10 ml-[3rem] font-semibold">
<a href='/requestnow'><button class="mx-7 my-3 items-center">Request Now</button></a>
      </div>

      <div class="h-[3rem] w-[12rem] bg-gray-200 text-black rounded-lg mt-10 ml-[3rem] font-semibold">
<button class="mx-7 my-3 items-center">Schedule for later</button>
      </div>

     </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h1 class=" m-2 mt-[2rem] text-6xl text-black font-sans font-bold">Get in the driver’s seat and get paid</h1>
          <p class="text-gray-500 ml-[1.5rem] mt-[2rem] font-italic">Drive on the platform with the largest network of active riders.</p>
          <div class="h-[3rem] w-[11rem] bg-black text-white rounded-lg mt-10 ml-[3rem] font-semibold">
          <a href='/drive'><button class="pl-6 pt-3 text-center">Sign Up to Drive</button></a>
      </div>
      <Tabs value={0} className="text-black mt-3">
      <Tab label={
              <div class="flex flex-col items-center mt-4 text-xs ml-4">
               
                <span style={{ color:'black' , fontWeight:'semibold' }}>
                Learn more about driving and delivering
                </span>
              </div>
            } />
    
        
        
      </Tabs>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <h1 class=" m-2 mt-[2rem] text-6xl text-black font-sans font-bold">Make money by renting out your car</h1>
          <p class="text-gray-500 ml-[1.5rem] mt-[2rem] font-italic">Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
          <div class="h-[3rem] w-[8rem] bg-black text-white rounded-lg mt-10 ml-[2rem] font-semibold">
          <a href='/started'><button class="pl-6 pt-3 text-center">Get Started</button></a>
      </div>
      
        </div>
      </TabPanel>
      </div>
      
      </div>
    
  );
}


function TabPanel(props){
  const {children,value,index}=props
  return(
    <div>
      {
        value===index && (
          <h1>{children}</h1>
        )
      }
    </div>
  )
}