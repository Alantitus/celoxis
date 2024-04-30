import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200 items-center flex gap-5 px-20'>
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className="card rounded-xl w-full h-full  bg-violet-600 flex justify-center items-center relative">
                <h1 className='font-["Neue_Montreal"] text-6xl font-bold '>CELOXIS</h1>
                <button className='absolute left-10 bottom-10 px-5 py-1.5 border-2 rounded-full font-semibold'>	&#169;2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
        <div className="card  rounded-xl w-1/2 h-full  bg-violet-950 flex justify-center items-center relative">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1.5 border-2 rounded-full uppercase text-sm font-semibold'>Rating 5.0 on clutch</button>
        </div>
        <div className="card rounded-xl w-1/2 h-full  bg-zinc-900 flex justify-center items-center relative">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""  className='w-28'/>
                <button className='absolute left-10 bottom-10 px-4 py-1.5 border-2 rounded-full uppercase text-sm font-semibold'>Business bootcamp alumni</button>
                </div>
         </div>
    </div>
  )
}

export default Card
