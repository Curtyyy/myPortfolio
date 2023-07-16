import '../styles/mainStyle.css';
//import style from '../style.js'
import { linked, github, down } from '../assets';

const hero = () => {
  return (
    <div className={`w-full flex items-center justify-center`}>
      <div className="font-poppins text-center w-full">
        <h1 className='text-[120px] font-light'>WELCOME</h1>
        <h3 className='text-[20px]'>I'm</h3>
        <h1 className='text-[60px] font-extrabold border-b w-max px-10 mx-auto text-center leading-tight'>CURT</h1>
        <h3 className='text-[20px]'>SOFTWARE ENGINEER</h3>

        <div className="flex items-center justify-between w-[250px] m-auto mt-10 p-2 outline">
          <a href="#"><img src={github} alt="github" className='w-[50px] h-[50px]' /></a>
          <a href="#">RESUME</a>
          <a href="#"><img src={linked} alt="linkedin" className='w-[50px] h-[50px]' /></a>
        </div>
      </div>
    </div>
  )
}


export default hero