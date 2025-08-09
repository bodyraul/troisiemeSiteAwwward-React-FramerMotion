import React from 'react'
import { motion} from "framer-motion"
import tabImg from '../../tools/cardsTools/TabImg'
import tabText from '../../tools/cardsTools/TabText'

export default function CardSolo({tabAnim,nb}) {

  return (
    <motion.div  style={ {transform:tabAnim.rotation[nb],left:tabAnim.position[nb],background:tabAnim.bgColor[nb]}}  className='supp1600:w-[31%] supp1600:h-[450px] absolute  transition-transform duration-500 ease-linear w-[31%] h-[430px] rounded-[50px] text-center flex flex-col items-center justify-center'>
              <img src={tabImg.src[nb]} className='supp1600:size-[80px] size-[60px]'alt={tabImg.descriptionImg[nb]} />
              <p className='supp1600:text-[60px] supp1600:leading-[67px] text-[50px] leading-[57px] font-[Montreal-Bold] my-6 mx-0  text-blanc'>
                {tabText.textUn[nb]}<br></br>{tabText.textDeux[nb]}
                </p>
              <p style={{opacity:tabAnim.opacityDiv[nb]}} className=' supp1600:text-[21px] text-[19px] font-[Montreal-Bold] py-0 px-[10px] text-blanc'>
                {tabText.textTrois[nb]}<br></br>{tabText.textQuatre[nb]}
              </p>
    </motion.div>
  )
}

