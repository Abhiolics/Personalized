import React from 'react'
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { GrAed } from "react-icons/gr";

function Skills() {
  return (
   <div>
     <hr className='bg-black rounded-full'/>
    <div className="hero p-9 bg-white text-white ">
  <div className="hero-content ">
    <div className="max-w-md ">
    <div className="card w-96  bg-wow shadow-2xl">
  <div className="card-body ">
    <GrAed className=' animate-bounce flex justify-center  '/>
    <h2 className="card-title text-center text-suu">Top Skills</h2>
    <p className='p-2'>Why Choose me?</p>
    <hr />
    <div className="card-actions  flex justify-center">
    <div className="grid grid-flow-col gap-4 animate-pulse ">
        <SiCanva size={20} />
        <SiTailwindcss size={20} />
        <FaCss3Alt size={20} />
        <FaJava size={20} />
        <FaReact size={20} />
        <FaNode size={20} />
        <FiFigma size={20} />
        <SiExpress size={20} />
        <IoLogoJavascript size={20} />
        <BiLogoMongodb size={20} />

    </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
   </div>
  )
}

export default Skills
