import { useState } from 'react';
import { curtlogo, exit, menu } from '../assets';
import { navLinks } from '../constants';

const nav = () => {
  const [toggle, setToggle] = useState(false);

  const [color, setColor] = useState(false)
  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false)
  }
  window.addEventListener("scroll", changeColor)

  return (
  <header className={`fixed top-0 left-0 right-0 w-full px-6 py-2 ${color ? "bg-black bg-opacity-30" : "bg-none" } transition-all duration-300 z-50`}>
    <nav className='w-full flex items-center justify-between navbar'> 
      <a href="#home"><img src={curtlogo} alt="myLogo" className='w-[13%] ss:w-2/12 rounded-full' /></a>
      
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} hover:text-cyan-300 transition-all`}>
            <a href={`#${nav.id}`} className='transition-all duration-300'>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex justify-end cursor-pointer items-center transition-all duration-300'>
          <img src={toggle ? exit : menu} alt="menu" className='w-[50px] h-[50px] object-contain' onClick={() => setToggle((prev => !prev))} />

          <div className={`${toggle ? 'block' : 'hidden'} absolute top-16 right-2 my-auto p-3 bg-primary rounded-xl  xs:text-xs`}>
            <ul className='list-none text-center grid justify-center items-center gap-y-5'>
              {navLinks.map((nav, index) => ( <li key={nav.id} className={`font-poppins font-normal cursor-pointer text- text-white ${index === navLinks.length - 1 ? 'sm:mr-0' : 'sm:mr-10'} hover:text-cyan-300 transition-all`}>
              <a href={`#${nav.id}`} className='transition-all duration-300'>
                {nav.title}
              </a>
              </li> ))}
            </ul>
          </div>
      </div>
    </nav>
  </header>
  )
}

export default nav