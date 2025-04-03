import React from 'react'
import { motion} from "framer-motion"


export default function ResponsiveCardSolo({transform,background,opacity,src,alt,textUn,textDeux,textTrois,textQuatre}) {
  return (
    <motion.div  style={ {transform:transform,background:background}} className="left-auto transition-transform duration-500 ease-linear supp405:w-[80vw] relative h-[450px] m-[10px] rounded-[50px] text-center w-[300px] flex flex-col items-center justify-center">
        <img className='w-20 h-20' src={src} alt={alt} />
        <p className='supp625:text-[60px] supp625:leading-[60px] text-[50px] leading-[50px] font-[Montreal-Bold] my-[23px] mx-0  text-blanc'>{textUn}<br></br>{textDeux}</p>
        <p style={{opacity:opacity}} className='supp625:text-[21px] text-blanc text-[15px] font-[Montreal-Bold] py-0 px-[10px]'>{textTrois}<br></br>{textQuatre}</p>
    </motion.div>
  )
}
