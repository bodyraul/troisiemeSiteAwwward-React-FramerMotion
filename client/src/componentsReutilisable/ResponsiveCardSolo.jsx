import React from 'react'
import { motion} from "framer-motion"


export default function ResponsiveCardSolo({transform,background,opacity,src,alt,textUn,textDeux,textTrois,textQuatre}) {
  return (
    <motion.div  style={ {transform:transform,background:background}} className="supp480:h-[450px] supp480:w-[400px] supp480:mt-[30px] supp768:h-[400px] supp768:mt-[40px] supp768:w-[600px] supp1024:w-[100%] supp1024:mt-[50px] left-auto transition-transform duration-500 ease-linear  relative h-[320px] mt-[20px] rounded-[50px] text-center w-[250px] flex flex-col items-center justify-center">
        <img className='supp480:size-[50px] supp768:size-[60px] supp1024:size-[70px] size-[40px]' src={src} alt={alt} />
        <p className='supp480:text-[30px] supp480:leading-[35px] supp480:my-[35px] supp768:text-[40px] supp768:leading-[47px] supp768:my-[45px] supp1024:text-[50px] supp1024:leading-[57px] supp1024:my-[55px] text-[18px] leading-[20px] font-[Montreal-Bold] my-[23px] mx-0  text-blanc'>{textUn}<br></br>{textDeux}</p>
        <p style={{opacity:opacity}} className='supp480:text-[15px] supp768:text-[17px] supp1024:text-[19px] text-blanc text-[12px] font-[Montreal-Bold] py-0 px-[10px]'>{textTrois}<br></br>{textQuatre}</p>
    </motion.div>
  )
}
