import React, { useState } from 'react'
import img from '../assets/Fyde_Illustration_Crypto_2-663x551.png'
import img1 from '../assets/Vise_front2-663x551.jpg'
import { motion, useAnimate, useAnimation } from 'framer-motion';


function Featured() {
  const cards=[useAnimation(),useAnimation()]
    const handleHover=(index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd=(index)=>{
      cards[index].start({y:"100%"})
  }
  return (
    <div data-scroll data-scroll-section className="w-full py-20 bg-violet-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-10">
        <h1 className='text-5xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
        </div>
       <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">
              <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)}  className="cardcontainer relative  w-1/2 h-[75vh] ">
                <h1 className='absolute left-full flex overflow-hidden top-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl font-["Roboto_Condensed"]  font-semibold'>
                   {"FYDE".split('').map((item,index)=>
              <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.05}}>{item}</motion.span>)}
              </h1>
                <motion.div whileHover={{
                    scale: 0.9,
                 transition: {ease:[0.22, 1, 0.36, 1], duration: 1 }, }} className='card w-full h-full rounded-xl overflow-hidden'>
                    <img src={img} alt="" className='w-full h-full bg-cover' />
                </motion.div>
              </motion.div>
              <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative  w-1/2 h-[75vh]">
              <h1 className='absolute overflow-hidden flex right-full top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] text-8xl font-["Roboto_Condensed"] font-semibold'>
              {"VISE".split('').map((item,index)=>
              <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.05}}>{item}</motion.span>)}
              </h1>
                <motion.div  whileHover={{
                    scale: 0.9,
                 transition: {ease:[0.22, 1, 0.36, 1], duration: 1 }, }}  className='card w-full h-full rounded-xl overflow-hidden'>
                <img src={img1} alt="" className='w-full h-full bg-cover'/>
                </motion.div>
              </motion.div>  
            </div>
       </div>
      
    </div>
  );
}

export default Featured
