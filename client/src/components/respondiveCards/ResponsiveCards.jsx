import React from 'react'
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
    
    const rotationCardUneResponsive= useTransform(scrollYProgress,[0.4,0.5],[`translate3d(0px,0px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const rotationCardDeuxResponsive= useTransform(scrollYProgress,[0.5,0.6],[`translate3d(0px,0px,0px) rotateZ(-10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const rotationCardTroisResponsive= useTransform(scrollYProgress,[0.75,0.85],[`translate3d(0px,0px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
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
  <div ref={englobeCardTitreResponsive} className='h-[1800px] w-full mt-[200px] flex flex-col items-center justify-center relative'>
    <motion.div style={{color:ColorTitre,opacity:opacityTitre}}  className=' supp750:text-[50px] top-1/4 text-noir font-[Montreal-Bold] text-[25px] text-center leading-[50px] transition-all duration-100 ease-linear h-[350px] mb-0'>Collections are your most <br></br>important pages, but are <br></br>frustrating to manage</motion.div>
    <div  className="w-[1320px] mb-[10px] h-[1450px] relative flex flex-col items-center justify-between">
       <motion.div  style={ {transform:rotationCardUneResponsive}} className="bg-cardUn left-auto transition-transform duration-500 ease-linear supp405:w-[80vw] relative h-[450px] m-[10px] rounded-[50px] text-center w-[300px] flex flex-col items-center justify-center">
          <img className='w-20 h-20' src={imgDoight} alt="Représentation d'une main orange avec l'index levé." />
          <p className='supp625:text-[60px] supp625:leading-[60px] text-[50px] leading-[50px] font-[Montreal-Bold] my-[23px] mx-0  text-blanc'>Non-Visual<br></br>Curation</p>
          <p style={{opacity:"0.3"}} className='supp625:text-[21px] text-blanc text-[15px] font-[Montreal-Bold] py-0 px-[10px]'>Manually curating your collections<br></br>feels like doing your taxes.</p>
       </motion.div>
       <motion.div  style={ {transform:rotationCardDeuxResponsive}} className="bg-cardDeux left-auto transition-transform duration-500 ease-linear supp405:w-[80vw] relative h-[450px] m-[10px] rounded-[50px] text-center w-[300px] flex flex-col items-center justify-center">
          <img  className='w-20 h-20' src={imgFleche} alt="Représentation d'une flêche orange pointant vers le haut et d'une flêche orange pointant vers le bas." />
          <p  className='supp625:text-[60px] supp625:leading-[60px] text-[50px] leading-[50px] font-[Montreal-Bold] my-[23px] mx-0  text-blanc'>Limited<br></br>Sorting</p>
          <p style={{opacity:"0.6"}} className='supp625:text-[21px] text-blanc text-[15px] font-[Montreal-Bold] py-0 px-[10px]'>It's too basic to sort your collections <br></br>by "New in" or "Best Sellers".</p>
       </motion.div>
       <motion.div  style={ {transform:rotationCardTroisResponsive}} className="bg-cardTrois left-auto transition-transform duration-500 ease-linear supp405:w-[80vw] relative h-[450px] m-[10px] rounded-[50px] text-center w-[300px] flex flex-col items-center justify-center">
          <img className='w-20 h-20' src={carrer} alt="Représentation de deux container qui se superposent." />
          <p className='supp625:text-[60px] supp625:leading-[60px] text-[50px] leading-[50px] font-[Montreal-Bold] my-[23px] mx-0  text-blanc'>Messy<br></br>Data</p>
          <p style={{opacity:"0.7"}} className='supp625:text-[21px] text-blanc text-[15px] font-[Montreal-Bold] py-0 px-[10px]'>You need 5 tabs open to take data-<br></br>driven decisions from excell sheets.</p>
       </motion.div>
    </div>
  </div>
  )
}
