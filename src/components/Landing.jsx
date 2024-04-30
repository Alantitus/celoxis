import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function Landing() {
  
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='text-structure mt-40 px-20 '>
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
          return(
          <div className="masker">
            <div className=' flex items-end overflow-hidden'>
              {index==1&&(
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}} className='mr-5 w-[8vw] rounded-md h-[5.5vw] -top-[1.2vw] relative bg-violet-500'></motion.div>
              )}
          <h1 className='uppercase leading-none tracking-tighter text-[7.5vw] font-["Roboto_Condensed"] font-medium'>{item}</h1>
          </div>
       </div>)
        })}
        
      
         
      </div>
      <div className='border-t-2 border-zinc-700 mt-28 flex justify-between py-5 px-20'>
        <p className="text-md font-regular tracking-light leading-none">For public and private companies</p>
        <p className="text-md font-regular tracking-light leading-none">From the first pitch to IPO</p>
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-400 rounded-full text-sm uppercase">Start the project</div>
          <div className='w-10 h-10 rounded-full border-[2px] border-zinc-400 flex items-center justify-center'>
            <GoArrowUpRight/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
