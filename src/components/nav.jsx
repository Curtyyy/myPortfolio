import logoSvg from '../assets/curtlogo.svg'

const nav = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap'> 

      <a href="#"><img src={logoSvg} alt="myLogo" className='w-[50px] rounded-full ' /></a>

      <div className="flex-initial sm:w-[60%] xs:w-auto"></div>

      <div>
        <a className=' text-teal-200 hover:text-white' href="#">About</a>
      </div>
      <div>
        <a className=' text-teal-200 hover:text-white' href="#">Project</a>
      </div>
      <div>
        <a className=' text-teal-200 hover:text-white' href="#">Service</a>
      </div>
      <div>
        <a className=' text-teal-200 hover:text-white' href="#">Contact</a>
      </div>
        
    </nav>
  )
}

export default nav