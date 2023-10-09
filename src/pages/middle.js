import React from 'react';

export default function Middle(){
    return(
        <div

        className="relative w-full h-[18.5rem] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://www.hdwallpapers.in/download/building_city_dubai_skyscraper_sunset_united_arab_emirates_hd_travel-HD.jpg')`,
        }}
        
      >
          <div className="absolute m-[4rem]" >
       <h1 className='text-4xl text-white font-bold'>The Uber you know, reimagined for business</h1>
        <p className='mt-5 text-gray-200'>A platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
        
        <div class="h-[3rem] w-[8rem] bg-stone-100 text-white rounded-lg mt-10 ml-[2rem] font-semibold hover:bg-orange-300">
        <a href='/getstarted'><button class="pl-6 pt-3 text-center text-amber-900 ">Get Started</button></a>
        </div>
    
       </div>
    
      </div>

    )
}