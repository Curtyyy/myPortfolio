import React from 'react'
import { skills } from '../constants';

const Skills = () => {
  return ( 
    <div className='w-full flex items-center justify-center'>
      <div className='font-poppins text-center w-full'>
        <h1 className='text-[30px] font-extrabold border-b w-max mx-auto leading-10 mb-6'>SKILLS</h1>

        <div className='text-center w-[80%] grid grid-cols-3 grid-flow-row gap-4 p-2 m-auto my-10'>
          {skills.map((skill, index) => (
            <div key={skill.id} className='grid items-center justify-center'>
              <img src={skill.img} alt={skill.id} className='w-[80px] h-[80px] m-auto' />
              <h6 className='text-[18px] py-2'>{skill.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills