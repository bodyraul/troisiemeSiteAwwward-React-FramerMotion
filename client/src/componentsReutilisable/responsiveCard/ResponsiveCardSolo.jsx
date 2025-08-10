import React from 'react'
import { motion} from "framer-motion"
import tabText from '../../tools/cardsTools/TabText'
import tabImg from '../../tools/cardsTools/TabImg'

export default function ResponsiveCardSolo({tabAnim,nb}) {
  return (
    <motion.div  style={ {transform:tabAnim.rotation[nb],background:tabAnim.bgColor[nb]}} className="supp480:h-[450px] supp480:w-[400px] supp480:mt-[40px] supp768:h-[400px] supp768:mt-[50px] supp768:w-[600px] supp1024:w-[100%] supp1024:mt-[70px] left-auto transition-transform duration-500 ease-linear  relative h-[300px] mt-[30px] rounded-[50px] text-center w-[250px] flex flex-col items-center justify-center ">
        <img className='supp480:size-[50px] supp768:size-[60px] supp1024:size-[70px] size-[40px]' src={tabImg.src[nb]} alt={tabImg.descriptionImg[nb]} />
        <p className='supp480:text-[30px] supp480:leading-[35px] supp480:my-[35px] supp768:text-[40px] supp768:leading-[47px] supp768:my-[45px] supp1024:text-[50px] supp1024:leading-[57px] supp1024:my-[55px] text-[18px] leading-[20px] font-[Montreal-Bold] my-[23px] mx-0  text-blanc'>{tabText.textUn[nb]}<br></br>{tabText.textDeux[nb]}</p>
        <p style={{opacity:tabAnim.opacity[nb]}} className='supp480:text-[15px] supp768:text-[17px] supp1024:text-[19px] text-blanc text-[12px] font-[Montreal-Bold] py-0 px-[10px]'>{tabText.textTrois[nb]}<br></br>{tabText.textQuatre[nb]}</p>
    </motion.div>
  )
}
