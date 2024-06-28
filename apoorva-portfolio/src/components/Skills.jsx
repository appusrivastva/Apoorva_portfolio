import React from 'react';
import css from '../assets/portfolio/css.png';
import html from '../assets/portfolio/html.png';
import nodejs from '../assets/portfolio/nodejs.png';
import tailwind from '../assets/portfolio/tailwind.png';
import exp from '../assets/portfolio/express.png';
import js from '../assets/portfolio/js.png';
import react from '../assets/portfolio/reactjs.png';
import bootstrap from '../assets/portfolio/bootstrap.jpg';
import github from '../assets/portfolio/github.png';
import csharp from '../assets/portfolio/csharp.png';
import mongodb from '../assets/portfolio/mongodb.png';
import sql from '../assets/portfolio/sql.png';
import java from '../assets/portfolio/java.png';
import python from '../assets/portfolio/python.jpg';
import git from '../assets/portfolio/git.png';
import postman from '../assets/portfolio/postman.webp';
import vscode from '../assets/portfolio/vscode.webp';

export default function Skills() {
  const skills = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: js,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: nodejs,
      title: 'Node.js',
      style: 'shadow-green-500',
    },
    {
      id: 5,
      src: exp,
      title: 'Express.js',
      style: 'shadow-yellow-500',
    },
    {
      id: 6,
      src: react,
      title: 'React.js',
      style: 'shadow-blue-800',
    },
    {
      id: 7,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-500',
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-blue-300',
    },
    {
      id: 9,
      src: postman,
      title: 'Postman',
      style: 'shadow-orange-500',
    },
    {
      id: 10,
      src: git,
      title: 'Git',
      style: 'shadow-orange-800',
    },
    {
      id: 11,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-500',
    },
    {
      id: 12,
      src: sql,
      title: 'SQL',
      style: 'shadow-green-200',
    },
    {
      id: 13,
      src: mongodb,
      title: 'MongoDB',
      style: 'shadow-green-500',
    },
    {
      id: 14,
      src: java,
      title: 'Java',
      style: 'shadow-red-500',
    },
    {
      id: 15,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-500',
    },
    {
      id: 16,
      src: csharp,
      title: 'C#',
      style: 'shadow-purple-900',
    },
    {
      id: 17,
      src: vscode,
      title: 'Visual Studio Code',
      style: 'shadow-blue-500',
    },
  ];

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
