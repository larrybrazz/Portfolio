import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black w-11/12 mx-auto p-4 text-white font-mono'>
        <div className='md:flex justify-between'>
           <div className=' border-4 -mt-16 flex justify-center items-center p-8' style={{width:'200px', height:'200px'}}>
            <h3 className='text-3xl font-semibold'> LarryBrazz</h3>
            </div> 
            <div className='md:flex items-center my-12'>
              <div className='space-x-6 m-6'>
              <span className='text-2xl font-semibold' >  Connect </span>
              <i className="fa-brands fa-twitter text-2xl hover:text-blue-600"></i>
              <i className="fa-brands fa-linkedin text-2xl hover:text-blue-600"></i>
              <i className="fa-brands fa-github text-2xl hover:text-red-600"></i>
              </div>
              <div className='bg-red-700 -mt-16' style={{width:'100px', height:'200px'}}></div>
            </div>
        </div>
        <div className='w-10/12 mx-auto  md:flex justify-between mt-8 font-serif'>
          <p>Designed by LarryBrazz &copy; 2022 </p>
        <div className=' flex flex-col md:flex-row md:space-x-4'>
          <span>Terms & Conditions</span>
          <span>Piracy Policy</span>
          <span>Support</span>
        </div>
        </div>
    </div>
  )
}

export default Footer