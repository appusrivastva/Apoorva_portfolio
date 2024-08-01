import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

export default function SocialLink() {
    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30} /></>
            ),
            href: "https://www.linkedin.com/in/km-apoorva-shriwastawa-835101299/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>Github <FaGithub size={30} /></>
            ),
            href: "https://github.com/appusrivastva"
        },
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={30} /></>
            ),
            href: "mailto:appumca2022@gmail.com"
        },
        {
            id: 4,
            child: (
                <>Instagram <FaInstagram size={30} /></>
            ),
            href: "https://www.instagram.com/thecodergroup"
        },
    
        {
            id: 5,
            child: (
                <>LeetCode <SiLeetcode size={30} /></>
            ),
            href:"https://leetcode.com/u/appu_2024/"
        },
        {
            id: 6,
            child: (
                <>CodeChef <SiCodechef size={30} /></>
            ),
            href:"https://www.codechef.com/users/apoorva2024"
        },
        {
            id: 7,
            child: (
                <>Resume <BsFillPersonLinesFill size={30} /></>
            ),
            href: "/Apoorva_resume(4).pdf",
            style: 'rounded-br-md',
            download: true
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-400 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] ${style}`}
                    >
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white'
                            rel="noreferrer"
                            download={download}
                            target='_blank'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
