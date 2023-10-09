import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin,
    faFacebook,
    faTwitter,
    faYoutube,
    faInstagram,
    
 } from '@fortawesome/free-brands-svg-icons';
    import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 
    import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
   
import { faGooglePlay, faApple  } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <div>
            <div className='bg-black text-white h-[56rem] '>
                <div className="  mt-[5rem] pt-12 ml-[6rem] text-uber text-white text-40 text-2xl font-bold font-normal leading-112">Uber</div>
                <div>
                    
                <div className='ml-[4rem] mt-6 relative'>
  <h1 className='ml-[2rem] mb-4'>Visit Help center</h1>
  <div className='absolute bg-amber-800 h-px w-[7.5rem] mt-[5rem] bottom-0 left-0 ml-8'></div>
</div>

            <div className='grid grid-cols-4 space-x-0'>
           









                <div className='grid grid-rows-9'>
                    <h1 className='mt-[1rem] pt-10 ml-[6rem] text-uber text-white text-40 text-xl font-uber font-normal leading-112'>Comapny</h1>
                    <h1 className='mt-[1rem]  ml-[6rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>About Us</h1>
                    <h1 className='mt-[1rem]  ml-[6rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Our offerings
</h1>
                    <h1 className='mt-[1rem]  ml-[6rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Newsroom
</h1>
                    <h1 className='mt-[1rem]  ml-[6rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Investors</h1>
                    <h1 className='mt-[1rem]  ml-[6rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Blog
</h1>
                    <h1 className='mt-[1rem]  ml-[6rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Careers
</h1>
                    <h1 className='mt-[1rem]  ml-[6rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>AI</h1>
                    <h1 className='mt-[1rem]  ml-[6rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Gift cards</h1>

                </div>

                <div className='flex flex-col space-y-4'>
                    <h1 className='mt-[1rem] pt-10 ml-[2rem] text-uber text-white text-40  text-xl font-uber font-normal leading-112'>Products</h1>
                    <h1 className='mt-[rem]  ml-[2rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Ride</h1>
                    <h1 className='mt-[rem]  ml-[2rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Drive
</h1>
                    <h1 className='mt-[rem]  ml-[2rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Deliver
</h1>
                    <h1 className='mt-[rem]  ml-[2rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Eat</h1>
                    <h1 className='mt-[rem]  ml-[2rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Uber for buisness
</h1>
                    <h1 className='mt-[rem]  ml-[2rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Uber frieght
</h1>
                   
                </div>

                <div className='flex flex-col space-y-4'>
                    <h1 className='mt-[1rem] pt-10 ml-[1rem] text-uber text-white text-40 text-xl font-uber font-normal leading-112'>Global citizenship
</h1>
                    <h1 className='mt-[1rem]  ml-[1rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Safety
</h1>
                    <h1 className='mt-[1rem]  ml-[1rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Diversity and Inclusion
</h1>
                    <h1 className='mt-[1rem]  ml-[1rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Sustainability
</h1>

                </div>

                <div className='flex flex-col space-y-4'>
                    <h1 className='mt-[1rem] pt-10 ml-[2rem] text-uber text-white text-40 text-xl font-uber font-normal leading-112'>Travel
</h1>
                    <h1 className='mt-[1rem]  ml-[2rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Reserve
</h1>
                    <h1 className='mt-[1rem]  ml-[2rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Airports
</h1>
                    <h1 className='mt-[1rem]  ml-[2rem] text-uber text-white text-40 text-sm font-uber font-normal leading-112 hover:text-gray-300'>Cities
</h1>

                </div>

            </div>

            <div>
           <div className='flex space-x-14 '>

           <div className='w-9 h-9 bg-black rounded-lg ml-[6rem] mt-[4rem]  hover:bg-neutral-600'>
            <FontAwesomeIcon
  icon={faLinkedin}
  className=' text-center'
  size="lg"
  style={{
    color: 'white',  // Change the color to white
    marginTop: '8px',  // Add margin top (adjust as needed)
    marginLeft: '8px',  // Add margin left (adjust as needed)
  }}
/>
            </div>

            <div className='w-9 h-9 bg-black rounded-lg ml-[6rem] mt-[4rem]  hover:bg-neutral-600'>
            <FontAwesomeIcon
  icon={faFacebook}
  className=' text-center'
  size="lg"
  style={{
    color: 'white',  // Change the color to white
    marginTop: '8px',  // Add margin top (adjust as needed)
    marginLeft: '8px',  // Add margin left (adjust as needed)
  }}
/>
            </div>

            <div className='w-9 h-9 bg-black rounded-lg ml-[6rem] mt-[4rem]  hover:bg-neutral-600'>
            <FontAwesomeIcon
  icon={faTwitter}
  className=' text-center'
  size="lg"
  style={{
    color: 'white',  // Change the color to white
    marginTop: '8px',  // Add margin top (adjust as needed)
    marginLeft: '8px',  // Add margin left (adjust as needed)
  }}
