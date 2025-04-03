import React from 'react'
import imgStronger from '../../assets/img/stronger.png'
import imgEytis from '../../assets/img/eytis.png'
import imgUnderstatement from '../../assets/img/understatement.png'
import imgAnnie from '../../assets/img/hanny.jpeg'
import imgElysa from '../../assets/img/elysa.jpeg'
import imgCassandra from '../../assets/img/casandra.jpeg'
import imgQuotation from '../../assets/img/quotation.png'
import { useRef } from 'react'
import { motion, useScroll,useTransform, useMotionValueEvent } from "framer-motion"

export default function DefilementPersonnel({setcolor}) {
    
    const ref=useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1","1 1"],
      })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest<0.10){
        setcolor("#F3F3F3");
    }
    if(latest>=0.10 && latest<= 0.15){
        setcolor("#5F5F5F");
    }
    if(latest>0.15){
        setcolor("#181818");
    }
    })

    const transformImgUne = useTransform(scrollYProgress,[0.10,0.27],["translate3d(0,-50px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const transformImgDeux = useTransform(scrollYProgress,[0.10,0.26],["translate3d(0,-130px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const transformContainerUn = useTransform(scrollYProgress,[0.10,0.25],["translate3d(0px,230px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const transformContainerDeux = useTransform(scrollYProgress,[0.10,0.28],["translate3d(60px,230px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const defilementParaUn = useTransform(scrollYProgress,[0.30,1],["translateX(-50%) translateY(-50%)","translateX(-290%) translateY(-50%)"]);
    const defilementParaDeux = useTransform(scrollYProgress,[0.30,1],["translateX(70%) translateY(-50%)","translateX(-170%) translateY(-50%)"]);
    const defilementParaTrois = useTransform(scrollYProgress,[0.30,1],[" translateX(190%) translateY(-50%)","translateX(-50%) translateY(-50%)"]);
    const opacityParaUn = useTransform(scrollYProgress,[0.45,0.55],[1,0]);
    const opacityParaDeux = useTransform(scrollYProgress,[0.45,0.55,0.8,0.9],[0,1,1,0]);
    const opacityParaTrois = useTransform(scrollYProgress,[0.8,0.9],[0,1]);

    return(
        <div ref={ref}  className='h-[5000px] w-screen relative'>
           <div className='sticky top-0 h-screen w-full'>
               <motion.div style={{transform:defilementParaUn,opacity:opacityParaUn}} className='w-[1200px] h-[500px] absolute top-1/2 left-1/2 flex flex-row items-center justify-between translate-x-[-50%] translate-y-[-50%]'>
                   <motion.div style={{transform:transformContainerUn,transition: "all 0.1s  linear"}} className='w-1/2 h-full bg-cardUn mr-5 rounded-[50px] flex flex-col items-center justify-center'>		
                       <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                           <img className='w-[130px]' src={imgQuotation} alt="représentation de deux symboles quotation." />
                       </div>
                       <div  className='w-full h-1/2 flex flex-col items-center justify-start text-blanc font-[Montreal-Bold] text-[33px] leading-5'>
                           <span>Awork(life)saving app.</span><br></br><span>We saved 40% of our</span><br></br><span>time merchandising</span><br></br><span>every month.</span>
                       </div>
                   </motion.div>
                   <div className='w-1/2 h-full flex flex-col items-center justify-between'>
                       <div className='w-full h-[55%] mb-5 flex flex-row items-center justify-center'>
                           <motion.div style={{transform:transformImgUne,transition: "all 0.1s  linear"}} className='w-1/2 h-full bg-[rgb(240,248,255)] rounded-[40px] mr-[10px]'>
                                   <img className='w-full h-full rounded-[40px]' src={imgAnnie} alt="représentation d'une femme." />   
                           </motion.div>
                           <motion.div style={{transform:transformImgDeux,transition: "all 0.1s  linear"}} className='w-1/2 h-full bg-blanc rounded-[40px] ml-[10px] flex flex-row items-center justify-center'>
                               <img className='w-[58%]' src={imgStronger} alt="représentation du mot stronger." />
                           </motion.div>
                       </div>
                       <motion.div style={{transform:transformContainerDeux,transition: "all 0.1s  linear"}} className='w-full h-[45%] bg-cardUn rounded-[50px] flex flex-col items-center justify-center leading-[18px]'>
                           <span className='text-blanc font-[Montreal-Bold] text-[40px]'>Hanny Eldblom</span><br></br> <span className='text-blanc font-[Montreal-Bold] text-[19px]'>Head of Ecommerce</span>
                       </motion.div>
                   </div>
               </motion.div>
               <motion.div style={{transform:defilementParaDeux,opacity:opacityParaDeux}} className='w-[1200px] h-[500px] absolute top-1/2 left-1/2 flex flex-row items-center justify-between translate-x-[70%] translate-y-[-50%]'>
                   <div className='w-1/2 h-full bg-cardUn mr-5 rounded-[50px] flex flex-col items-center justify-center'>		
                       <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                           <img className='w-[130px]' src={imgQuotation}alt="représentation de deux symboles quotation." />
                       </div>
                       <div  className='w-full h-1/2 flex flex-col items-center justify-start text-blanc font-[Montreal-Bold] text-[33px] leading-5'>
                           <span>Time-effective visual</span><br></br><span>merchandising, Depict is</span><br></br><span>super user-friendly and</span><br></br><span>smart.</span>
                       </div>
                   </div>
                   <div className='w-1/2 h-full flex flex-col items-center justify-between'>
                       <div className='w-full h-[55%] mb-5 flex flex-row items-center justify-center'>
                           <div className='w-1/2 h-full bg-[rgb(240,248,255)] rounded-[40px] mr-[10px]'>
                                   <img className='w-full h-full rounded-[40px]' src={imgElysa} alt="représentation d'une femme." />   
                           </div>
                           <div className='w-1/2 h-full bg-blanc rounded-[40px] ml-[10px] flex flex-row items-center justify-center'>
                               <img className='w-[58%]' src={imgEytis} alt="représentation d'une femme." />
                           </div>
                       </div>
                       <div className='w-full h-[45%] bg-cardUn rounded-[50px] flex flex-col items-center justify-center leading-[18px]'>
                           <span className='text-blanc font-[Montreal-Bold] text-[40px]'>Karin Lijenfeldt</span><br></br> <span className='text-blanc font-[Montreal-Bold] text-[19px]'>Ecommerce Manager</span>
                       </div>
                   </div>
               </motion.div>
               <motion.div style={{transform:defilementParaTrois,opacity:opacityParaTrois}} className='w-[1200px] h-[500px] absolute top-1/2 left-1/2 flex flex-row items-center justify-between translate-x-[190%] translate-y-[-50%]'>
                   <div className='w-1/2 h-full bg-cardUn mr-5 rounded-[50px] flex flex-col items-center justify-center'>		
                       <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                           <img className='w-[130px]' src={imgQuotation} alt="représentation de deux symboles quotation." />
                       </div>
                       <div  className='w-full h-1/2 flex flex-col items-center justify-start text-blanc font-[Montreal-Bold] text-[33px] leading-5'>
                           <span>Depict has</span><br></br><span>revolutionized our</span><br></br><span>workflow with AI</span><br></br><span>capabilities to enhance</span><br></br><span>our operations.</span>
                       </div>
                   </div>
                   <div className='w-1/2 h-full flex flex-col items-center justify-between'>
                       <div className='w-full h-[55%] mb-5 flex flex-row items-center justify-center'>
                           <div  className='w-1/2 h-full bg-[rgb(240,248,255)] rounded-[40px] mr-[10px]'>
                                   <img className='w-full h-full rounded-[40px]'  src={imgCassandra}  alt="représentation d'une femme." />   
                           </div>
                           <div className='w-1/2 h-full bg-blanc rounded-[40px] ml-[10px] flex flex-row items-center justify-center'>
                               <img className='w-[58%]' src={imgUnderstatement} alt="représentation du mot understatement." />
                           </div>
                       </div>
                       <div className='w-full h-[45%] bg-cardUn rounded-[50px] flex flex-col items-center justify-center leading-[18px]'>
                           <span className='text-blanc font-[Montreal-Bold] text-[40px]'>Cassandra Backman</span><br></br> <span className='text-blanc font-[Montreal-Bold] text-[19px]'>Ecommerce Manager</span>
                       </div>
                   </div>
               </motion.div>
           </div>
       </div>
       )
}