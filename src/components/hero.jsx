import '../styles/mainStyle.css';
//import style from '../style.js'
import { linked, github, } from '../assets';

const hero = () => {
  return (
    <div className={`w-full flex items-center justify-center`}>
      <div className="font-poppins text-center w-full">
        <h1 className='font-light text-[60px] ss:text-[90px] sm:text-[140px]'>WELCOME</h1>
        <h3 className='text-[20px] ss:text-[30px] sm:text-[40px]'>I'm</h3>
        <h1 className='text-[40px] ss:text-[65px] sm:text-[80px] font-extrabold border-b w-max px-10 mx-auto text-center leading-tight'>CURT</h1>
        <h3 className='text-[16px] ss:text-[20px] sm:text-[25px]'>SOFTWARE ENGINEER</h3>

        <div className="flex items-center justify-between gap-2 w-[200px] ss:w-[300px] m-auto mt-10 p-2 outline rounded-xl ">
          <a href="#" className='flex justify-start w-2/6 h-2/6 ss:w-1/6 ss:h-1/6 hover:bg-primary rounded transition-all duration-300'><img src={github} alt="github" className='w-full' /></a>
          <a href="#" className=' text-[16px] rounded-full px-2 py-1 mx-2 bg-primary ss:text-[22px] ss:px-4 hover:bg-opacity-30 hover:outline transition-all duration-300'>RESUME</a>
          <a href="#" className='flex justify-end w-2/6 h-2/6 ss:w-1/6 ss:h-1/6 hover:bg-primary rounded transition-all duration-300'><img src={linked} alt="linkedin" className='w-full' /></a>
        </div>
      </div>
    </div>
  )
}


export default hero