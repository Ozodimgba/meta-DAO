import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface CounterProps {
    maxValue: number;
    duration: number; 
}

function Results() {
    const [yesValue, setYesValue] = useState<number>(0);
    const [noValue, setNoValue] = useState<number>(0); 
    const [bought, setBought] = useState<boolean>(false); 

    function getRandomNumber(min: number, max: number) {
        return Math.random() * (max - min) + min; 
      }

      const handleChoice = () => {
        if (!bought) {
          setBought(true);
      
          // Get random numbers here...
          const randomNumber = Math.random() * (0.8 - 0.5) + 0.5;
           const randomNumber2 = Math.random() * (1.0 - 0.4) + 0.4;

          setYesValue(randomNumber);
          setNoValue(randomNumber2);
        }
      };

    
    
    const Counter = ({ maxValue, duration }: CounterProps) => {
        const [count, setCount] = useState<number>(0);

    
        function calculateTimeInterval(maxValue: number, duration: number) {
            if (duration <= 0) {
                throw new Error("Duration must be a positive number.");
            }
            return duration * 1000 / maxValue;
        }
    
        useEffect(() => {
            const timeInterval = calculateTimeInterval(maxValue, duration);
    
            const interval = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount < maxValue) {
                        return prevCount + 1;
                    } else {
                        clearInterval(interval);
                        return prevCount; 
                    }
                });
            }, timeInterval);
    
            return () => clearInterval(interval);
        }, [count, maxValue, duration]); 
    
        return (
            <div className="flex justify-center px-3 items-center w-[10%]"><span className='className="font-medium text-lg text-white"'>{count.toFixed(0)} SOL</span></div>
        );
    };
    
      

  return (
    <div>
        <div className="w-[100%] py-6 flex justify-center">
        <div className="w-[80%] gap-6 flex justify-center">
        <button onClick={handleChoice} className={`h-[70px] px-[10%] ${ bought? "text-[#CB00FE60]": "text-[#CB00FE]" }  font-main font-bold text-4xl ${ bought? "bg-[#06FFC370]": "bg-[#06FFC3]" }`}> BUY YES</button>
        <button  onClick={handleChoice} className={`h-[70px] px-[10%] text-[#FFC93E] font-main font-bold text-4xl ${ bought? "bg-[#FF064240]": "bg-[#FF0642]" } `}> BUY NO</button>
        </div>
      </div>

      <div className="w-[100%] px-[70px] py-6 flex flex-col">
        <div className="flex items-center gap-3">
        <h3 className="text-[#FF0642] text-2xl font-mono">RESULTS</h3>
        {/* <img src="clock.svg" /> */}
        </div>
        
        <div className="w-[100%] flex mt-4 gap-3 flex-col">
        <div className="h-[40px] text-white flex font-mono">
          <motion.div 
          animate={{ width: `${yesValue * 100}%` }}
          transition={{
            duration: 4
           }}
          className="w-full h-full bg-[#06FFC3]"></motion.div >
          {/* <div className="flex justify-center px-3 items-center w-[10%]"> <span className="font-medium text-lg text-white">7 SOL</span> </div> */}
          <Counter maxValue={yesValue * 10} duration={2} />
        </div>
        <div className="h-[40px] text-white flex font-mono">
          <motion.div
           animate={{ width: `${noValue * 100}%` }}
           transition={{
            duration: 4
           }}
           className="w-[50%] h-full bg-[#FF0642]"></motion.div>
          <Counter maxValue={noValue * 10} duration={2} />
        </div>
        </div>
      </div>

      {bought ? <div className='text-white px-[70px]'>
        <h3 className='font-mono'>EXPLAINER</h3>
        <div className='mt-4'>
        { yesValue > noValue ? <p>The YES stock is valued more than the NO stock so the Organization will have to retain the CEO</p> : <p>The sell stock is valued more than the buy stock so the Organization will have to fire the CEO</p>}
        </div>
        <button className='bg-white px-3 py-2 font-mono mt-3 text-[#FF0642]'>More Info</button>
      </div> : null}
      
    </div>
  )
}

export default Results