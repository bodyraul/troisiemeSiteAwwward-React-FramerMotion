import React from 'react'
import { motion} from "framer-motion"

export default function ParaLeftMerchandising({bottom,src,alt,opacity,transform,titre,paraUn,paraDeux}) {
  return (
     <motion.div style={{bottom:bottom}}  className="h-[240px] w-[calc(100%-100px)] absolute flex flex-col justify-around z-[1] bg-cardUn bottom-[calc(0%+18px)] transition-all duration-300 ease-linear">
        <div className="flex flex-row items-center justify-start h-[24%] bg-grisParaCache text-blanc font-[Montreal-Bold] text-2xl pt-5 pl-0 pb-5 pr-[10px] rounded-2xl">
            <img className='h-10 w-10' src={src} alt={alt} />
            <p className='ml-[10px] flex flex-row items-center justify-center'>{titre}</p>
        </div>
        <motion.div style={ { transform: transform ? transform : 'none',opacity:opacity } }    className="h-[70%] transition-all duration-200 ease-linear flex flex-col items-start justify-evenly">
            <p className="text-blanc font-[Montreal-Bold] text-[33px]">
            {paraUn}
            </p>
            <p className="text-grisClair font-[Montreal-Bold] text-xl leading-[28px]">
            {paraDeux}
            </p>
        </motion.div>
        
    </motion.div>
  )
}
