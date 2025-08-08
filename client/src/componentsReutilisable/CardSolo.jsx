import React from 'react'
import { motion} from "framer-motion"
export default function CardSolo({rotation,color,opacity,source,left,descriptionImg,textUn,textDeux,textTrois,textQuatre}) {

    

  return (
    <motion.div  style={ {transform:rotation,left:left,background:color}}  className='supp1600:w-[420px] supp1600:h-[450px] absolute  transition-transform duration-500 ease-linear w-[380px] h-[430px] m-[10px] rounded-[50px] text-center flex flex-col items-center justify-center'>
              <img src={source} className='supp1600:size-[80px] size-[60px]'alt={descriptionImg} />
              <p className='supp1600:text-[60px] supp1600:leading-[67px] text-[50px] leading-[57px] font-[Montreal-Bold] my-6 mx-0  text-blanc'>{textUn}<br></br>{textDeux}</p>
              <p style={{opacity:opacity}} className=' supp1600:text-[21px] text-[19px] font-[Montreal-Bold] py-0 px-[10px] text-blanc'>{textTrois}<br></br>{textQuatre}</p>
    </motion.div>
  )
}