/>
            </div>

            <div className='w-9 h-9 bg-black rounded-lg ml-[6rem] mt-[4rem]  hover:bg-neutral-600'>
            <FontAwesomeIcon
  icon={faYoutube}
  className=' text-center'
  size="lg"
  style={{
    color: 'white',  // Change the color to white
    marginTop: '8px',  // Add margin top (adjust as needed)
    marginLeft: '8px',  // Add margin left (adjust as needed)
  }}
/>
            </div>

            <div className='w-9 h-9 bg-black rounded-lg ml-[6rem] mt-[4rem]  hover:bg-neutral-600'>
            <FontAwesomeIcon
  icon={faInstagram}
  className=' text-center'
  size="lg"
  style={{
    color: 'white',  // Change the color to white
    marginTop: '8px',  // Add margin top (adjust as needed)
    marginLeft: '8px',  // Add margin left (adjust as needed)
  }}
/>
            </div>

            

            <div className="absolute inset-x-10 flex items-end justify-end">
  <div className='w-[6rem] h-9 bg-black rounded-lg ml-[6rem] mt-[4rem]  hover:bg-neutral-600'>
    <div className='flex flex-row'>
    <FontAwesomeIcon
      icon={faGlobe}
      className='text-center'
      size="lg"
      style={{
        color: 'white',  // Change the color to white
        marginTop: '8px',  // Add margin top (adjust as needed)
        marginLeft: '8px',  // Add margin left (adjust as needed)
      }}
      
    />
    <p className='ml-2 mt-1.5 text-sm' >English</p>
    </div>
   
    
  </div>
  <div className='w-[7.5rem] h-9 bg-black rounded-lg ml-[3rem] mt-[4rem] mr-[4rem] hover:bg-neutral-600'>
    <div className='flex flex-row'>
    <FontAwesomeIcon
      icon={faMapMarkerAlt}
      className='text-center'
      size="lg"
      style={{
        color: 'white',  // Change the color to white
        marginTop: '8px',  // Add margin top (adjust as needed)
        marginLeft: '8px',  // Add margin left (adjust as needed)
      }}
      
    />
    <p className='ml-2 mt-1.5 text-sm' >Ahemdabad</p>
    </div>
   
    
  </div>
</div>



                
            </div>


            
              
            <div className='flex'>

                <div className='h-13 w-[9.5rem] mt-[4rem] bg-black border border-amber-800 rounded-lg ml-[6rem]'>
                    <div className='flex'>
                        <div className='mt-1.5 ml-2'> <FontAwesomeIcon icon={faGooglePlay} className="w-6 h-6 mr-2" /> 
</div>
<div className='flex flex-col'>
    <h1 className='text-xs'>GET IT ON</h1>
    <h1 className='text-lg font-bold '>Google Play</h1>

</div>
                    </div>
                </div>

                <div className='h-13 w-[9.5rem] mt-[4rem] bg-black border border-amber-800 rounded-lg ml-[1rem]'>
                    <div className='flex'>
                        <div className='mt-1.5 ml-2'> <FontAwesomeIcon icon={faApple} className="w-6 h-6 mr-2" /> 
</div>
<div className='flex flex-col'>
    <h1 className='text-xs'>Download on the</h1>
    <h1 className='text-lg font-bold '>App Store</h1>

</div>
                    </div>
                </div>

</div>

<div className='flex'>
    <div className=' mt-[4rem] ml-[6rem] text-sm text-neutral-500'>© 2023 Uber Technologies Inc.</div>
    <div  className="absolute inset-x-10 mt-[4rem] flex items-end justify-end ">
    <div className='flex mr-[4rem]'>
        <h1 className='text-sm text-neutral-500 ml-5 hover:text-neutral-600'>Privacy</h1>
        <h1 className='text-sm text-neutral-500 ml-5 hover:text-neutral-600'>Accessibility</h1>
        <h1 className='text-sm text-neutral-500 ml-5 hover:text-neutral-600'>Terms</h1>
    </div>
</div>
</div>

<div  className="absolute inset-x-10 mt-[1rem] flex items-end justify-end">
<a href="#top">
    <button aria-label="Back to top" class="bg-white text-black hover:bg-gray-100 border border-black rounded-full p-2 flex items-center">
  <span class="text-base font-medium ml-2 ">Back to top</span>
  <svg class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <title>Arrow up</title>
    <path d="M21 8.3v3.5l-7.5-5.5V22h-3V6.3L3 11.8V8.3l9-6.5 9 6.5Z"></path>
  </svg>
</button>
</a>
</div>



                
                </div>

                

            </div>
        </div>
        </div>
    )
}