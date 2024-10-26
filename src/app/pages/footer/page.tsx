import React from 'react'

function Footer() {
  return (
    <>
       <main className='max-w-8xl bg-black h-auto md:h-64'>
        <section className=' max-w-6xl h-auto md:h-64 mx-auto px-3 md:px-0 py-3 md:py-0'>
            <div className='grid md:grid-cols-5 w-full h-full justify-center items-center mx-auto'>
        <div className='col-span-1 md:col-span-2 mx-auto'>
            <div className='text-white'>
                <h1 className='text-2xl font-bold'>FASHION</h1>
                <p className='max-w-xs text-sm text-gray-500 py-3'>Complete your style with awesome clothes from us.</p>
                <div className='flex gap-2'>

                <a href="" className=''><svg className="h-10 w-10 text-black bg-yellow-600 p-2 rounded"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                <a href=""><svg className="h-10 w-10 text-black bg-yellow-600 p-2 rounded"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
 
            <a href=""><svg className="h-10 w-10 text-black bg-yellow-600 p-2 rounded"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>
            <a href=""><svg className="h-10 w-10 text-black bg-yellow-600 p-2 rounded"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></a>

                </div>
            </div>
        </div>
        <div className=''>
            <div>
                <h2 className='text-md text-white font-bold py-3'>Company</h2>
                <a href=""><p className='text-sm text-white py-1'>About</p>      </a>
                <a href=""><p className='text-sm text-white py-1'>Contact us</p></a>
                <a href=""><p className='text-sm text-white py-1'>Support</p></a>
                <a href=""><p className='text-sm text-white py-1'>Careers</p></a>
            </div>
        </div>
        <div className=''>
            <div>
                <h2 className='text-md text-white font-bold py-3'>Quick Link</h2>
                <a href=""><p className='text-sm text-white py-1'>Share Location</p></a>
                <a href=""><p className='text-sm text-white py-1'>Orders Tracking</p></a>
                <a href=""><p className='text-sm text-white py-1'>Size Guide</p></a>
                <a href=""><p className='text-sm text-white py-1'>FAQs</p></a>
            </div>
        </div>
        <div className='h-full pt-0 md:pt-12'>
            <div className=''>
                <h2 className='text-md text-white font-bold py-3'>Legal</h2>
                <a href=""><p className='text-sm text-white py-1'>Terms & conditions</p></a>
                <a href=""><p className='text-sm text-white py-1'>Privacy Policy</p></a>
              
            
            </div>
        </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Footer
