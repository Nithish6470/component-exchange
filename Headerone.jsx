import React, { useEffect } from 'react'

function Headerone() {

  return (
    <div className=' '>
      <h1 className=' text-5xl font-bold text-center mt-5 text-white'>Weather</h1>
      <div className='flex justify-center items-center mt-10 bg-white w-[80%] overflow-hidden  lg:w-[30%] mx-auto  rounded-xl'>
        <input type="text" className='p-3 w-full border-none outline-none' />
        <button className='p-3 text-white font-bold text-[18px] bg-orange-400'>search</button>
      </div>
    </div>
  )
}

export default Headerone
