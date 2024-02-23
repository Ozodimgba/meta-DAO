import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`overflow-hidden max-w-screen ${inter.className}`}
    >
     <section className="h-screen text-white w-screen">
     <div className="h-[70px] w-full"></div>
     <div className="h-[210px] flex w-full">
      <div className="h-[70px] w-[840px]"></div>
      <div className="h-[210px] px-4 py-2 w-[350px] bg-[#2B2B2B]">
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
      </div>
     </div>

     <div className="h-[70px] flex w-full">
      <div className="h-[70px] w-[70px]">
      </div>
     <h2 className="font-main font-bold h-full text-7xl text-[#FF0642] px-1">
        The MetaDAO
      </h2>
     </div>

     <div className="h-[140px] flex w-full">
      <div className="h-[70px] w-[70px]">
      </div>
      <div className="text-white w-[490px] h-full items-center row-span-2 font-main font-light text-3xl">
        <div className="py-4 px-1">
        <p>MetaDAO is the first protocol on Solana using <span className="italic">futarchy</span> to reshape governance</p>
        </div>
      </div>
     </div>

     <div className="h-[70px] flex w-full">
      <div className="h-[70px] w-[70px]">
      </div>
     <button className="font-main font-medium h-full w-[210px] text-xl bg-[#FF0642] px-1">
        Learn how it works
      </button>
     </div>

     </section>

     <section className="h-[100vh] bg-black text-white w-screen">

      <div className="w-[100%] p-6 py-[10%] flex justify-center">
        <div className="w-[80%]">
        <p className="font-main text-white text-center text-3xl">...even in a democracy the preferences of the average American appear to have only a minuscule, <span className="text-[#FF0642]">near-zero, statistically non-significant</span> impact upon public policy -| <span className="text-[#FF0642]">Martin Gilens and Benjamin Page</span> </p>
      </div>
      </div>

      <div className="w-full px-[70px]">
        <div className="w-[70%]">
        <h3 className="font-main font-medium leading-[4rem] text-5xl">Imagine instead of using <span className="text-[#FF0642]">presidents, CEOs, directors</span> <span className="text-[#ffffff50]"> and all other forms of human leadership</span> </h3>
        </div>
      </div>
     
     </section>

     <section className="bg-black text-white w-screen">


      <div className="w-full py-4 px-[70px]">
        <div className="w-[70%]">
        <h3 className="font-main font-bold leading-[4rem] text-5xl"><span className="text-[#FF0642]">MetaDAO</span> is pioneering this experiment on Solana.</h3>
        </div>
      </div>
      
      <div className="w-full py-4 px-[70px]">
        <img src="use.svg" />
      </div>
      
      <div className="w-[100%] py-6 flex justify-center">
        <div className="w-[80%] gap-6 flex justify-center">
        <button className="h-[70px] px-[10%] text-[#CB00FE] font-main font-bold text-4xl bg-[#06FFC3]"> BUY YES</button>
        <button className="h-[70px] px-[10%] text-[#FFC93E] font-main font-bold text-4xl bg-[#FF0642]"> BUY NO</button>
        </div>
      </div>

      <div className="w-[100%] px-[70px] py-6 flex flex-col">
        <div className="flex items-center gap-3">
        <h3 className="text-[#FF0642] text-2xl">RESULTS</h3>
        <img src="clock.svg" />
        </div>
        
        <div className="w-[100%] flex mt-4 gap-3 flex-col">
        <div className="h-[40px] text-[#CB00FE] flex font-main">
          <div className="w-full h-full bg-[#06FFC3]"></div>
          <div className="flex justify-center px-3 items-center w-[10%]"> <span className="font-medium text-lg text-white">7 SOL</span> </div>
        </div>
        <div className="h-[40px] text-[#CB00FE] flex font-main">
          <div className="w-[50%] h-full bg-[#FF0642]"></div>
          <div className="flex justify-center px-3 items-center w-[10%]"> <span className="font-medium text-lg text-white">3.5 SOL</span> </div>
        </div>
        </div>
      </div>
     
     </section>

     <section id="secky" className="h-[200vh] relative flex justify-between items-center w-screen">
       
      <div className="absolute z-6 h-screen w-screen grid grid-cols-2 grid-rows-2 gap-3">
       <div className="flex justify-end h-full w-full">
       <div className="h-[280px] w-[350px] flex flex-col justify-between bg-[#FF0642]">
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
       </div>
       </div>

       <div className="h-full w-full">
       <div className="h-[280px] w-[350px] flex flex-col justify-between bg-[#FF0642]">
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
       </div>
       </div>

       <div className=" flex cursor-pointer justify-end h-full w-full">
       <div className="h-[280px] w-[350px] flex flex-col justify-between bg-[#FF0642]">
       <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] bg-black"></div>
          <div className="h-[70px] w-[70px] bg-black"></div>
        </div>

        <div className="w-full h-full flex flex-col justify-center">
      <div className="w-full px-6 pr-[28%] py-3">
      <h3 className="font-main font-bold text-lg text-white">Autocrat Program</h3>
      <p className="font-main text-sm mt-1 text-white">Orchestrates the futarchy processs by managing prosals, creating conditional vaults and executing decision based on market outcomes</p>
      </div>
        </div>

        <div className="h-[70px] flex justify-between w-full">
          <div className="h-[70px] w-[70px] "></div>
          <div className="h-[70px] w-[70px] bg-black"></div>
        </div>
       </div>
       </div>

       <div className=" h-full w-full">
       <div className="h-[280px] cursor-pointer w-[350px] flex flex-col justify-between bg-[#FF0642]">
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
       </div>
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
      <div className="w-[25%]">
      <p className="text-center font-main text-[#FF0642]">The DAO consists of 4 orchestrating programs</p>
      </div>
      

      </div>

       

       

     </section>
     <section className="h-screen w-screen py-[10%] bg-black">
     <div className="h-[50vh] bg-black flex justify-center items-center">
        <div className="bg-black w-[80%] h-full relative">

        <div className="absolute w-full flex justify-between h-full z-1">
        <div className="w-[70px] h-full border-[0.001rem] border-y-0 border-[#BABABA17]"></div>
        <div className="w-[70px] h-full border-[0.001rem] border-y-0 border-[#BABABA17]"></div>
        </div>

        <div className="absolute w-full flex flex-col justify-between h-full z-2">
        <div className="w-full h-[70px] border-[0.001rem] border-x-0 border-[#BABABA17]"></div>
        <div className="w-full h-[70px] border-[0.001rem] border-x-0 border-[#BABABA17]"></div>
        </div>

        <div className="absolute w-full p-[70px] text-white flex items-center justify-center h-full z-3">
        <h3 className="font-main font-medium text-center text-5xl">Proposals are anything that can be represented by a <span className="text-[#FF0642]"> Solana VM instruction</span></h3>
        </div>

        <div className="absolute w-full text-white flex items-center justify-center h-full z-4">
        <img src="frontdrop.svg" />
        </div>
        </div>

        
     </div>
     </section>
    </main>
  );
}


