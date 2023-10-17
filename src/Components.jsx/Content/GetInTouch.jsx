import React from 'react';
import SendMessage from './form/SendMessage';


const GetInTouch = () => {

  return (
    <div className='bg-slate-800 md:w-11/12 mx-auto text-white mt-4 rounded-md'>
      <div data-aos="fade-out" className='text-center'>
        <p className='text-red-500 text-2xl py-4'>Get In Touch</p>
        <h2 className='text-5xl font-bold py-3'> Connect with Me with <br /> Confidence</h2>
        </div>
        <div className="grid md:grid-cols-2 grid-col p-4 mt-8">
            <div>
                <p className='font-semibold my-4'>Please fill out the form on this section to contact with me.<br/> Or call between 9:00 GMT and 6:00 GMT, <br />
                 Monday through  Friday</p>
                <div className='flex my-8'>
                    <span><i className="fa fa-phone-volume fa-4x mr-5"></i></span>
                    <span className='text-xl font-semibold'>call me <br /> <span className='text-red-500'>+44(0)7823719099</span> </span>   
                </div>
                <div className='flex my-8'>
                    <span><i className="fa fa-envelope fa-4x mr-5"></i></span>
                    <span className='text-xl font-semibold'> Email <br /> <span className='text-red-500'><a href="mailto:lexzydavies@gmail.com?subject&body='Hello from Olanrewaju' &body='Just sating hi'">Larrybrazz70@gmail.com</a></span></span>   
                </div>
            </div>

            <div data-aos="fade-in">
              <SendMessage/>
            </div>
      </div>
 
    </div>
  )
}

export default GetInTouch