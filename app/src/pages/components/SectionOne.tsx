import React from 'react'
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import { useScramble } from "use-scramble";

function SectionOne() {

    const { ref, replay } = useScramble({ 
        text: "In 2020, Robert Leshner Introduced the Compound Finance governance system and it has gone on to gain widespread adoption. The problem is that it only works for simple projects. To organize larger ones you need a MetaDAO: a DAO that is itself broken into smaller DAOs" 
      });

      const { ref: ref3, replay: replay3 } = useScramble({ 
        text: "The MetaDAO implementation is built on something called &quot;Conditional Tokens&quot;. Conditional tokens estimate how an Improvment proposals if passed will affect the DAOs token market capitilization" 
      });
      
      const { ref: refTwo, replay: replayTwo } = useScramble({ 
        text: "Members take actions via improvement proposals. Each improvement proposal contains a list of commands, where a command contains a member and a Solana instruction that the member can execute. If a proposal passes, instructions are executed by their corresponding members." 
      });

      const { ref: refFour, replay: replayFour } = useScramble({ 
        text: "Here, users stake tokens to forecast a proposal's long-term impact on project value. If the community collectively predicts a positive outcome, the proposal's code is automatically executed on the blockchain, ensuring a streamlined transition from proposition to execution. This cuts out human intervention and relies on collective intelligence to propel the MetaDao forward." 
      });


  return (
    <section className="h-[120vh] w-screen relative bg-black">
     <div className="h-full w-full absolute z-1">
     <DotLottiePlayer
        src={`meta.json`}
        autoplay
        loop
        // style={{
        //   width: "60px"
        // }}
      >
      </DotLottiePlayer>
     </div>
     <div className=" h-full w-full grid grid-cols-2 absolute z-3 grid-rows-2">
     <div className="h-full w-full p-[70px]">
      <p ref={ref} onMouseOver={replay} 
       onFocus={replay} className="text-lg font-main  text-white"/>
     </div>

     <div className="h-full w-full p-[70px]">
      <p ref={refTwo} onMouseOver={replayTwo} onFocus={replayTwo} className="text-lg font-main text-end text-white" />
     </div>

     <div className="h-full w-full flex items-end p-[70px]">
     <p ref={ref3} onMouseOver={replay3} onFocus={replay3} className="text-lg font-main text-start text-white" />
     </div>

     <div className="h-full w-full flex items-end p-[70px]">
      <p ref={refFour} onMouseOver={replayFour} onFocus={replayFour} className="text-lg font-main text-end text-white" />
     </div>
     </div>
    </section>

  )
}

export default SectionOne