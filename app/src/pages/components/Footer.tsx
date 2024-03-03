import React from 'react'
import { useScramble } from 'use-scramble';
import Router, { useRouter } from 'next/router';

function Footer() {

  const { ref, replay } = useScramble({ 
        text: "An on-chain country with no lands and no leaders." 
      });
    
  const { ref: newRef, replay: newReplay } = useScramble({ 
        text: "READ MORE" 
      });
  
  const router = useRouter()


  return (
    <section
     style={{ 
      backgroundImage: 'url("map.svg")',
      backgroundSize: 'contain',
      backgroundPosition: 'center' 
    }}
     className="bg-black h-screen w-screen" >
      <div className="h-full w-full bg-[#00000030] grid grid-rows-8">
       <div className="row-span-7 flex p-[20%] justify-center items-center bg-gradient-to-t from-black via-black/30 to-transparent h-full w-full">
        <h3 ref={ref} onMouseOver={replay} 
       onFocus={replay} className="text-white text-center text-5xl font-main font-bold" />
       </div>
       <div className="h-full w-full px-5 flex items-center justify-between pr-8 text-white bg-black">
       <h3 className="font-mono" ref={newRef}
       onMouseOver={newReplay} 
       onFocus={newReplay}
       />
       <button onClick={() => router.push("https://blog.themetadao.org/")} className="bg-[#FF0642] px-3 py-2 font-mono">
        HERE
       </button>
       </div>
      </div>

     </section>
  )
}

export default Footer