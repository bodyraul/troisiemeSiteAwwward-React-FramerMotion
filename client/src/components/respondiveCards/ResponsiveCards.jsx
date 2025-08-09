import React from 'react'
import { motion } from "framer-motion"
import ResponsiveCardSolo from '../../componentsReutilisable/cards/ResponsiveCardSolo'
import useSetColor from '../../customHoocks/useSetColor'
import UseAnimResCard from '../../customHoocks/responsiveCardHoocks/UseAnimResCard'

export default function ResponsiveCards({setcolor}) {

  const tabAnim=UseAnimResCard();

  useSetColor(tabAnim.scrollYProgress,setcolor,0.4,"#f3f3f3",0.42,"#bfbfbf",0.49,"#5f5f5f",0.51,"#181818");

  return (
  <div ref={tabAnim.ref} className='supp480:h-[1750px] supp480:mb-[70px] supp768:h-[1650px] supp1024:h-[1750px] supp1024:w-[100%] mb-[20px]   h-[1200px] w-full  flex flex-col items-center justify-center relative '>
    <motion.div style={{color:tabAnim.colorTitre,opacity:tabAnim.opacityTitre}}  className=' supp480:text-[20px] supp480:leading-[28px] supp480:mt-[90px] supp480:mb-[25px] supp768:text-[27px] supp768:leading-[33px] supp768:mt-[100px] supp768:mb-[50px] supp1024:text-[35px] supp1024:leading-[45px] text-noir font-[Montreal-Bold] text-[16px] text-center leading-[25px] transition-all duration-100 ease-linear'>
      Collections are your most <br></br>important pages, but are <br></br>frustrating to manage
    </motion.div>
    <div  className="supp480:h-[1500px] supp768:h-[1400px] supp1024:h-[1450px] supp1024:w-[80%] w-[1320px] mb-[10px] h-[1100px] relative flex flex-col items-center justify-center ">
      <ResponsiveCardSolo tabAnim={tabAnim} nb={0} ></ResponsiveCardSolo>
      <ResponsiveCardSolo tabAnim={tabAnim} nb={1} ></ResponsiveCardSolo>
      <ResponsiveCardSolo tabAnim={tabAnim} nb={2} ></ResponsiveCardSolo>
    </div>
  </div>
  )
}
