import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export default function Table(){
const [value,SetValue]=React.useState(2);
    const handleTabs=(e,val)=>{
        console.warn(val)
        SetValue(val)
    }

    const [values,SetValues]=React.useState(1);
    const handleTabss=(e,val)=>{
        console.warn(val)
        SetValues(val)
    }

    const [valuess,SetValuess]=React.useState(1);
    const handleTabsss=(e,val)=>{
        console.warn(val)
        SetValuess(val)
    }
    
    return(
       <div>
         <div className=" bg-white "
        
     
       
        >
      <h1 className="text-4xl text-amber-900 font-semibold mt-14 ml-16" style={{ fontFamily: 'UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '32px', fontWeight: '700', lineHeight: '40px' }}>
    Focused on Safety, wherever you go
  </h1>
       <div className='flex'>
          <div  className="relative mt-6 ml-16 h-[21rem] w-[34rem]"
          style={{
            backgroundImage: `url('https://www.drivejohnsons.co.uk/wp-content/uploads/2020/08/face-mask-car.jpg%22')`,
          }}>
              <div className='flex'>
             <div className="text-lg text-black font-italic mt-[22rem] ml-4 basis-12/5" style={{fontSize: '20px', fontWeight: '500'}} > <h1>Our commitment to your safety</h1>
             <p className='text-sm text-gray-500 text-italic mt-2 mb-6'>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
             <Tabs position="static" value={value} onChange={handleTabs}>
              <Tab label={
                   <div class="flex flex-col items-center mt-4 text-xs ml-5">
                 
                   <span style={{ color:'black' , fontWeight:'semibold' }}>
                   Read about our Community Guidelines
                   </span>
                 </div>
              }/>
               <Tab label={
                   <div class="flex flex-col items-center mt-3 text-xs ml-0">
                 
                   <span style={{ color:'black' , fontWeight:'semibold' }}>
                   See all safety features
                   </span>
                 </div>
              }/>
          </Tabs>
             </div>
  
          </div>
  
          </div>
  
  
  
          <div  className="relative mt-6 ml-16 h-[21rem] w-[34rem]"
          style={{
            backgroundImage: `url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_398,h_266/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png")`,
          }}>
              <div className='flex'>
             <div className="text-lg text-black font-italic mt-[22rem] ml-4 basis-12/5" style={{fontSize: '20px', fontWeight: '500'}} > <h1>Setting 10,000+ cities in motion</h1>
             <p className='text-sm text-gray-500 text-italic mt-2 mb-6'>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
             <Tabs position="static" value={values} onChange={handleTabss}>
              <Tab label={
                   <div class="flex flex-col items-center mt-4 text-xs ml-5">
                 
                   <span style={{ color:'black' , fontWeight:'semibold' }}>
                   View all cities
                   </span>
                 </div>
              }/>
               
          </Tabs>
          
         
             </div>
            
   </div>
   </div>
        </div>
       

        <div className='flex mt-[15rem] ml-[5rem]'>

        <div class="flex basis-1/3 flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
                <span style={{ color:'black' , fontWeight:'bold'}}>
                <h1 className='ml-[8.5rem]'>  About Us</h1>
                <p class="text-gray-600 font-normal italic ml-4 mt-3">Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>

                </span>
                <Tabs position="static" value={valuess} onChange={handleTabsss}>
              <Tab label={
                   <div class="flex flex-col items-center mt-4 text-xs ml-0">
                 
                   <span style={{ color:'black' , fontWeight:'semibold' }}>
                   Learn more about Uber
                   </span>
                 </div>
              }/>
               
          </Tabs>
              </div>


            


            <div className='flex basis-1/3 flex-col items-center ml-[2rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clip-rule="evenodd" />
  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
</svg>

<span style={{ color:'black' , fontWeight:'bold'}}>
            <h1 className='ml-[8.5rem]'>  Newsroom</h1> 
                <p class="text-gray-600 font-normal italic ml-4 mt-3">See announcements about our latest releases, initiatives, and partnerships.</p>
                </span>

                <Tabs position="static" value={valuess} onChange={handleTabsss}>
              <Tab label={
                   <div class="flex flex-col items-center mt-4 text-xs ml-0">
                 
                   <span style={{ color:'black' , fontWeight:'semibold' }}>
                   Go to Newsroom
                   </span>
                 </div>
              }/>
               
          </Tabs>


            </div>

            <div className='flex basis-1/3 flex-col items-center ml-[2rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
</svg>

        <span style={{ color:'black' , fontWeight:'bold'}}>
                <h1 className='ml-[7rem]'>  Global citizenship</h1> 
                  <p class="text-gray-600 font-normal italic ml-5 mt-3">Read about our commitment to making a positive impact in the cities we serve.</p>
                </span>
                <Tabs position="static" value={valuess} onChange={handleTabsss}>
              <Tab label={
                   <div class="flex flex-col items-center mt-4 text-xs ml-0">
                 
                   <span style={{ color:'black' , fontWeight:'semibold' }}>
                   See our partnerships

                   </span>
                 </div>
              }/>
               
          </Tabs>
            </div>

          </div>

  
      
        </div>
       </div>
      

    )
}