import React from 'react';
import WeatherApp from '../assets/portfolio/weather.png';
import spotifyClone from '../assets/portfolio/spotify.jpg';
import home from '../assets/portfolio/Home1.png';
import portfolio from '../assets/portfolio/portfolio.png'
import chatapp from '../assets/portfolio/chatapp.png'
import { LiaEyeSolid } from "react-icons/lia";
import wanderlust from '../assets/portfolio/wanderlust.png'
import clock from '../assets/portfolio/clock.png'
import webpage from '../assets/portfolio/webpage.png'

export default function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: spotifyClone,
      title: "Spotify Clone"
      ,
      link:"https://github.com/appusrivastva/SpotifyClone",
      tech:"HTML5 || CSS",
      color:"green"
    },
    {
      id: 2,
      src: WeatherApp,
      title: "WeatherApp"
      ,
      link:"https://github.com/appusrivastva/WeatherApp",
      tech:"HTML | CSS | javaScript",
      color:"green"
    },
    {
      id: 3,
      src: home,
      title: "Accommodation Finder"
      ,
      link:"https://github.com/appusrivastva/Hostel-Pg-Finder",
        tech:"MERN Stack",
        color:"green"
    },
    {
      id: 4,
      src: portfolio,
      title: "My Portfolio"

      ,
      link:"https://github.com/appusrivastva/Apoorva_portfolio/tree/main/apoorva-portfolio",
        tech:"HTML | CSS |javaScript | React | Tailwind CSS ",
        color:"green"
    },
    {
      id: 5,
      src: chatapp,
      title: "ChatApp"
      ,
      link:"https://github.com/appusrivastva/ChatApp",
        tech:"MERN Stack",
        color:"red"
    },
    {
      id: 6,
      src: wanderlust,
      title: "WanderLust",
      link:"https://github.com/appusrivastva/Wander_Lust",
        tech:"HTML | CSS | JavaScript | Bootstrap | MongoDb | Node | Express",
        color:"red"
    },
    {
      id: 7,
      src: clock,
      title: "Digital Clock",
      link:"https://github.com/appusrivastva/Digital_Clock",  
      tech:"HTML || CSS || javaScript",
      color:"green"

    },
    {
      id: 8,
      src: webpage,
      title: "Responsive Web Page",
      link:"https://github.com/appusrivastva/Resonponsive-Web-page",
        tech:"HTML5 | CSS",color:"green"
    },
    // {
    //   id: 9,
    //   src: home,
    //   title: "Accommodation Finder",
    //   link:"",
    //     tech:""
    // },
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
          {portfolios.map(({ id, src, title,link ,tech,color}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img
                src={src}
                alt=""
                className='rounded-md duration-200 hover:scale-105'
              />
              <div className='flex flex-col items-center justify-center p-4'>
                <p className='w-full text-center py-2'>{title}</p>
                <p className='w-full text-center py-2'>Tech Stack:  {tech}</p>
                <div className='w-full text-center py-2 flex items-center justify-center'>
                  <span>Status:</span>
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    marginLeft: '8px',
                    backgroundColor: color,
                    border: '2px solid black'
                  }}></div>
                </div>


                <div className='w-full px-6 py-2 my-2 duration-200 hover:scale-105' >
                  
                <a
                            href={link}
                            className='flex justify-between items-center w-full text-white'
                          
                          
                            target='_blank'  rel="noreferrer"
                        >
                          
                          Github Code  <LiaEyeSolid />
                        </a>  
                      
                </div>
             
                
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
