import React from 'react'
import AnimateText from './AnimateH3'
import Typing from './Typing'
import { motion } from 'framer-motion'
import { useScramble } from "use-scramble";

function Hero() {

  const { ref, replay } = useScramble({ 
    text: "The MetaDAO" 
  });
  
  return (
    <section className="h-screen text-white w-screen">
     <div className="h-[70px] w-full"></div>
     <div className="h-[210px] flex w-full">
      <div className="h-[70px] w-[840px]"></div>
      <motion.div 
      animate={{
        y: [-90, 0]
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="h-[210px] px-4 py-2 w-[350px] bg-[#2B2B2B]">
        <h3 className="text-white font-main font-medium text-xl">futarchy</h3>
        <div className="w-full grid mt-3 grid-cols-6">

          <div className="bg-[#929191] flex justify-center items-center px-2 py-1">
            <span className="font-main text-white">noun</span>
          </div>
        </div>
        <h3 className="text-[#FFFFFF40] mt-3 font-main font-medium text-xl">[foo-ta-ki]</h3>
        <p className="text-white font-main mt-2 text-[0.7rem]">
        Futarchy is a governance model that relies on market predictions to make decisions, where participants use prediction markets to bet on the outcomes of proposed policies, and the policy with the highest market confidence is implemented.
        </p>
      </motion.div>
     </div>

     <div className="h-[70px] flex w-full">
      <div className="h-[70px] w-[70px]">
      </div>
      <h2  ref={ref} onMouseOver={replay} 
       onFocus={replay} className="font-main font-bold h-full text-7xl text-[#FF0642] px-1" />
     </div>

     <div className="h-[140px] flex w-full">
      <div className="h-[70px] w-[70px]">
      </div>
      <div className="text-white w-[490px] h-full items-center row-span-2 font-main font-light text-3xl">
        <div className="py-4 px-1">
        <Typing el='p' text="MetaDAO is the first protocol on Solana using futarchy to reshape governance" className='' />
        {/* <p>MetaDAO is the first protocol on Solana using futarchy to reshape governance</p> */}
        </div>
      </div>
     </div>

     <div className="h-[70px] flex w-full">
      <div className="h-[70px] w-[70px]">
      </div>
     <motion.button 
     animate={{
        y: [ 0, 10, -10, 10, -10, 0]
     }}
     transition={{
        duration:  5,
        repeat: Infinity
     }}
     className="font-main font-medium h-full w-[210px] text-xl bg-[#FF0642] px-1">
        Learn how it works
      </motion.button>
     </div>

     </section>
  )
}

export default Hero