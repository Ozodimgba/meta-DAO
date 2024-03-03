import React from 'react'
import { motion } from 'framer-motion'
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import { FiInfo } from "react-icons/fi";
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
     <div className="h-full py-[13%] px-[70px] w-full">
     <TextReveal delay={0.5}> 
     <h3 className="font-bold text-4xl font-mono">Anyone can submit an Improvement proposal</h3>
      <p className='mt-4'>Improvement proposals, likely submitted by MetaDAO members, aim to enhance the DAO&apos;s functionality. These proposals could target anything from refining the voting system to choosing new investment strategies. By proposing and voting on these improvements, MetaDAO members can work together to optimize the DAO&apos;s structure and increase its chances of achieving its goals.</p>
      <div className='bg-white mt-5 flex items-center gap-3 text-black px-8 py-5'>
      <FiInfo size={25} />
      <p className=''>Each proposal voting period(trading) takes 10 days</p>
      </div>

      <p className='mt-5'>Business projects are how the Meta-DAO converts financial capital into revenue-generating products. Business direct actions operate over those products, tweaking parameters in the pursuit of customer satisfaction and profitability. Operations projects and direct actions support the business, ensuring that the Meta-DAO has the right people and resources to create new products and manage existing ones.</p>
      
    </TextReveal>
      

     </div>
    </div>
  </section>
  )
}

export default ProposalAnimation