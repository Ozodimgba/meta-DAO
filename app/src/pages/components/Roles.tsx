import React, { useState } from 'react'
import { motion } from 'framer-motion';

interface Roles {
  role: string;
}

function Roles({ role }: Roles) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <motion.main
   
    >
  <motion.div 
   whileHover={{ scale: 1.01, y: -30 }}
  className="relative max-h-72 max-w-72 text-black hover:text-white">
    <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M300 0H400V100H500V200H400V300H500V400H400V500H300V400H200V500H100V400H0V300H100V200H0V100H100V0H200V100H300V0Z"
        fill="#FF0642"
      />
    </svg>

    <div id="text" className="absolute inset-0 flex justify-center items-center">
      <h3 className={`font-mono text-xl`}>{role}</h3>
    </div>
  </motion.div>
</motion.main>
  )
}

export default Roles