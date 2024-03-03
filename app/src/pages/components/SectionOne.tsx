import React from 'react'
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import { useScramble } from "use-scramble";

function SectionOne() {

    const { ref, replay } = useScramble({ 
        text: "In 2020, Robert Leshner Introduced the Compound Finance governance system and it has gone on to gain widespread adoption. The problem is that it only works for simple projects. To organize larger ones you need a MetaDAO: a DAO that is itself broken into smaller DAOs" 
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
      <p className="text-lg font-main text-end text-white">In 2020, Robert Leshner Introduced the Compound Finance governance system and it has gone on to gain widespread adoption. The problem is that it only works for simple projects. To organize larger ones you need a MetaDAO: a DAO that is itself broken into smaller DAOs</p>
     </div>

     <div className="h-full w-full flex items-end p-[70px]">
      <p className="text-lg font-main text-white">The metaDAO the truth the good<br/> part is the only way to find the get way of lorem ipsum dolor</p>
     </div>

     <div className="h-full w-full flex items-end p-[70px]">
      <p className="text-lg font-main text-end text-white">The metaDAO the truth the good <br/>  part is the only way to find the get way of lorem ipsum dolor</p>
     </div>
     </div>
    </section>

  )
}

export default SectionOne