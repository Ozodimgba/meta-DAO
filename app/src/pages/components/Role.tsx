import React from 'react'
import { motion } from 'framer-motion'
import { useScramble } from "use-scramble";

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
        content: "Entrepreneurs within the Meta-DAO play a pivotal role in shaping the organization's trajectory and fostering its growth. As the driving force behind ambitious projects, entrepreneurs are tasked with not only conceiving innovative ideas but also with rallying support and orchestrating the collaborative efforts necessary for their realization. Unlike traditional hierarchical structures, these entrepreneurs function within a decentralized framework, relying on a blend of analytical acumen, persuasive communication skills, and a penchant for calculated risk-taking. They serve as the linchpin between the analytical thinkers who trade markets and the cyber-agents responsible for executing on-ground tasks. The success of an entrepreneur is measured not just by the ingenuity of their ideas but by their ability to convey project strengths to analysts, attract cyber-agents to join their cause, and guide the overall project lifecycle. Entrepreneurial compensation is tied to the project's success, emphasizing long-term and performance-based incentives that align with the Meta-DAO's overarching goals. This unique blend of visionary leadership, adaptability, and a willingness to embrace risk defines the role of entrepreneurs in the Meta-DAO, setting them apart as catalysts for transformative initiatives within this groundbreaking market-governed organization."
    },
    {
        role: 'Analyst',
        content: "Analysts within the Meta-DAO constitute the cerebral powerhouse, influencing the organization's trajectory through meticulous market analysis and data-driven decision-making. Unlike traditional organizational structures, analysts in the Meta-DAO prioritize reason over emotions, relying on their ability to coldly assess situations and make informed judgments based on probabilities and pricing dynamics. The absence of a traditional corporate hierarchy allows analysts to operate with close-to-zero people skills, focusing on their analytical prowess to indirectly guide the Meta-DAO's resource allocation. Success for analysts is measured by the accuracy of their market predictions and the subsequent impact on the organization's financial health. Their compensation is intricately tied to high investment returns, reflecting the critical role they play in shaping the Meta-DAO's financial success. In this dynamic environment, analysts wield considerable influence without the need for traditional leadership qualities, as their insights and decisions ripple through the organization, directing the allocation of energy and capital. The Meta-DAO thrives on the analytical acumen of these individuals, relying on their ability to navigate complex market landscapes and make data-driven decisions that ultimately steer the organization towards sustainable growth."
    },
    {
        role: 'Cyber-Agent',
        content: "Cyber-agents form the backbone of the Meta-DAO, embodying the hands-on execution force responsible for translating conceptualized projects and market decisions into tangible outcomes. Functioning as the operational engine, cyber-agents engage in a myriad of tasks, spanning coding, product management, marketing, and partnership management. Their role is diverse and crucial, as they are the ones actively involved in bringing the visionary ideas of analysts and entrepreneurs to life. Unlike the thinkers and strategists, cyber-agents operate at the ground level, slinging code, designing, and managing the practical aspects of the DAO's products. Their contributions are integral to the success of business and operations projects, ensuring that the Meta-DAO not only creates innovative and revenue-generating products but also effectively manages and supports these initiatives. While they may not be directly involved in market analysis, their work is instrumental in the overall realization of the organization's goals. Compensation for cyber-agents typically involves immediate payments, fostering quick feedback loops to enhance motivation. As the doers and implementers within the Meta-DAO, cyber-agents embody the hands that shape and actualize the organization's endeavors, playing a vital role in its day-to-day operations and long-term success."
    }
  ]

  const { ref, replay } = useScramble({ 
    text: `The ${contentData[data].role}`
  });
  

  return (
    <motion.section
    animate={{
     height: ["0%", "100%"]  // Start from a scaled-down state
   }}
    transition={{
      duration: 0.15
    }}
    className="h-screen z-30 fixed top-0 left-0 font-main text-white w-screen bg-white grid grid-rows-2">
    <div className="h-full w-full flex items-center justify-center">
        <h3 ref={ref} onMouseOver={replay} onFocus={replay} className='text-8xl text-[#FF0642] font-bold' />
    </div>
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

       <button className="bg-white font-mono px-3 text-[#FF0642]">Explainer</button>
      
       <button onClick={() => update(false)} className="bg-white relative px-3 text-[#FF0642] font-mono ">x</button>
      </div>

      <div className="px-[70px] text-center">
        <p>{contentData[data].content}</p>
      </div>
    </motion.div>
    </motion.section>
  )
}

export default Role