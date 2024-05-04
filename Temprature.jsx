import React from 'react'

function Temprature() {
  return (
    <div className='text-white'>
        <h1 className=' mt-5 text-2xl flex justify-center'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            </span>
            Mayiladuthurai
        </h1>
        <div className='text-center'>
            <h1 className=' text-8xl mt-10'>32°C</h1>
        </div>
    </div>
  )
}

export default Temprature
