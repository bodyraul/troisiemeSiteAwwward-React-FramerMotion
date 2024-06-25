import React from 'react'
import '../respondiveCards/responsiveCards.css'
import imgDoight from '../../assets/img/doight.svg'
import imgFleche from '../../assets/img/triangleHautBas.svg'
import carrer from '../../assets/img/groupe.svg'
import { useRef } from 'react'
import { motion, useScroll,useTransform, useMotionValueEvent } from "framer-motion"

export default function ResponsiveCards({setcolor}) {

    const englobeCardTitreResponsive =useRef();
    
    const {scrollYProgress} = useScroll({
        target:englobeCardTitreResponsive,
        offset:["0 1","1 1"],
    
      })

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


    const rotationCardUneResponsive= useTransform(scrollYProgress,[0.4,0.5],[`translate3d(0px,0px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const rotationCardDeuxResponsive= useTransform(scrollYProgress,[0.5,0.6],[`translate3d(0px,0px,0px) rotateZ(-10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const rotationCardTroisResponsive= useTransform(scrollYProgress,[0.75,0.85],[`translate3d(0px,0px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const ColorTitre= useTransform(scrollYProgress,[0,0.40,0.41666,0.50,0.58],[`#181818`,`#181818`,`#4F4F4F`,`#B2B2B2`,`#FBFBFB`]);
    const opacityTitre= useTransform(scrollYProgress,[0,0.6,0.8,0.85,0.9],[1,1,0.7,0.4,0]);

  return (
    <div ref={englobeCardTitreResponsive} className='englobeCardTitreResponsive'>
    <motion.div style={{color:ColorTitre,opacity:opacityTitre}}  className='titreResponsive'>Collections are your most <br></br>important pages, but are <br></br>frustrating to manage</motion.div>
    <div  className="allcardsResponsive">
       <motion.div  style={ {transform:rotationCardUneResponsive}}   id='card1Responsive' className="uniteCardResponsive">
          <img className='imgCardResponsive' src={imgDoight} alt="Représentation d'une main orange avec l'index levé." />
          <p className='p1CardResponsive'>Non-Visual<br></br>Curation</p>
          <p style={{opacity:"0.3"}} className='p2CardResponsive'>Manually curating your collections<br></br>feels like doing your taxes.</p>
       </motion.div>
       <motion.div  style={ {transform:rotationCardDeuxResponsive}}    id='card2Responsive'  className="uniteCardResponsive">
          <img  className='imgCardResponsive' src={imgFleche} alt="Représentation d'une flêche orange pointant vers le haut et d'une flêche orange pointant vers le bas." />
          <p  className='p1CardResponsive'>Limited<br></br>Sorting</p>
          <p style={{opacity:"0.6"}} className='p2CardResponsive'>It's too basic to sort your collections <br></br>by "New in" or "Best Sellers".</p>
       </motion.div>
       <motion.div  style={ {transform:rotationCardTroisResponsive}}   id='card3Responsive'  className="uniteCardResponsive">
          <img className='imgCardResponsive' src={carrer} alt="Représentation de deux container qui se superposent." />
          <p className='p1CardResponsive'>Messy<br></br>Data</p>
          <p style={{opacity:"0.7"}} className='p2CardResponsive'>You need 5 tabs open to take data-<br></br>driven decisions from excell sheets.</p>
       </motion.div>
    </div>
  </div>
  )
}
