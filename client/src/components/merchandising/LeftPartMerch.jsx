import React from 'react'
import { motion} from "framer-motion"
import ParaMerch from '../../componentsReutilisable/Merchandising/ParaMerch'

export default function LeftPartMerch({tabAnim}) {
  return (
    <div  className='relative flex flex-col items-center justify-between rounded-[70px] w-[42%] min-w-[500px] bg-cardUn h-[calc(100%-30px)] overflow-hidden'>
        <motion.p style={{opacity:tabAnim.opacityPara[0],transform:tabAnim.scale}} className="supp1600:text-[55px] supp1600:leading-[62px] text-blanc text-[45px] leading-[55px] font-[Montreal-Bold] text-start w-full pt-[50px] pr-0 pb-0 pl-[50px] transition-all duration-300 ease-linear">
            The dedicated <br></br>Fashion<br></br>Application
        </motion.p>
        <motion.p style={{opacity:tabAnim.opacityPara[0],transform:tabAnim.scale}}  className="text-grisClair leading-[28px] font-[Montreal-Bold] text-xl text-start w-full pt-[10px] pr-0 pb-0 pl-[50px] transition-all duration-300 ease-linear">
            TechNova lets you manage your<br></br> collection pages like a professional.
        </motion.p>
        <ParaMerch nb={0} tabAnim={tabAnim} ></ParaMerch>
        <ParaMerch nb={1} tabAnim={tabAnim} ></ParaMerch>
        <ParaMerch nb={2} tabAnim={tabAnim} ></ParaMerch>
    </div>
  )
}
