import React from 'react';
import img from '../assets/img1.jpg'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='p-20 w-full  bg-[#c0affa] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"] '>
        <h1 className='font-["Neue_Montreal"] w-[88%] text-[3.5vw] leading-[4vw] tracking-normal'>Celoxis is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='flex border-t-[1px] mt-10 pt-10 justify-between font-semibold '>
            <div>
              <h1>What u can expect :</h1>
            </div>
            <div className='w-[18vw]'>
              <h1 className='font-medium'>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</h1> 
           <h1 className='font-medium mt-5'> We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
              
            </div>
            <div className='mt-10  flex flex-col'>
              <h1>Social :</h1>
                <a href='www.instagram.com'>Instagram</a>          
                <a href='www.instagram.com'>Behance</a>                
                <a href='www.instagram.com'>Linkedin</a>                
                <a href='www.instagram.com'>Facebook</a>                

            </div>
          </div>
        <div className='w-full border-t-[1px] mt-20 pt-10 flex gap-5'>
          <div className="w-1/2">
            <h1 className='text-5xl font-["Neue_Montreal"] '>Our approach</h1>
            <button className='uppercase px-10 py-4 mt-10  bg-zinc-900 rounded-full text-white'>Read More</button>
          </div>
          
          <div className="w-1/2 h-[70vh] rounded-3xl ">
            <img src={img} alt=""  className='rounded-3xl'/>
          </div>
        </div>
        </div>
  )
}

export default About
