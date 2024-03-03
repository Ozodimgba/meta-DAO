import React from 'react'
import { motion } from 'framer-motion'
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import TextReveal from './TextReaveal';

function ProposalAnimation() {
  return (
    <section className="h-screen relative bg-black w-screen">
    <div className="h-full w-full absolute z-3 flex gap-4 flex-col items-center justify-center">
      <motion.div
      animate={{
        x: ["0%", "-40%"],  // Adjust the value based on your needs
        scale: ["100%", "80%"]
      }}
      transition={{
        duration: 6
      }}
      className=""
      >
      <DotLottiePlayer
      src={`prop.json`}
      autoplay
 
      loop
      style={{
        width: "60vw"
      }}
    >
    </DotLottiePlayer>
      </motion.div>
    
    </div>
    <div className="h-full text-white font-main w-full grid grid-cols-2">
      <div></div>
     <div className="h-full py-[12%] w-full">
     <TextReveal delay={0.5}> 
     <h3 className="font-medium text-3xl">Anyone can submit a proposal</h3>
      <h2>This text will reveal on scroll!</h2>
      <p>You can place any content to be revealed here.</p>
    </TextReveal>
      

     </div>
    </div>
  </section>
  )
}

export default ProposalAnimation