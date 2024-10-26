import React from 'react'

function Hero() {
  return (
    <>
    <main className='max-w-7xl max-h-[800px]  mx-auto my-6'>
      <section className='w-full  bg-gray-200 rounded-[30px]'>
    <div className=' grid grid-cols-1 md:grid-cols-2 justify-center items-center max-h-[800px] md:h-[500px]  gap-5'>
        <div className='flex flex-col  w-full h-full items-center justify-center '>
            <div className='max-w-64 pt-8 md:pt-3'>

      <h1 style={{fontFamily:"Poppins"}} className='text-4xl  md:text-6xl uppercase font-black'>
        let's explore <span className='bg-yellow-200 p-1 pe-6'>unique</span> clothes.</h1>
            <p className='text-sm py-4'>Live for Influential and Innovative fashion!</p>
            <a href=""><button className='bg-black text-white p-2 rounded text-xs  hover:bg-gradient-to-r from-yellow-500 to-orange-500'>SHOP NOW</button></a>
            </div>
        </div>
        <div className='flex justify-center items-end w-full h-full'>
            <img src="/banner.png" alt="" className=''/>
        </div>

    </div>
      </section>
    </main>
    </>
  )
}

export default Hero
