import React, { useEffect } from 'react'
import './cards.css'
import imgDoight from '../../assets/img/doight.svg'
import imgFleche from '../../assets/img/triangleHautBas.svg'
import carrer from '../../assets/img/groupe.svg'
import { useRef } from 'react'
import { motion, useScroll,useTransform, useMotionValueEvent } from "framer-motion"
import { useState } from 'react'

export default function Cards({setcolor}) {

  const englobeCardTitre =useRef();
  const cardDeux = useRef();
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1350px)").matches
  )

  const {scrollYProgress} = useScroll({
    target:englobeCardTitre,
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

  useEffect(() => {
    function eventResponsive(e){
      setMatches( e.matches );
    }

    window.matchMedia("(max-width: 1350px)").addEventListener('change', eventResponsive);
  
    return () => {
      window.matchMedia("(max-width: 1350px)").removeEventListener('change', eventResponsive);
    }
  }, [])
  


 


  const rotationCardUne = useTransform(scrollYProgress,[0.6,0.95],[`translate3d(110px,115px,0px) rotateZ(-10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
  const rotationCardDeux = useTransform(scrollYProgress,[0.6,0.95],[`translate3d(0px,55px,0px)`,`translate3d(0px,0px,0px)`]);
  const rotationCardTrois = useTransform(scrollYProgress,[0.6,0.95],[`translate3d(-110px,115px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
  const ColorTitre= useTransform(scrollYProgress,[0,0.40,0.41666,0.50,0.58],[`#181818`,`#181818`,`#4F4F4F`,`#B2B2B2`,`#FBFBFB`]);
  const opacityTitre= useTransform(scrollYProgress,[0,0.6,0.8,0.85,0.9],[1,1,0.7,0.4,0]);


  return (
    <div  ref={englobeCardTitre}  className='englobeCardTitre'>
      <motion.div style={{color:ColorTitre,opacity:opacityTitre}}  className='titre'>Collections are your most <br></br>important pages, but are <br></br>frustrating to manage</motion.div>
      <div  className="allcards">
         <motion.div  style={ {transform:rotationCardUne}} id='card1' className="uniteCard">
            <img className='imgCard' src={imgDoight} alt="" />
            <p className='p1Card'>Non-Visual<br></br>Curation</p>
            <p style={{opacity:"0.3"}} className='p2Card'>Manually curating your collections<br></br>feels like doing your taxes.</p>
         </motion.div>
         <motion.div style={ {transform:rotationCardDeux}}  ref={cardDeux} id='card2'  className="uniteCard">
            <img  className='imgCard' src={imgFleche} alt="" />
            <p  className='p1Card'>Limited<br></br>Sorting</p>
            <p style={{opacity:"0.6"}} className='p2Card'>It's too basic to sort your collections <br></br>by "New in" or "Best Sellers".</p>
         </motion.div>
         <motion.div  style={{transform:rotationCardTrois}} id='card3'  className="uniteCard">
            <img className='imgCard' src={carrer} alt="" />
            <p className='p1Card'>Messy<br></br>Data</p>
            <p style={{opacity:"0.7"}} className='p2Card'>You need 5 tabs open to take data-<br></br>driven decisions from excell sheets.</p>
         </motion.div>
      </div>
    </div>
  )
}