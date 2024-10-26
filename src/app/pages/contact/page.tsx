import React from 'react'

function Contact() {
  return (
    <>
    <main className='max-w-8xl bg-yellow-400 h-96'>
        <section className=' max-w-6xl h-96 mx-auto '>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='max-w-xs md:max-w-lg text-center'>

                <h2 className='text-4xl md:text-4xl  text-white font-semibold'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
                <p className='text-white text-sm py-4'>Type your email down below and be young wild generation</p>

                <form className='flex item-center justify-center'>
                <input type="email" placeholder='Enter Email' className='w-md p-2 rounded-1-lg border-2 border-gray-800 focus:outline-none focus:border-red-300'/>
                <a href="#"><button type='submit' className='bg-black text-white py-4 px-6  text-xs  hover:bg-gradient-to-r from-yellow-500 to-orange-800'>SHOP NOW</button></a>
            </form>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Contact
