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

     <section className="h-[100%] bg-black text-white w-screen">

      <div className="w-[100%] p-6 py-[10%] flex justify-center">
        <div className="w-[80%]">
        <p className="font-main text-white text-center text-3xl">...even in a democracy the preferences of the average American appear to have only a minuscule, <span className="text-[#FF0642]">near-zero, statistically non-significant</span> impact upon public policy -| <span className="text-[#FF0642]">Martin Gilens and Benjamin Page</span> </p>
      </div>
      </div>

      <div className="w-full px-[70px]">
        <div className="w-[70%]">
        <h3 className="font-main font-bold leading-[4rem] text-5xl">Imagine instead of using <span className="text-[#FF0642] italic">presidents, CEOs, directors</span> and all other forms of human leadership</h3>
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
        
        <div className="w-[100%] flex mt-4 flex-col">
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

     <section className="h-screen w-screen">
     
     </section>
    </main>
  );
}


