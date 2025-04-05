import React from 'react'
import { motion } from "framer-motion"

export default function ParaDefilementPersonnel({motionBol,transformUn,opacity,transformDeux,srcUn,textUn,textDeux,textTrois,paraQuatre,transformTrois,srcDeux,transformQuatre,srcTrois,transformCinq,paraCinq,paraSix}) {
  if(motionBol){
    return(
        <motion.div style={{transform:transformUn,opacity:opacity}} className='w-[1200px] h-[500px] absolute top-1/2 left-1/2 flex flex-row items-center justify-between translate-x-[-50%] translate-y-[-50%]'>
            <motion.div style={{transform:transformDeux,transition: "all 0.1s  linear"}} className='w-1/2 h-full bg-cardUn mr-5 rounded-[50px] flex flex-col items-center justify-center'>		
                <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                    <img className='w-[130px]' src={srcUn} alt="représentation de deux symboles quotation." />
                </div>
                <div  className='w-full h-1/2 flex flex-col items-center justify-start text-blanc font-[Montreal-Bold] text-[33px] leading-5'>
                    <span>{textUn}</span><br></br><span>{textDeux}</span><br></br><span>{textTrois}</span><br></br><span>{paraQuatre}</span>
                </div>
            </motion.div>
            <div className='w-1/2 h-full flex flex-col items-center justify-between'>
                <div className='w-full h-[55%] mb-5 flex flex-row items-center justify-center'>
                    <motion.div style={{transform:transformTrois,transition: "all 0.1s  linear"}} className='w-1/2 h-full bg-[rgb(240,248,255)] rounded-[40px] mr-[10px]'>
                            <img className='w-full h-full rounded-[40px]' src={srcDeux} alt="représentation d'une femme." />   
                    </motion.div>
                    <motion.div style={{transform:transformQuatre,transition: "all 0.1s  linear"}} className='w-1/2 h-full bg-blanc rounded-[40px] ml-[10px] flex flex-row items-center justify-center'>
                        <img className='w-[58%]' src={srcTrois} alt="représentation du mot stronger." />
                    </motion.div>
                </div>
                <motion.div style={{transform:transformCinq,transition: "all 0.1s  linear"}} className='w-full h-[45%] bg-cardUn rounded-[50px] flex flex-col items-center justify-center leading-[18px]'>
                    <span className='text-blanc font-[Montreal-Bold] text-[40px]'>{paraCinq}</span><br></br> <span className='text-blanc font-[Montreal-Bold] text-[19px]'>{paraSix}</span>
                </motion.div>
            </div>
        </motion.div>
    )
  }
  if(!motionBol){
    return(
        <motion.div style={{transform:transformUn,opacity:opacity}} className='w-[1200px] h-[500px] absolute top-1/2 left-1/2 flex flex-row items-center justify-between translate-x-[70%] translate-y-[-50%]'>
            <div className='w-1/2 h-full bg-cardUn mr-5 rounded-[50px] flex flex-col items-center justify-center'>		
                <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                    <img className='w-[130px]' src={srcUn}alt="représentation de deux symboles quotation." />
                </div>
                <div  className='w-full h-1/2 flex flex-col items-center justify-start text-blanc font-[Montreal-Bold] text-[33px] leading-5'>
                    <span>{textUn}</span><br></br><span> {textDeux} </span><br></br><span> {textTrois} </span><br></br><span> {paraQuatre} </span>
                </div>
            </div>
            <div className='w-1/2 h-full flex flex-col items-center justify-between'>
                <div className='w-full h-[55%] mb-5 flex flex-row items-center justify-center'>
                    <div className='w-1/2 h-full bg-[rgb(240,248,255)] rounded-[40px] mr-[10px]'>
                            <img className='w-full h-full rounded-[40px]' src={srcDeux} alt="représentation d'une femme." />   
                    </div>
                    <div className='w-1/2 h-full bg-blanc rounded-[40px] ml-[10px] flex flex-row items-center justify-center'>
                        <img className='w-[58%]' src={srcTrois} alt="représentation d'une femme." />
                    </div>
                </div>
                <div className='w-full h-[45%] bg-cardUn rounded-[50px] flex flex-col items-center justify-center leading-[18px]'>
                    <span className='text-blanc font-[Montreal-Bold] text-[40px]'> {paraCinq} </span><br></br> <span className='text-blanc font-[Montreal-Bold] text-[19px]'> {paraSix} </span>
                </div>
            </div>
        </motion.div>
    )
  }
}
