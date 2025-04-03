import React from 'react'
import imgDoight from '../../assets/img/doight.svg'
import imgFleche from '../../assets/img/triangleHautBas.svg'
import carrer from '../../assets/img/groupe.svg'
import { useRef } from 'react'
import { motion, useScroll,useTransform, useMotionValueEvent } from "framer-motion"
import CardSolo from '../../componentsReutilisable/CardSolo'


export default function Cards({setcolor}) {

  const englobeCardTitre =useRef();
  const {scrollYProgress} = useScroll({
    target:englobeCardTitre,
    offset:["0 1","1 1"],

  })

  const rotationCardUne = useTransform(scrollYProgress,[0.6,0.95],[`translate3d(110px,115px,0px) rotateZ(-10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
  const rotationCardDeux = useTransform(scrollYProgress,[0.6,0.95],[`translate3d(0px,55px,0px)`,`translate3d(0px,0px,0px)`]);
  const rotationCardTrois = useTransform(scrollYProgress,[0.6,0.95],[`translate3d(-110px,115px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
  const ColorTitre= useTransform(scrollYProgress,[0,0.40,0.41666,0.50,0.58],[`#181818`,`#181818`,`#4F4F4F`,`#B2B2B2`,`#FBFBFB`]);
  const opacityTitre= useTransform(scrollYProgress,[0,0.6,0.8,0.85,0.9],[1,1,0.7,0.4,0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest<0.4){
      setcolor("#F3F3F3");
    }
    if(latest>=0.4 && latest<= 0.42){
      setcolor("#BFBFBF");
    }
    if(latest>=0.49 && latest<= 0.51){
      setcolor("#5F5F5F");
    }
    if(latest>0.51){
      setcolor("#181818");
    }
  })


    return (
      <div  ref={englobeCardTitre}  className='h-[1200px] w-full flex flex-col items-center justify-center relative'>
        <motion.div style={{color:ColorTitre,opacity:opacityTitre}}  className='sticky top-1/4 text-noir font-[Montreal-Bold] text-[50px] text-center leading-[50px] mb-[100px] transition-all duration-100 ease-linear'>Collections are your most <br></br>important pages, but are <br></br>frustrating to manage</motion.div>
        <div  className="w-[1320px] h-[500px] mb-[10px] relative">
          <CardSolo rotation={rotationCardUne} opacity={"0.3"} color={"#212121"}  source={imgDoight} left={"0px"} descriptionImg={"Representation d'une main orange avec l'index levé."} textUn={`Non-Visual`} textDeux={"Curation"} textTrois={"Manually curating your collections"} textQuatre={"feels like doing your taxes."}></CardSolo>
          <CardSolo rotation={rotationCardDeux} opacity={"0.6"} color={"#2b2b2b"}  source={imgFleche} left={"33.3%"} descriptionImg={"Representation d'une flêche orange pointant vers le haut et d'une flêche orange pointant vers le bas."}  textUn={`Limited `} textDeux={"Sorting"} textTrois={"Its too basic to sort your collections"} textQuatre={"by New in or Best Sellers."}></CardSolo>
          <CardSolo rotation={rotationCardTrois} opacity={"0.7"} color={"#363636"}  source={carrer} left={"66%"} descriptionImg={"Representation de deux containers oranges suppersposés."} textUn={`Messy `} textDeux={"Data"} textTrois={"You need 5 tabs open to take data-"} textQuatre={"driven decisions from excell sheets."}></CardSolo>
        </div>
      </div>
    )
 
}