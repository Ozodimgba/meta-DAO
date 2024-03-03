"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion, useScroll, useAnimation, useTransform, MotionValue, useDragControls, useInView } from "framer-motion"
import React, { useEffect, useRef, useState } from 'react';
import Results from "./components/Results";
import Roles from "./components/Roles";
import Lottie from 'lottie-react';
import animationData from '../../public/graph.json';
import type { DotLottieCommonPlayer } from "@dotlottie/react-player";
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import AnimateText from "./components/AnimateH3";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import TextReveal from "./components/TextReaveal";
import ProposalAnimation from "./components/ProposalAnimation";
import Explainer from "./components/Explainer";
import { data } from "./api/data";
import Role from "./components/Role";

import ProposalHeader from "./components/ProposalHeader";
import { useScramble } from "use-scramble";


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const paragraphRef = useRef(null);
  const { scrollY, scrollYProgress } = useScroll();

  const [dataNumber, setDataNumber] = useState<number>(0)
  const [pageHeight, setPageHeight] = useState(null);
  const [showExplainer, setExplainer] = useState<boolean>(false)
  const [showRoles, setRoles] = useState<boolean>(false)
  const [roleIndex, setRoleIndex] = useState<number>(0)
  const pageRef = useRef(null);

  const lottieRef = useRef<DotLottieCommonPlayer>(null);

  const { ref, replay } = useScramble({ 
    text: "ROLES" 
  });
  
  useEffect(() => {
    // Play on scroll as soon as the animation is visible
    lottieRef.current?.playOnScroll();
    
    // Options:
    lottieRef.current?.playOnScroll({
        positionCallback: (position: number) => console.log(position),
        segments: [50, 100],
        threshold: [0.5, 1],
    });
    
    // Stop playing on scroll
    lottieRef.current?.stopPlayOnScroll();    
  }, [lottieRef]);


  const dragControls = useDragControls()

  function startDrag(event:any) {
    dragControls.start(event, { snapToCursor: true })
  }

  function startDragTwo(event:any) {
    dragControls.start(event, { snapToCursor: true })
  }

  const handleDrag = ( indexNumber: number) => {
    console.log(indexNumber)
    setDataNumber(indexNumber)
    setExplainer(true)
  }

  const variants = {
    initial: {
      y: '0', // Start below the viewport
      scale: 1,
      x: 0
    },
    visible: {
      y: 0, // Move into view
      scale: 0.6,
      x: '-10vw', // Translate left
      transition: { 
        type: 'spring', stiffness: 100
      } 
    }
  };
  
   // Join the elements of the array with a space in between
  //  const joined_string = text_array.join(" ");

  const inputText = `Imagine instead of using presidents, CEOs, directors and all other forms of 
  representative leadership we used a governance model that can be applied at it's best on a blockchain.
  DAOs allow a collective with similar visons to come together and create an organiztion owned by all its members
  with ownership represented by an on chain token. That sounds amazimg right?.. the only problem is DAOs have a few operational challenges.
  First, they mostly face vote apathy where most member are not incentived to vote and by that concentrating the voting power in
  the hands of a few, Expertise gap is another challenge, since all member are equal, non-expertise have equal voting power as 
  experts...then there is also Sybil Attacks and coordination challenges. To fix this MetaDAO is pioneering an experiment on solana to use futarchy to run itself.`;
  const textArray = inputText.split(/\s+/);

  const textRefs = useRef(new Array(textArray.length).fill(null));

  let x = 0;
  scrollYProgress.onChange(value => {
    x = value * 100; // Update x with the scroll percentage
  });

  useEffect(() => {
    const handleScroll = () => {
      // Define your custom range (startX and endX)
      const startX = 7;
      const endX = 18;
  
      // Calculate the adjusted value within the custom range
      const adjustedValue = (x - startX) / (endX - startX);
  
      // Clamp the adjusted value to be within [0, 1]
      const clampedValue = Math.min(Math.max(adjustedValue, 0), 1);
  
      // Calculate the newIndex based on the adjusted value
      const newIndex = Math.floor(clampedValue * textArray.length);
  
      for (let i = 0; i < textArray.length; i++) {
        const textRef = textRefs.current[i];
        if (textRef) {
          textRef.style.color =
            i < newIndex ? 'white' : i === newIndex ? '#FF0642' : '#FFFFFF15';
        }
      }
    };
  
    // Attach listener on initial render and clean up on unmount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [textArray.length, scrollYProgress]);

  const textArr = "Framer Motion is a really cool tool".split(" ")

  const revealThreshold = 0.5; // Adjust this threshold based on your design

  const text = `...even in a democracy the preferences of the average American appear to have only a minuscule, near-zero, statistically non-significant impact upon public policy -| Martin Gilens and Benjamin Page`.split(" ");
  const wordsToColor = ["minuscule,", "near-zero,", "non-significant", "statistically", "significant", "Martin", "Gilens", "and", "Benjamin", "Page"];
  const joinedText = text.join(" ");

  const [isAnimated, setIsAnimated] = useState(false);
  const observerRef = useRef(null);

  const pgRef = useRef(null);
  const inView = useInView(pgRef, { amount: 0.5, once: true})

  const options = {
    root: null,
    threshold: 0.5, // Start animation when 50% of the element is visible
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsAnimated(entries[0].isIntersecting);
    }, options);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup on unmount
    };
  }, [observerRef]);

  const defaultOptions = {
    loop: true,
    autoplay: false, // Set to false to control animation
    animationData,
  };



  return (
    <main
      className={`overflow-hidden max-w-screen ${inter.className}`}
    >
      
     <Hero />

     <section className=" bg-black text-white w-screen">

      <div className="w-[100%] p-6 py-[10%] flex justify-center">
      <div ref={pgRef} className="w-[80%]">
      {text.map((el, i) => (
    <motion.span
      className="font-main text-white text-center text-3xl"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration: 0.25,
        delay: i / 10,
      }}
      key={i}
      style={{ color: wordsToColor.includes(el) ? "#FF0642" : "inherit" }}
    >
      {el}{" "}
    </motion.span>
    ))}
      
      </div>
      </div>

      

      <div className="w-full px-[70px]">
        <div className="w-full">
        {textArray.map((word, index) => (
         <span className="font-main font-medium leading-[3rem] text-4xl" ref={(el) => (textRefs.current[index] = el)} key={index}>
         {word}{' '}
         </span>
        ))}
        </div>
      </div>
     
     </section>




     <section className="bg-black pt-[10%] text-white w-screen">


      <div className="w-full py-4 px-[70px]">
        <div className="w-[70%]">
        <h3 className="font-main font-medium leading-[4rem] text-5xl">What is <span className="text-[#FF0642]">futarchy</span> really?</h3>
        <p className="font-main mt-3 text-xl">Created by Professor Robin Hanson, Futarchy is a proposed governance system that aims to improve decision-making by harnessing the power of prediction markets.  It envisions a structure where policies are judged based on their measurable outcomes. Participants in prediction markets buy and sell shares representing the likelihood of specific future events, such as the success of a proposed policy. Here is an example below </p>
        </div>
      </div>
      
      <div className="w-full mt-5 py-4 px-[70px]">
        <img src="use.svg" />
      </div>
      
      
      <Results />

      
     
     </section>


    {/**here */}
    <SectionOne />


     <section id="secky" className="h-[200vh] relative flex justify-between items-center w-screen">
       
      <div className="absolute z-6 h-screen w-screen grid grid-cols-2 grid-rows-2 gap-3">
       <div onPointerDown={startDrag} className="flex justify-end h-full w-full">
       <motion.div 
       id="1"
       whileHover={{ scale:1.03, y: -20}}
       onClick={() => handleDrag(0)}
       className="h-[280px] w-[350px] cursor-pointer flex flex-col justify-between bg-[#FF0642]">
        <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] "></div>
          <div className="h-[70px] w-[70px] bg-black"></div>
        </div>

        <div className="w-full h-full flex flex-col justify-center">
      <div className="w-full px-6 pr-[28%] py-3">
      <h3 className="font-main font-bold text-lg text-white">Conditional Vault Program</h3>
      <p className="font-main text-sm mt-1 text-white">Handles the creation of conditional tokens, which are essential for simulating and reverting of trades, a key feature of Futarchy</p>
      </div>
        </div>

        <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] bg-black"></div>
          <div className="h-[70px] w-[70px] bg-black"></div>
        </div>
       </motion.div>
       </div>

       <div className="h-full w-full">
       <motion.div
       whileHover={{ scale:1.03, y: -20}}
       onClick={() => handleDrag(1)}
       className="h-[280px] w-[350px] flex flex-col justify-between bg-[#FF0642]">
        <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] bg-black"></div>
          <div className="h-[70px] w-[70px] "></div>
        </div>

        <div className="w-full h-full flex flex-col justify-center">
      <div className="w-full pl-[28%] pr-6">
      <h3 className="font-main font-bold text-lg text-white">TWAP Program</h3>
      <p className="font-main text-sm mt-1 text-white">Provides a manipulation resistant way to measure the average price of tokens over time, used to determine the outcome of proposals</p>
      </div>
        </div>

        <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] bg-black"></div>
          <div className="h-[70px] w-[70px] bg-black"></div>
        </div>
       </motion.div>
       </div>

       <div  className=" flex  justify-end h-full w-full">
       <motion.div 
       whileHover={{ scale:1.03, y: 20}}
       onClick={() => handleDrag(2)}
       className="h-[280px] w-[350px] z-4 cursor-pointer flex flex-col justify-between bg-[#FF0642]">
       <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] bg-black"></div>
          <div className="h-[70px] w-[70px] bg-black"></div>
        </div>

        <div  className="w-full h-full flex flex-col justify-center">
      <div className="w-full px-6 pr-[28%] py-3">
      <h3 className="font-main font-bold text-lg text-white">Autocrat Program</h3>
      <p className="font-main text-sm mt-1 text-white">Orchestrates the futarchy processs by managing prosals, creating conditional vaults and executing decision based on market outcomes</p>
      </div>
        </div>

        <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] "></div>
          <div className="h-[70px] w-[70px] bg-black"></div>
        </div>
       </motion.div>
       </div>

       <div onPointerDown={startDrag} className=" h-full w-full">
       <motion.div
       id="4"
       whileHover={{ scale:1.03, y: 20}}
       onClick={() => handleDrag(3)}
       className="h-[280px] cursor-pointer w-[350px] z-5 flex flex-col justify-between bg-[#FF0642]">
       <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] bg-black"></div>
          <div className="h-[70px] w-[70px] bg-black"></div>
        </div>

        <div className="w-full h-full flex flex-col justify-center">
      <div className="w-full pl-[28%] pr-6">
      <h3 className="font-main font-bold text-lg text-white">META Token</h3>
      <p className="font-main text-sm mt-1 text-white">META is at the center of the DAO it is the native token of the DAO used for decision making.</p>
      </div>
        </div>

        <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] bg-black"></div>
          <div className="h-[70px] w-[70px] "></div>
        </div>
       </motion.div>
       </div>
      </div>

      <div id="index-element" className="absolute z-1 h-screen w-screen flex justify-center items-center">
      <svg width="300" height="239.76" viewBox="0 0 498 398" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_118_2554" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M100 0H398V100H498V298H398V398H100V298H0V100H100V0Z"/>
