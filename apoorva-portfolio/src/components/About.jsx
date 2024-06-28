import React from 'react';

export default function About() {
  return (
    <div name='about' className="about-page min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="about-me pb-8">
          <h2 className="text-4xl font-bold text-gray-500 border-b-4">About Me</h2>
          <p className="text-xl text-left">
            Hey there! I'm Apoorva, a passionate web developer who loves building cool and user-friendly websites and software solutions.
            My background in BSc Mathematics helps me approach problems logically, while my MCA degree provides the technical skills to bring those ideas to life.
          </p>
        </div>

        <div className="expertise">
          <h2 className="text-2xl font-semibold mb-4">What I Can Do</h2>
          <ul className="list-disc space-y-2">
            <li>
              Expert in building websites using the MERN stack (MongoDB, Express.js, React.js, Node.js). Think of it as a toolbox for building awesome web experiences!
            </li>
         
            <li>
              Skills in data structures and algorithms help me write efficient code that makes websites run smoothly.
            </li>
          </ul>
        </div>

        <div className="projects">
          <h2 className="text-2xl font-semibold mb-4">Cool Projects I've Done</h2>
          <p className="text-xl text-left">
            I'm really proud of my work on the Accommodation Finder project, 
            which I developed during my 5-month industrial training. 
            This project helps people find hostels/PGs in unfamiliar cities. 
            You can check it out on my GitHub: <a href="https://github.com/appusrivastva/Hostel-Pg-Finder" className="text-blue-400">Accommodation Finder</a>.
          </p>
        </div>

        <div className="learning">
          <h2 className="text-2xl font-semibold mb-4">Always Learning</h2>
          <p className="text-xl text-left">
            My math background gave me a strong foundation in problem-solving, and my MCA degree equipped me with the technical skills I need to be a web developer. But learning never stops! I take online courses and connect with other developers to keep my skills sharp and stay on top of the latest trends.
          </p>
        </div>
      </div>
    </div>
  );
}
