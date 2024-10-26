import React from 'react'

function NewArrival() {
  return (
    <>
      <main className='max-w-7xl mx-auto'>
        <div className=' my-10 '>
            <h1 className='text-2xl font-extrabold'>NEW ARR<span className='border-b-2 border-solid border-yellow-400'>IVALS</span></h1>
        </div>
        <section className='grid grid-cols-1 md:grid-cols-3 '>
            <div className='max-w-sm h-auto pb-4'>
                <img src="/card1.png" alt="" className='w-full h-96 object-contain' />
                <div className='w-72 text-center pt-3'>
                    <h3 className='text-md font-bold'>Hoodies & Sweatshirt</h3>
                </div>
                <div className='flex justify-around w-full'>
                    <a href="" className='text-sm text-gray-400'>Explore Now</a>
                    <span className='text-end text-xs text-gray-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</span>
                    
                    </div>
            </div>
            <div className='max-w-sm h-auto pb-4'>
                <img src="/card2.png" alt=""  className='w-full h-96 object-contain' />
                <div className='w-64 text-center pt-3'>
                    <h3 className='text-md font-bold'>Coats & Parkas</h3>
                </div>
                <div className='flex justify-around w-full'>
                    <a href="" className='text-sm text-gray-400'>Explore Now</a>
                    <span className='text-end text-xs text-gray-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</span>
                    
                    </div>
            </div>
            <div className='max-w-sm h-auto pb-4'>
                <img src="/card3.png" alt=""  className='w-full h-96 object-contain' />
                <div className='w-64 text-center pt-3'>
                    <h3 className='text-md font-bold'>Tees & T-Shirt</h3>
                </div>
                <div className='flex justify-around w-full'>
                    <a href="" className='text-sm text-gray-400'>Explore Now</a>
                    <span className='text-end text-xs text-gray-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</span>
                    
                    </div>
            </div>

        </section>
      </main>
    </>
  )
}

export default NewArrival
