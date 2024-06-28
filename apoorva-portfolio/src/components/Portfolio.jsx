import React from 'react';
import WeatherApp from '../assets/portfolio/weather.png';
import spotifyClone from '../assets/portfolio/spotify.jpg';
import home from '../assets/portfolio/Home1.png';

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: spotifyClone,
      title: "Spotify Clone"
      ,
      link:""
    },
    {
      id: 2,
      src: WeatherApp,
      title: "WeatherApp"
      ,
      link:""
    },
    {
      id: 3,
      src: home,
      title: "Accommodation Finder"
      ,
      link:""
    },
    {
      id: 4,
      src: spotifyClone,
      title: "Spotify Clone"

      ,
      link:""
    },
    {
      id: 5,
      src: WeatherApp,
      title: "WeatherApp"
      ,
      link:""
    },
    {
      id: 6,
      src: home,
      title: "Accommodation Finder",
      link:""
    },
    {
      id: 7,
      src: spotifyClone,
      title: "Spotify Clone",
      link:""
    },
    {
      id: 8,
      src: WeatherApp,
      title: "WeatherApp",
      link:""
    },
    {
      id: 9,
      src: home,
      title: "Accommodation Finder",
      link:"https://github.com/appusrivastva/Hostel-Pg-Finder"
    },
  ];

  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-800 w-full text-white flex items-center justify-center'
    >
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Portfolio
          </p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        {/* cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {portfolios.map(({ id, src, title,link }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=""
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex flex-col items-center justify-center p-4'>
                <p className='w-full text-center py-2'>{title}</p>
                <div className='w-full px-6 py-2 my-2 duration-200 hover:scale-105' >
                <a
                            href={link}
                            className='flex justify-between items-center w-full text-white'
                          
                          
                            target='_blank'
                        >
                          
                          Github Code  
                        </a>
                </div>
                {/* <p className='w-full text-center py-2'>Tech Stack</p> */}
                
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
