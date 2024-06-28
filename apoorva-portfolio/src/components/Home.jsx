import React, { useState, useEffect } from 'react';
import mypic from '../assets/ap.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

export default function Home() {
  const [text, setText] = useState("I'm a Full Stack Developer");
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const texts = ["I'm a Full Stack Developer", "I'm a MERN Stack Developer"];
    let index = 0;

    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setText(texts[index]);
        setFadeIn(true);
      }, 500); // duration of fade-out transition
    }, 4000); // duration to show each text

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      name="home"
      className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
      <div
        className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'
      >
        <div className='flex flex-col justify-center items-center h-full'>
          <h2 className={`text-4xl sm:text-7xl font-bold text-white transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {text}
          </h2>
          <br />
          <div>
            <Link to="portfolio" smooth duration={500}>
              <button
                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
              >
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={mypic} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  );
}
