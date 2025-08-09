import React from 'react'
import { motion } from "framer-motion"
import CardSolo from '../../componentsReutilisable/cards/CardSolo'
import useSetColor from '../../customHoocks/useSetColor'
import UseAnimCardsOnScroll from '../../customHoocks/cardsHoocks/UseAnimCardOnScroll'

export default function Cards({setcolor}) {

  const tabAnim=UseAnimCardsOnScroll();

  useSetColor(tabAnim.scrollYProgress,setcolor,0.4,"#f3f3f3",0.42,"#bfbfbf",0.49,"#5f5f5f",0.51,"#181818");

    return (
      <div  ref={tabAnim.ref}  className='h-[1200px] w-full flex flex-col items-center justify-center relative '>
        <motion.div style={{color:tabAnim.ColorTitre,opacity:tabAnim.opacityTitre}}  className='supp1600:text-[50px] supp1600:leading-[58px] sticky top-1/4 text-noir font-[Montreal-Bold] text-[35px] text-center leading-[45px] mb-[160px] transition-all duration-100 ease-linear '>
          Collections are your <br></br>key pages, but, <br></br>difficult to manage.
        </motion.div>
        <div  className="w-[80%] max-w-[1800px] h-[500px] mb-[10px] relative ">
          <CardSolo tabAnim={tabAnim} nb={0} ></CardSolo>
          <CardSolo tabAnim={tabAnim} nb={1} ></CardSolo>
          <CardSolo tabAnim={tabAnim} nb={2} ></CardSolo>
        </div>
      </div>
    )
 
}