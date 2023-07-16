import { useState } from 'react';
import { curtlogo, exit, menu } from '../assets';
import { navLinks } from '../constants';

const nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex items-center justify-between navbar'> 
      <a href="#"><img src={curtlogo} alt="myLogo" className='w-[50px] rounded-full' /></a>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} hover:text-cyan-300 transition-all`}>
            <a href={`#${nav.id}`} className='transition-all'>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex justify-end cursor-pointer items-center'>
          <img src={toggle ? exit : menu} alt="menu" className='w-[50px] h-[50px] object-contain' onClick={() => setToggle((prev => !prev))} />

          <div className={`${toggle ? 'flex' : 'hidden'} absolute top-20 p-3 right-0 min-w-full bg-primary rounded-xl`}>
            <ul className='list-none flex flex-1 justify-center items-center'>
              {navLinks.map((nav, index) => ( <li key={nav.id} className={`font-poppins font-normal cursor-pointer text- text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} hover:text-cyan-300 transition-all`}>
              <a href={`#${nav.id}`} className='transition-all'>
                {nav.title}
              </a>
              </li> ))}
            </ul>
          </div>
      </div>

    </nav>
  )
}

export default nav