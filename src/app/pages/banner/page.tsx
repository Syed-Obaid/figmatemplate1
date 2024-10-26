import React from 'react'

function Banner() {
  return (
    <>
   <main style={{backgroundColor: '#f5dd55'}} className='max-w-8xl max-h-[800px]  my-10'>
    <section className='max-w-7xl mx-auto py-8 md:py-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center max-h-[800px] md:h-[500px]'>
        <div className='flex justify-center items-end w-full h-full'>
            <img src="/banner2.png" alt="" className='h-full'/>
        </div>
        <div className='flex flex-col  w-full h-full items-center justify-center '>
            <div className='max-w-72 pt-8 md:pt-3'>

      <h1 style={{fontFamily:"Poppins"}} className='text-4xl  md:text-5xl uppercase font-black'>
     <span className='p-2 bg-white'> PAYDAY</span>
     </h1>
      <h1 style={{fontFamily:"Poppins"}} className='text-4xl  md:text-5xl uppercase font-black mt-2'>
   
      sale now</h1>
            <p className='text-sm py-4 font-bold'>Spend minimal $100 get 30% off
            voucher code for your next purchase</p>
            <p className='text-sm  font-bold'>1 June - 10 June 2021</p>
            <p className='text-xs pb-4 '>*Terms & Conditions apply</p>
            <a href=""><button className='bg-black text-white p-2 rounded text-xs  hover:bg-gradient-to-r from-yellow-500 to-orange-500'>SHOP NOW</button></a>
            </div>
        </div>
        </div>
    </section>
   </main>
    </>
  )
}

export default Banner
