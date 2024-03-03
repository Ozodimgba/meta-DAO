import React from 'react'
import { motion } from 'framer-motion'
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';

type Data = {
    title: string;
    image: string;
    content: string;
}

interface ComponentProps {
    update: React.Dispatch<React.SetStateAction<boolean>>; 
    data: Data;
  }
function Explainer({ update, data }: ComponentProps) {

    console.log(data)

  return (
    <motion.section
     animate={{
      height: ["0%", "100%"]
    }}
    transition={{
      duration: 0.4,
      ease: "easeInOut",
    }}
     className="h-screen fixed top-0 left-0 font-main text-white w-screen bg-black">
     <div className="h-full w-full bg-white grid grid-cols-2">
      <motion.div 
      className="bg-[#FF0642] flex justify-center items-center w-full h-full"
      animate={{
        width: ["0%", "100%"]
      }}
      transition={{
        duration: 0.29,
        ease: "easeInOut",
      }}
      >
      <motion.div
      className="h-[200px] text-[#FF0642] flex justify-center items-center w-[200px] bg-white"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
      > THE METADAO </motion.div>
      </motion.div>
      <div className="text-[#FF0642] p-12 pt-[20%] w-full h-full">
        <div className="w-full mb-3 h-[50px] flex items-center justify-start">
        <div className="w-[50px]">
        <button onClick={() => update(false)} className="bg-[#FF0642] text-white font-mono px-2">Close</button>
        </div>
        <div className="mx-4 -rotate-90">
        <DotLottiePlayer
        src={`arrow.json`}
        autoplay
        loop
        style={{
          width: "60px"
        }}
      >
      </DotLottiePlayer>
        </div>
        </div>
        <motion.div
         animate={{
          translateY: ["300%", "0%"],
        }}
        transition={{
         duration: 0.3,
        }}
        >
          <h3 className="text-5xl font-mono">{data?.title}</h3>
          <p className="font-mono mt-8">TWAPs are a common tool for calculating average prices of an asset over a specified time interval. This helps reduce the impact of short-term price fluctuations</p>
          <code>TWAP = (∑ (Price * Time)) / ∑ Time </code>
        </motion.div>
      </div>
     </div>
     </motion.section>
  )
}

export default Explainer