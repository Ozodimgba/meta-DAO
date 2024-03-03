import React from 'react'
import { motion } from 'framer-motion'

type Data = {
    role: string;
    content: string;
}


interface ComponentProps {
    update: React.Dispatch<React.SetStateAction<boolean>>; 
    data: number;
  }

function Role({ update, data }: ComponentProps) {

  const contentData: Data[] = [
    {
        role: 'Enterprenuer',
        content: "The main issue is that the SVG and the text container are siblings, and z-index applies only between siblings. To fix this, nest the text container within the SVG container."
    },
    {
        role: 'Analyst',
        content: "The main issue is that the SVG and the text container are siblings, and z-index applies only between siblings. To fix this, nest the text container within the SVG container."
    },
    {
        role: 'Cyber-Agent',
        content: "The main issue is that the SVG and the text container are siblings, and z-index applies only between siblings. To fix this, nest the text container within the SVG container."
    }
  ]
  

  return (
    <motion.section
    animate={{
     height: ["0%", "100%"]  // Start from a scaled-down state
   }}
    transition={{
      duration: 0.15
    }}
    className="h-screen z-30 fixed top-0 left-0 font-main text-white w-screen bg-white grid grid-rows-2">
    <div className="h-full w-full"></div>
    <motion.div 
    animate={{
     y: ["100%", "0%"]
    }}
    transition={{
     duration: 0.3,
     delay: 0.07
    }}
    className="h-full w-full bg-[#FF0642]">
      <div className="w-full px-[70px] py-4 flex justify-between"> 
      <button onClick={() => update(false)} className="relative px-3 text-[#FF0642] font-mono "></button>

       <button className="bg-white font-mono px-3 text-[#FF0642]">{contentData[data].role}</button>
      
       <button onClick={() => update(false)} className="bg-white relative px-3 text-[#FF0642] font-mono ">x</button>
      </div>

      <div className="px-[70px] text-center">
        <p>{contentData[0].content}</p>
      </div>
    </motion.div>
    </motion.section>
  )
}

export default Role