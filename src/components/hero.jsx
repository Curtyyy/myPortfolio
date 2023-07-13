import '../styles/mainStyle.css';
//import style from '../style.js'
import { linked, github } from '../assets';

const hero = () => {
  return (
    <div className={`font-robotoMonov`}>
      <div className="">
        <h1 className='text-[120px] font-thin tracking-wider'>WELCOME</h1>
        <h6 className='font-poppins text-[22px] font-bold tracking-widest'>I'm</h6>
        <h3 className=' font-poppins font-extrabold letter-space text-[60px] border-b w-max mx-auto px-[3rem] leading-[1]'>CUR<span className='letter-t'>T</span></h3>
        <h6 className='font-poppins text-[22px] font-bold tracking-[8px] py-2'>WEB DEVELOPER</h6>
      </div>

      <div className="">
        <div className="">
          <a href="#"><img src={github} alt="github" width={50} className='text-white' /></a>
        </div>
          <div>
            <a href="#">RESUME</a>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={50} id="linked"><path d="M28 1c1.654 0 3 1.346 3 3v24c0 1.654-1.346 3-3 3H4c-1.654 0-3-1.346-3-3V4c0-1.654 1.346-3 3-3h24m0-1H4C1.8 0 0 1.8 0 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z"></path><path d="M24.299 23.921v-6.137c0-3.288-1.755-4.818-4.096-4.818-1.889 0-2.735 1.039-3.206 1.768v-1.517h-3.558c.047 1.005 0 10.704 0 10.704h3.558v-5.978c0-.319.023-.639.117-.867.257-.639.842-1.301 1.825-1.301 1.288 0 1.803.981 1.803 2.42v5.727l3.557-.001zM9.69 11.756c1.24 0 2.013-.823 2.013-1.85-.023-1.05-.773-1.849-1.99-1.849s-2.012.799-2.012 1.849c0 1.028.772 1.85 1.967 1.85h.022zm1.779 12.165V13.217H7.912v10.704h3.557z"></path></svg>
          </div>
      </div>
    </div>
  )
}


export default hero