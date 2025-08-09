import React from 'react'
import { motion} from "framer-motion"
import tabCard from '../../tools/cardsTools/TabCard'

export default function CardSolo({rotation,source,nombre}) {

  return (
    <motion.div  style={ {transform:rotation,left:tabCard.position[nombre],background:tabCard.color[nombre]}}  className='supp1600:w-[31%] supp1600:h-[450px] absolute  transition-transform duration-500 ease-linear w-[31%] h-[430px] rounded-[50px] text-center flex flex-col items-center justify-center'>
              <img src={source} className='supp1600:size-[80px] size-[60px]'alt={tabCard.description[nombre]} />
              <p className='supp1600:text-[60px] supp1600:leading-[67px] text-[50px] leading-[57px] font-[Montreal-Bold] my-6 mx-0  text-blanc'>
                {tabCard.textUn[nombre]}<br></br>{tabCard.textDeux[nombre]}
                </p>
              <p style={{opacity:tabCard.opacity[nombre]}} className=' supp1600:text-[21px] text-[19px] font-[Montreal-Bold] py-0 px-[10px] text-blanc'>
                {tabCard.textTrois[nombre]}<br></br>{tabCard.textQuatre[nombre]}
              </p>
    </motion.div>
  )
}

