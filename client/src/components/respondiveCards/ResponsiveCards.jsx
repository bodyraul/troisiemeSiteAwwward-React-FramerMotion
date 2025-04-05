import React from 'react'
import imgDoight from '../../assets/img/doight.svg'
import imgFleche from '../../assets/img/triangleHautBas.svg'
import carrer from '../../assets/img/groupe.svg'
import { useRef } from 'react'
import { motion, useScroll,useTransform } from "framer-motion"
import ResponsiveCardSolo from '../../componentsReutilisable/ResponsiveCardSolo'
import useSetColor from '../../customHoocks/useSetColor'

export default function ResponsiveCards({setcolor}) {

    const englobeCardTitreResponsive =useRef();
    
    const {scrollYProgress} = useScroll({
        target:englobeCardTitreResponsive,
        offset:["0 1","1 1"],
    
      })
    
    const rotationCardUneResponsive= useTransform(scrollYProgress,[0.4,0.5],[`translate3d(0px,0px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const rotationCardDeuxResponsive= useTransform(scrollYProgress,[0.5,0.6],[`translate3d(0px,0px,0px) rotateZ(-10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const rotationCardTroisResponsive= useTransform(scrollYProgress,[0.75,0.85],[`translate3d(0px,0px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const ColorTitre= useTransform(scrollYProgress,[0,0.40,0.41666,0.50,0.58],[`#181818`,`#181818`,`#4F4F4F`,`#B2B2B2`,`#FBFBFB`]);
    const opacityTitre= useTransform(scrollYProgress,[0,0.6,0.8,0.85,0.9],[1,1,0.7,0.4,0]);

  useSetColor(scrollYProgress,setcolor,0.4,"#f3f3f3",0.42,"#bfbfbf",0.49,"#5f5f5f",0.51,"#181818");

  return (
  <div ref={englobeCardTitreResponsive} className='h-[1800px] w-full mt-[200px] flex flex-col items-center justify-center relative'>
    <motion.div style={{color:ColorTitre,opacity:opacityTitre}}  className=' supp750:text-[50px] top-1/4 text-noir font-[Montreal-Bold] text-[25px] text-center leading-[50px] transition-all duration-100 ease-linear h-[350px] mb-0'>Collections are your most <br></br>important pages, but are <br></br>frustrating to manage</motion.div>
    <div  className="w-[1320px] mb-[10px] h-[1450px] relative flex flex-col items-center justify-between">
      <ResponsiveCardSolo transform={rotationCardUneResponsive} background={"#212121"} opacity={"0.3"} src={imgDoight} alt={"Représentation d'une main orange avec l'index levé."} textUn={"Non-Visual"} textDeux={"Curation"} textTrois={"Manually curationg your collections"} textQuatre ={"feels like doing your taxes."}></ResponsiveCardSolo>
      <ResponsiveCardSolo transform={rotationCardDeuxResponsive} background={"#2b2b2b"} opacity={"0.6"} src={imgFleche} alt={"Représentation d'une flêche orange pointant vers le haut et d'une flêche orange pointant vers le bas."} textUn={"Limited"} textDeux={"Sorting"} textTrois={"It's too basic to sort your collections"} textQuatre ={`by "New in" or "Best Sellers".`}></ResponsiveCardSolo>
      <ResponsiveCardSolo transform={rotationCardTroisResponsive} background={"#363636"} opacity={"0.7"} src={carrer} alt={"Représentation de deux container qui se superposent." } textUn={"Messy"} textDeux={"Data"} textTrois={"You need 5 tabs open to take data-"} textQuatre ={`driven decisions from excell sheets.`}></ResponsiveCardSolo>
    </div>
  </div>
  )
}
