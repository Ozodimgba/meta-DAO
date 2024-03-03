import React from 'react'
import { motion } from 'framer-motion'
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import ReactMarkdown from 'react-markdown';

type Data = {
    title: string;
    image: string;
    content: number;
}

interface ComponentProps {
    update: React.Dispatch<React.SetStateAction<boolean>>; 
    data: Data;
  }

function Explainer({ update, data }: ComponentProps) {

  const ExplainerOne = () => {
    return(
        <div className='h-full w-full pb-[10%] text-[#FF0642]'>
          <h3>The conditional vault program in MetaDao is a key mechanism for implementing its futarchy governance system. Since blockchains can&apos;t truly &apos;revert&apos; transactions, conditional vaults create a system of simulated reverts for prediction markets.</h3>
          <h4 className='font-bold mt-5'>Here&apos;s how it works:</h4>
          <ol className='mt-5'>
            <li>
            <span className='font-bold'>Conditional Vault Creation:</span> Before a proposal goes to market,
            a conditional vault is created for each relevant token (like USDC and META). These vaults are linked to the proposal and a designated settlement authority
            </li>
            <li className='mt-4'>
            <span className='font-bold'>Minting Conditional Tokens:</span> Two types of conditional tokens are minted within the vault: (like USDC and META).  
            </li>
            <li className='mt-4 pl-8'>
            <span className='font-bold'>Conditional-on-Pass Tokens:</span>Represent successful proposals and entitle holders to the underlying tokens upon proposal passage.  
            </li>
            <li className='mt-4 pl-8'>
            <span className='font-bold'>Conditional-on-Fail Tokens:</span>Represent unsuccessful proposals. If the proposal fails, these tokens are used to &apos;revert&apos; the market by returning the original tokens deposited for prediction. 
            </li>
          </ol>
          <p className='mt-4'>By using these conditional tokens, MetaDao simulates the ability to revert trades based on the proposal&apos;s outcome. This allows prediction markets to function effectively within the framework of the futarchy system.</p>
        </div>
    )
  }

  const ExplainerTwo = () => {
    return(
        <div className='h-full w-full pb-[10%] text-[#FF0642]'>
          <h3>TWAP stands for Time-Weighted Average Price. It&apos;s a metric used in finance, particularly by institutional investors, to track the average execution price of a security (stock, bond, etc.) over a specific period</h3>
          <h4 className='font-bold mt-5'>Here&apos;s how it works:</h4>
          <ol className='mt-5'>
            <li>
            <span className='font-bold'>TWAP Calculation:</span> At the end of the decision window, the TWAP of the META token price over that period is calculated.
            </li>
            <li className='mt-4'>
            <span className='font-bold'>Comparing Pre- and Post-Proposal TWAP: </span>This post-proposal TWAP is compared with the TWAP of the META token calculated for an equivalent time window immediately before the proposal was submitted.
            </li>
          </ol>
          <h4 className='font-bold mt-5'>Why use a TWAP:</h4>
          <ol className='mt-5'>
            <li>
            <span className='font-bold'>Minimizes Manipulation:</span> TWAP helps reduce the impact of any single large trade designed to artificially influence the price and sway the proposal&apos;s outcome.
            </li>
            <li className='mt-4'>
            <span className='font-bold'>Fairness:</span> It&apos;s a transparent and relatively neutral mechanism, relying on market forces to determine the outcome.
            </li>
          </ol>
        </div>
    )
  }

  const ExplainerThree = () => {
    return(
        <div className='h-full w-full pb-[10%] text-[#FF0642]'>
          <h3>The Autocrat program acts as the backbone of Meta-DAO&apos;s futarchy system. It&apos;s the conductor that orchestrates the entire process, ensuring proposals are submitted, markets are created, and decisions are executed based on market outcomes.</h3>
          <h4 className='font-bold mt-5'>Key responsibilities:</h4>
          <ol className='mt-5'>
            <li>
            <span className='font-bold'>Proposal Management:</span>The Autocrat facilitates the creation and submission of proposals by users.
           stores proposal details like descriptions links and links to relevant information.
            </li>
            <li className='mt-4'>
            <span className='font-bold'>Conditional Vault Creation:</span>When a proposal is submitted, the Autocrat program automatically creates two conditional vaults.
            </li>
            <li className='mt-4'>
            <span className='font-bold'>Market Orchestration:</span>The Autocrat program interacts with a separate TWAP program (Time-Weighted Average Price) to track the performance of the conditional markets associated with each proposal.
            </li>
            <li className='mt-4'>
            <span className='font-bold'>Outcome Execution:</span>Once the decision window closes (e.g., 24 hours), the Autocrat program analyzes the TWAP data from the prediction markets.
            Based on the prevailing market sentiment (higher TWAP in &quot;pass&quot; or &quot;fail&quot; market), the Autocrat automatically executes the pre-defined instructions associated with the winning outcome.
            </li>
          </ol>
          <h4 className='font-bold mt-5'>Benefits of the Autocrat program:</h4>
          <ol className='mt-5'>
            <li>
            <span className='font-bold'>Transparency and Trust:</span>By relying on a programmatic approach, the Autocrat program reduces the potential for human manipulation and fosters trust in the fairness of the futarchy system.
            </li>
          </ol>
        </div>
    )
  }

  const content = [
    <ExplainerOne key={1} />,
    <ExplainerTwo key={2} />,
    <ExplainerThree key={3} />
  ]

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
        duration: 4,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 3
      }}
      >{data?.title}</motion.div>
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
          <div className='overflow-y-scroll max-w-full h-[55vh]'>
          <div className="font-mono mt-8">{content[data?.content]}</div>
          </div>
          
          {/* <code>TWAP = (∑ (Price * Time)) / ∑ Time </code> */}
        </motion.div>
      </div>
     </div>
     </motion.section>
  )
}

export default Explainer