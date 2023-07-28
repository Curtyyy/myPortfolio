import React from 'react'
import styles from '../style'

const About = () => {
  return (
    <div className={`${styles.flexCenter}`}>
      <div className='font-poppins text-justify w-[80%] leading-loose ss:text-center ss:px-3'>
        <h1 className='text-[30px] font-extrabold border-b w-max mx-auto leading-10 mb-6'>ABOUT</h1>
        <p className='text-[16px] indent-10 ss:indent-0 font-light ss:text-[18px]'>
        Hi, I'm Curt Russel Berdos, I'm a front-end web developer with a background in computer science. I have 1 year experience developing web projects. <br />
        I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!
        </p>
      </div>
    </div>
  )
}

export default About