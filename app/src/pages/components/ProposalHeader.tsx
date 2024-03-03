import React from 'react'
import { useScramble } from "use-scramble";

function ProposalHeader() {

    const { ref, replay } = useScramble({ 
        text: "PROPOSALS" 
      });

  return (
    <section className=" w-screen bg-black">
     <div className="h-[60vh] bg-black flex justify-center items-center">
        <div className="bg-black w-[80%] h-full relative">

        <div className="absolute w-full flex justify-between h-full z-1">
        <div className="w-[70px] h-full border-[0.001rem] border-y-0 border-[#BABABA17]"></div>
        <div className="w-[70px] h-full border-[0.001rem] border-y-0 border-[#BABABA17]"></div>
        </div>

        <div className="absolute w-full flex flex-col justify-between h-full z-2">
        <div className="w-full h-[70px] border-[#BABABA17]"></div>
        <div className="w-full h-[70px] border-[0.001rem] border-x-0 border-[#BABABA17]"></div>
        </div>

        <div className="absolute w-full p-[70px] text-white flex flex-col items-center justify-center h-full z-3">
         <h2 ref={ref} onMouseOver={replay} onFocus={replay} className='text-[#FF0642] font-mono text-2xl py-5' />
        <h3 className="font-main font-medium text-center text-5xl">Proposals are the determinants of the <span className="text-[#FF0642]"> MetaDAO&apos;s future</span></h3>
        </div>

        <div id='index-element' className="absolute w-full text-white flex items-center justify-center h-full z-4">
        <img src="frontdrop.svg" />
        </div>
        </div>

        
     </div>
    
     </section>
  )
}

export default ProposalHeader