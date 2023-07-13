import { useState } from 'react';
import { curtlogo } from '../assets';
import { navLinks } from '../constants';

const nav = () => {
  return (
    <nav className='w-full sm:flex items-center justify-between navbar'> 
      <a href="#"><img src={curtlogo} alt="myLogo" className='w-[50px] rounded-full' /></a>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text- text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} hover:text-cyan-300`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default nav