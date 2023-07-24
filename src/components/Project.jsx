import { useState } from 'react';
import React from 'react'
import { projects } from '../constants';

const Project = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='font-poppins text-center w-full'>
        <h1 className='text-[30px] font-extrabold border-b w-max mx-auto leading-10 mb-6'>PROJECTS</h1>

        <div className='text-center w-[90%] grid grid-cols-4 grid-flow-row gap-4 p-2 m-auto my-10'>
          <div className='col-span-4 p-3 relative items-center justify-center w-full h-[300px] outline'>
          <div className={`absolute bottom-0 left-0 right-0 top-0 grid place-items-center font-thin `}>Projects will show up here</div>
            {projects.map((proj, index) => (
              <div className='absolute bottom-0 left-0 right-0 top-0 grid place-items-center'>
                <div key={proj.id} id={proj.id} className={`flex items-top justify-center bg-primary p-10 ${toggle === index ? ' block' : ' hidden'} transition duration-300 ease-in-out`}> 
                  <img src={proj.cover} alt={proj.id} className='mr-2' />
                  <div className='w-[400px] px-2'>
                    <h1 className='font-bold'>{proj.title}</h1>
                    <div key={proj.id} className='flex items-center justify-center gap-4 py-2'>
                      <img src={proj.img1} alt={proj.img1} className='w-[40px]' />
                      <img src={proj.img2} alt={proj.img2} className='w-[40px]' />
                      <img src={proj.img3} alt={proj.img3} className='w-[40px]' />
                    </div>
                    <p className='font-extralight'>{proj.content}</p>
                  </div>
                </div> 
              </div>
            ))}
          </div>
          
          {projects.map((proj, index) => (
            <div key={proj.id} className='outline w-full h-full relative overflow-hidden'>
              <div className={`absolute bottom-0 left-0 right-0 top-0 w-full h-full bg-black opacity-0 items-center flex justify-center cursor-pointer transition duration-300 ease-in-out hover:opacity-80`} onClick={() => setToggle((index))}>Click to show more details</div>
              <img src={proj.cover} alt={proj.id} className='w-[100%] h-auto cursor-pointer'  />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project