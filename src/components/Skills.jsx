import React from 'react'
import { skills } from '../constants';

const Skills = () => {
  return ( 
    <div className='w-full flex items-center justify-center'>
      <div className='font-poppins text-center w-full'>
        <h1 className='text-[30px] font-extrabold border-b w-max mx-auto leading-10 mb-6'>SKILLS</h1>

        <div className='text-center w-[80%] grid grid-cols-2 grid-flow-row gap-4 m-auto my-5 ss:p-2 ss:my-10 ss:grid-cols-3'>
          {skills.map((skill, index) => (
            <div key={skill.id} className='grid items-center justify-center grid-cols-1 grid-flow-row gap-y-2'>
              <img src={skill.img} alt={skill.id} className='w-[40px] h-[40px] ss:w-[80px] ss:h-[80px] m-auto mt-0 ' />
              <h6 className='text-[16px] row-start-3 row-end-3 h-11 ss:text-[18px] ss:h-14'>{skill.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills