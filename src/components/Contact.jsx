import React from 'react'
import { contacts } from '../constants';

const Contact = () => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='font-poppins text-center w-full p-5'>
        <h1 className='text-[30px] font-extrabold border-b w-max mx-auto leading-10 mb-6'>CONTACT</h1>
        
        <div>
          <h1 className='pb-2'>Me Through</h1>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=curt.berdos@gmail.com" target='_blank' className='border-b p-1'>curt.berdos@gmail.com</a>
        </div>

        <div className='flex items-center justify-center gap-5 py-6'>
          {contacts.map((cont, index) => (
            <a href="#" id={cont.id} key={cont.id} className='flex justify-center items-center outline'>
              <img src={cont.img} alt={cont.id} className='w-[70px] px-2' />
              <h6>{cont.title}</h6>
            </a>
          ))}
        </div> 
 

        {/* <div className='outline grid grid-cols-3 grid-flow-row p-5 w-[80%] m-auto'>
          <div className='outline block col-span-2'>
            <form action="#" id='contact_form' method='POST'>
              <div className='py-2 w-fit m-auto'>
                <label htmlFor="clientName" className='flex pb-1'>Full Name</label>
                <div className='text-black'>
                  <input type="Text" id="clientName" name='clientName' />
                </div>
              </div>

              <div className='py-2 w-fit m-auto'>
                <label htmlFor="clientEmail" className='flex pb-1'>E-mail</label>  
                <div className='text-black'>
                  <input type="email" id="clientEmail" name="clientEmail" />
                </div>
              </div>

              <div className='py-2 w-fit m-auto'>
                <label htmlFor="clientMessage" className='flex pb-1'>Message</label>
                <div className='text-black'>
                  <textarea name="" id="" cols="23" rows="5"></textarea>
                </div>
              </div>

              <div className='p-2'>
                <input type="submit" value="submit" className='' />
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Contact