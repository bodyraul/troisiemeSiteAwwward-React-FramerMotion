import React from 'react'
import { motion } from "framer-motion"
import ResponsiveCardSolo from '../../componentsReutilisable/responsiveCard/ResponsiveCardSolo'
import useSetColor from '../../customHoocks/useSetColor'
import UseAnimResCard from '../../customHoocks/responsiveCardHoocks/UseAnimResCard'

export default function ResponsiveCards({setcolor}) {

  const tabAnim=UseAnimResCard();

  useSetColor(tabAnim.scrollYProgress,setcolor,0.4,"#f3f3f3",0.42,"#bfbfbf",0.49,"#5f5f5f",0.51,"#181818");

  return (
  <div ref={tabAnim.ref} className='supp480:mb-[150px] supp480:mt-[40px] supp768:mb-[200px] supp768:mt-[50px]  supp1024:w-[100%] supp1024:mb-[230px] supp1024:mt-[70px] mb-[90px] mt-[30px] w-full  flex flex-col items-center justify-between relative '>
    <motion.div style={{color:tabAnim.colorTitre,opacity:tabAnim.opacityTitre}}  className=' supp480:text-[20px] supp480:leading-[28px] supp480:py-[110px] supp768:text-[27px] supp768:leading-[33px] supp768:py-[150px] supp1024:text-[35px] supp1024:leading-[45px] supp1024:py-[160px] text-noir font-[Montreal-Bold] text-[16px] py-[60px] text-center leading-[25px] transition-all duration-100 ease-linear '>
      Collections are your most <br></br>important pages, but are <br></br>frustrating to manage
    </motion.div>
    <div  className=" supp1024:w-[80%] w-[1320px] relative flex flex-col items-center justify-between ">
      <ResponsiveCardSolo tabAnim={tabAnim} nb={0} ></ResponsiveCardSolo>
      <ResponsiveCardSolo tabAnim={tabAnim} nb={1} ></ResponsiveCardSolo>
      <ResponsiveCardSolo tabAnim={tabAnim} nb={2} ></ResponsiveCardSolo>
    </div>
  </div>
  )
}