</mask>
<path fill-rule="evenodd" clip-rule="evenodd" d="M100 0H398V100H498V298H398V398H100V298H0V100H100V0Z" fill="white"/>
<path d="M398 0H400V-2H398V0ZM100 0V-2H98V0H100ZM398 100H396V102H398V100ZM498 100H500V98H498V100ZM498 298V300H500V298H498ZM398 298V296H396V298H398ZM398 398V400H400V398H398ZM100 398H98V400H100V398ZM100 298H102V296H100V298ZM0 298H-2V300H0V298ZM0 100V98H-2V100H0ZM100 100V102H102V100H100ZM398 -2H100V2H398V-2ZM400 100V0H396V100H400ZM498 98H398V102H498V98ZM500 298V100H496V298H500ZM398 300H498V296H398V300ZM400 398V298H396V398H400ZM100 400H398V396H100V400ZM98 298V398H102V298H98ZM0 300H100V296H0V300ZM-2 100V298H2V100H-2ZM100 98H0V102H100V98ZM98 0V100H102V0H98Z" fill="#272727" mask="url(#path-1-inside-1_118_2554)"/>
</svg>

      </div>
     

      <div id="index-element" className="absolute z-3 h-screen w-screen flex flex-col justify-center items-center">
      <h3 className="font-main font-bold text-lg text-[#FF0642]">The MetaDAO</h3>
      <div className="w-full px-[40%]">
      <p className="text-center font-main text-[#FF0642]">The DAO consists of 4 orchestrating components</p>
      </div>
      

      </div>

      <div id="index-element" className="grid font-main grid-cols-5 absolute z-6 h-screen w-screen">
        <div className="py-[10%] flex items-end">

          <div className="">
           
          <div className=" rotate-90">
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
        <h3 className="text-white px-5">Tap to explain</h3>
          </div>
        
        </div>

      </div>
     </section>




      {/*Proposals section */}
      <ProposalHeader />

     {showRoles ?
     <Role update={setRoles} data={roleIndex} />
     : null}

    <ProposalAnimation />


     <section className="items-center w-screen flex flex-col bg-black">
      <div className="text-white flex flex-col items-center text-3xl py-[15%] font-main">
        <h3 ref={ref} onMouseOver={replay} onFocus={replay} className="text-[#FF0642] py-4 font-mono" />
        <h3 className="text-center">In institutions there are roles, the same applies to MetaDAO.<br/> In MetaDAO there are <span className="text-[#FF0642]">3</span> roles</h3>
      </div>
    <div className="flex justify-between w-full px-[10%]">
       <motion.div
       animate={{
        translateY:["80%", "-20%", "0%"],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
       }}
       transition={{
        duration: 0.8,
        ease: "easeInOut",
       }}
       onClick={() => setRoles(true)} className="">
       <Roles update={setRoleIndex} data={0} role="Enterpreneur" />
       </motion.div>

       <motion.div
       animate={{
        translateY:["80%", "-20%", "0%"],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
       }}
       transition={{
        duration: 0.8,
        delay: 0.1,
        ease: "easeInOut",
       }}
       onClick={() => setRoles(true)} className="">
       <Roles update={setRoleIndex} data={1} role="Analyst" />
       </motion.div>

       <motion.div
       animate={{
        translateY:["80%", "-20%", "0%"],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
       }}
       transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeInOut",
       }}
       onClick={() => setRoles(true)} className="">
      <Roles update={setRoleIndex} data={2} role="Cyber-Agent" />
       </motion.div>

     
        
        
        
    </div>
    
    <div className="text-white font-main text-xl text-center py-[10%] px-[70px]">
      <p>Remember, MetaDAOs are adaptable!  The specific roles and responsibilities may evolve to best suit the DAO&apos;s specific mission and the talents of its members.</p>
    </div>
