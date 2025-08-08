import React from 'react'
import imgDoight from '../../assets/img/doights.svg'
import imgFleche from '../../assets/img/triangles.png'
import carrer from '../../assets/img/carrer.png'
import { motion } from "framer-motion"
import ResponsiveCardSolo from '../../componentsReutilisable/ResponsiveCardSolo'
import useSetColor from '../../customHoocks/useSetColor'
import UseResponsiveCardOnScroll from '../../customHoocks/responsiveCardHoocks/UseResponsiveCardOnScroll'
import tabCard from './../../tools/cardsTools/TabCard';

export default function ResponsiveCards({setcolor}) {

  const {englobeCardTitreResponsive,scrollYProgress,rotationCardUneResponsive,rotationCardDeuxResponsive,
  rotationCardTroisResponsive,ColorTitre,opacityTitre}=UseResponsiveCardOnScroll();

  useSetColor(scrollYProgress,setcolor,0.4,"#f3f3f3",0.42,"#bfbfbf",0.49,"#5f5f5f",0.51,"#181818");

   const {descriptionImg,textUn,textDeux,textTrois,textQuatre}=tabCard;

  return (
  <div ref={englobeCardTitreResponsive} className='supp480:h-[1750px] supp768:h-[2000px] supp1024:h-[2400px]  h-[1450px] w-full  flex flex-col items-center justify-center relative '>
    <motion.div style={{color:ColorTitre,opacity:opacityTitre}}  className=' supp480:text-[20px] supp480:leading-[28px] supp480:mt-[90px] supp768:text-[27px] supp768:leading-[33px] supp768:mt-[130px] supp1024:text-[35px] supp1024:leading-[45px] text-noir font-[Montreal-Bold] text-[16px] text-center leading-[25px] transition-all duration-100 ease-linear  mb-[90px] '>
      Collections are your most <br></br>important pages, but are <br></br>frustrating to manage
    </motion.div>
    <div  className="supp480:h-[1500px] supp768:h-[1700px] supp1024:h-[2000px] w-[1320px] mb-[10px] h-[1100px] relative flex flex-col items-center justify-between">
      <ResponsiveCardSolo transform={rotationCardUneResponsive} background={"#212121"} opacity={"0.3"} src={imgDoight} alt={descriptionImg[0]} textUn={textUn[0]} textDeux={textDeux[0]} textTrois={textTrois[0]} textQuatre={textQuatre[0]}></ResponsiveCardSolo>
      <ResponsiveCardSolo transform={rotationCardDeuxResponsive} background={"#2b2b2b"} opacity={"0.6"} src={imgFleche} alt={descriptionImg[1]} textUn={textUn[1]} textDeux={textDeux[1]} textTrois={textTrois[1]} textQuatre={textQuatre[1]}></ResponsiveCardSolo>
      <ResponsiveCardSolo transform={rotationCardTroisResponsive} background={"#363636"} opacity={"0.7"} src={carrer} alt={descriptionImg[2]} textUn={textUn[2]} textDeux={textDeux[2]} textTrois={textTrois[2]} textQuatre={textQuatre[2]}></ResponsiveCardSolo>
    </div>
  </div>
  )
}
