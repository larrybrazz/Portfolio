import React, {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const Header = () => {
       const links =[
      {subject:"HOME",link:"/"},
      {subject:"ABOUT",link:"/about"},
      {subject:"PORTFOLIO",link:"/portfolio"},
      {subject:"BLOG'S",link:"/blog"},
      {subject:"CONTACT",link:"/contact"},
    ];
  const [open, setOpen] = useState(false);
  
  function okay() {
    console.log("working")
  }

    
  return (
  <div className=' shadow-md w-full fixed top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-600'>
        LarryBrazz
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-gray-400 text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <AiOutlineMenu subject={open ? 'close':'menu'}/>
      </div> 

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          links.map((link)=>(
            <li onClick={okay} key={link.subject} className='md:ml-8 md:my-0 my-7'>
              <NavLink to={link.link} className='text-gray-600 hover:text-gray-400 duration-500 cursor-pointer'>{link.subject}</NavLink>
            </li>
          ))
        }
      </ul>
      </div>
  </div>
  )
}

export default Header