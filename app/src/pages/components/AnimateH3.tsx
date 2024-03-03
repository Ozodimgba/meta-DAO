import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';

type AnimateProps = {
  text: string;
  el: keyof JSX.IntrinsicElements;
  className: string;
}



function AnimateText({
   text,
   el: Wrapper = "p",
   className,
   }: AnimateProps) {

    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.5 })

    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y: '20px'
        },
        visible: {
            opacity: 1,
            y: '0px' ,
            transition: {
              duration: 0.1
            }
        }
    }
  return (
    <Wrapper className={className}>
    <span className='sr-only'>{text}</span>
    <motion.span ref={ref} initial='hidden' animate={ inView ? 'visible': 'hidden' } transition={{ staggerChildren: 0.1 }} aria-hidden>
      {text?.split('').map((char) => (
        <motion.span variants={defaultAnimations} key="1">{char}</motion.span>    
      ))}
    </motion.span>
    </Wrapper>
  )
}

export default AnimateText