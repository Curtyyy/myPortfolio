import logoSvg from '../assets/curtlogo.svg'

const nav = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap'> 
      <a href="#"><img src={logoSvg} alt="myLogo" className='w-[50px] rounded-full' /></a>

      <div className="flex-initial sm:w-[50%] xs:w-auto"></div>
      
      <div className='xs:hidden md:block'>
          <a className='text-white hover:text-teal-200 px-2' href="#">About</a>
          <a className='text-white hover:text-teal-200 px-2' href="#">Skills</a>
          <a className='text-white hover:text-teal-200 px-2' href="#">Project</a>
          <a className='text-white hover:text-teal-200 px-2' href="#">Contact</a>
      </div>
    </nav>
  )
}

export default nav