</section>

     <section className="w-screen text-black h-screen bg-[#FAFAFA]">
      <div className="absolute h-screen pt-[20%] flex items-end z-1 bg-white">
      <DotLottiePlayer
        src={animationData}
        autoplay
        onEvent={() => {}}
        loop
        className=""
      >
      
      </DotLottiePlayer>
      </div>

      <div className="h-full w-[75%] absolute z-4 px-[50px] pt-8">
       <h3 className="font-mono text-[#FF0642] ">METADAO STATS</h3>
       <h2 className="font-bold text-6xl mt-5">MetaDAO has been doing quite well since its launch in September 2023</h2>
       <p className="font-main text-xl mt-4">The DAO stats have been very much on the green side with over 100% gain in participants in the last 2 months and a literal over 1800 percent token pump. MetaDAO is one of the fastest growing projects on Solana </p>
      </div>

      <div className="absolute px-[50px] pb-[6%] text-black grid grid-cols-6 z-2 h-full w-full ">
        <div className="h-full flex items-end w-full">

          <div className="text-black font-main">
          <h3 className="font-medium font-main text-[3.3rem]">14.4K</h3>
          <span className="font-mono text-[#FF0642] text-[1rem]">CIRC. SUPPLY</span>
          </div>
        
        </div>

        <div className="h-full flex items-end w-full">

