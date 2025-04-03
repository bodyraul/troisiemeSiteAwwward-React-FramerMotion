import React from 'react'
import { motion} from "framer-motion"
export default function CardSolo({rotation,color,opacity,source,left,descriptionImg,textUn,textDeux,textTrois,textQuatre}) {

    

  return (
    <motion.div  style={ {transform:rotation,left:left,background:color}}  className=' absolute  transition-transform duration-500 ease-linear w-[420px] h-[450px] m-[10px] rounded-[50px] text-center flex flex-col items-center justify-center'>
              {console.log(textUn)}
              <img src={source} className='w-20 h-20'alt={descriptionImg} />
              <p className='text-[60px] font-[Montreal-Bold] my-6 mx-0 leading-[60px] text-blanc'>{textUn}<br></br>{textDeux}</p>
              <p style={{opacity:opacity}} className=' text-xl font-[Montreal-Bold] py-0 px-[10px] text-blanc'>{textTrois}<br></br>{textQuatre}</p>
    </motion.div>
  )
}
