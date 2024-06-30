import React from 'react';

export default function Contact() {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white flex items-center justify-center'
    >
      <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full w-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Contact
          </p>
          <p className='py-6'>Get in touch with me!</p>
        </div>

        <div className='flex justify-center items-center'>
          <div className=' bg-gray-700 p-12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
            <p className='py-4 text-2xl transform transition duration-300 hover:scale-110'>
              <span className='font-bold'>Name:</span> Apoorva Shriwastawa
            </p>
            <p className='py-4 text-2xl transform transition duration-300 hover:scale-110'>
              <span className='font-bold'>Address:</span> Lucknow, Uttar Pradesh
            </p>
            <p className='py-4 text-2xl transform transition duration-300 hover:scale-110'>
              <span className='font-bold'>Email:</span> appumca2022@gmail.com
            </p>
            <p className='py-4 text-2xl transform transition duration-300 hover:scale-110'>
              <span className='font-bold'>Phone:</span> +91xxxxxxxxxx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