<div className="text-black font-main">
<h3 className="font-medium font-main text-[3.3rem]">200+</h3>
<span className="font-mono text-[#FF0642] text-[1rem]">PARTICIPANTS</span>
</div>

</div>

<div className="h-full flex items-end w-full">

<div className="text-black font-main">
<h3 className="font-medium font-main text-[3.3rem]">1800%</h3>
<span className="font-mono text-[#FF0642] text-[1rem]">META PRICE GROWTH</span>
</div>

</div>
      </div>

      
      
     </section>

     <section className="h-[20vh] w-screen bg-white">

     </section>

    <section
    style={{ 
      backgroundImage: 'url("frame.svg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center' 
    }}
    className="h-screen w-screen bg-white">

    </section>
    <section className="h-[20vh] w-screen bg-white">

     </section>

     {/*show explainer */}
     { showExplainer ?
      <Explainer update={setExplainer} data={data[dataNumber]} />
     : null}
     <section
     style={{ 
      backgroundImage: 'url("map.svg")',
      backgroundSize: 'contain',
      backgroundPosition: 'center' 
    }}
     className="bg-black h-screen w-screen" >
      <div className="h-full w-full bg-[#00000030] grid grid-rows-8">
       <div className="row-span-7 flex p-[20%] justify-center items-center bg-gradient-to-t from-black via-black/30 to-transparent h-full w-full">
        <h3 className="text-white text-center text-5xl font-main font-bold">
        An on-chain country with no lands and no leaders.
        </h3>
       </div>
       <div className="h-full w-full px-5 flex items-center justify-between pr-8 text-white bg-black">
       <h3 className="font-mono">READ MORE</h3>
       <button className="bg-[#FF0642] px-3 py-2 font-mono">
        HERE
       </button>
       </div>
      </div>

     </section>
    </main>
  );
}


function useDimension(contentRef: React.MutableRefObject<null>): { width: any; height: any; } {
  throw new Error("Function not implemented.");
}

