import React from 'react'
import imgDoight from '../../assets/img/doights.svg'
import imgFleche from '../../assets/img/triangles.png'
import carrer from '../../assets/img/carrer.png'
import { motion } from "framer-motion"
import CardSolo from '../../componentsReutilisable/CardSolo'
import useSetColor from '../../customHoocks/useSetColor'
import UseAnimCardsOnScroll from '../../customHoocks/cardsHoocks/UseAnimCardOnScroll'
import tabCard from '../../tools/cardsTools/TabCard'

export default function Cards({setcolor}) {

  const {englobeCardTitre,scrollYProgress,rotationCardUne,rotationCardDeux,rotationCardTrois,ColorTitre,opacityTitre} = UseAnimCardsOnScroll();

  useSetColor(scrollYProgress,setcolor,0.4,"#f3f3f3",0.42,"#bfbfbf",0.49,"#5f5f5f",0.51,"#181818");

  const {descriptionImg,textUn,textDeux,textTrois,textQuatre}=tabCard;

    return (
      <div  ref={englobeCardTitre}  className='h-[1200px] w-full flex flex-col items-center justify-center relative '>
        <motion.div style={{color:ColorTitre,opacity:opacityTitre}}  className='supp1600:text-[50px] supp1600:leading-[58px] sticky top-1/4 text-noir font-[Montreal-Bold] text-[35px] text-center leading-[45px] mb-[100px] transition-all duration-100 ease-linear '>
          Collections are your <br></br>key pages, but, <br></br>difficult to manage.
        </motion.div>
        <div  className="supp1600:w-[1320px] w-[1200px] h-[500px] mb-[10px] relative">
          <CardSolo rotation={rotationCardUne} opacity={"0.3"} color={"#212121"}  source={imgDoight} left={"0px"} descriptionImg={descriptionImg[0]} textUn={textUn[0]} textDeux={textDeux[0]} textTrois={textTrois[0]} textQuatre={textQuatre[0]}></CardSolo>
          <CardSolo rotation={rotationCardDeux} opacity={"0.6"} color={"#2b2b2b"}  source={imgFleche} left={"33%"} descriptionImg={descriptionImg[1]} textUn={textUn[1]} textDeux={textDeux[1]} textTrois={textTrois[1]} textQuatre={textQuatre[1]}></CardSolo>
          <CardSolo rotation={rotationCardTrois} opacity={"0.7"} color={"#363636"}  source={carrer} left={"66%"} descriptionImg={descriptionImg[2]} textUn={textUn[2]} textDeux={textDeux[2]} textTrois={textTrois[2]} textQuatre={textQuatre[2]}></CardSolo>
        </div>
      </div>
    )
 
}