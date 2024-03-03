import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

type AnimateProps = {
    text: string;
    el: keyof JSX.IntrinsicElements;
    className: string;
  }

function Typing({
    text,
    el: Wrapper = "p",
    className,
    }: AnimateProps) {
  
  const joinText = text.split('')
  const wordsToColor = ["minuscule,", "near-zero,", "non-significant", "statistically", "significant", "Martin", "Gilens", "and", "Benjamin", "Page"];

  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.5 })
 
  return (
    <div>{joinText?.map((el, i) => (
        <motion.span
          className="font-main text-white text-center text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 } }
          transition={{
            duration: 0.09,
            delay: i / 20,
          }}
          key={i}
          style={{ color: wordsToColor.includes(el) ? "#FF0642" : "inherit" }}
        >
          {el}
        </motion.span>
        ))}</div>
  )
}

export default Typing