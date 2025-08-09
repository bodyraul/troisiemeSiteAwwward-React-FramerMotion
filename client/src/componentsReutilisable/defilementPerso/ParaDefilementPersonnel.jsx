import React from 'react'
import { motion } from "framer-motion"
import tabText from '../../tools/DefilementPerso/TabText'
import tabImg from '../../tools/DefilementPerso/TabImg'

export default function ParaDefilementPersonnel({tabAnim,nombre}) {
  if(nombre===0){
    return(
        <motion.div style={{transform:tabAnim.defilementPara[nombre],opacity:tabAnim.opacityPara[nombre]}} className='w-[1200px] h-[500px] absolute top-1/2 left-1/2 flex flex-row items-center justify-between translate-x-[-50%] translate-y-[-50%]'>
            <motion.div style={{transform:tabAnim.transformContainer[0],transition: "all 0.1s  linear"}} className='w-1/2 h-full bg-cardUn mr-5 rounded-[50px] flex flex-col items-center justify-center'>		
                <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                    <img className='supp1600:w-[120px] w-[100px]' src={tabImg.srcUn[nombre]} alt="représentation de deux symboles quotation." />
                </div>
                <div  className='supp1600:text-[30px] supp1600:leading-[23px] text-[24px] leading-[20px] w-full h-1/2 flex flex-col items-center justify-start text-blanc font-[Montreal-Bold] '>
                    <span>{tabText.TexteUn[nombre]}</span><br></br>
                    <span>{tabText.TexteDeux[nombre]}</span><br></br>
                    <span>{tabText.TexteTrois[nombre]}</span><br></br>
                    <span>{tabText.TexteQuatre[nombre]}</span>
                </div>
            </motion.div>
            <div className='w-1/2 h-full flex flex-col items-center justify-between'>
                <div className='w-full h-[55%] mb-5 flex flex-row items-center justify-center'>
                    <motion.div style={{transform:tabAnim.transformImg[0],transition: "all 0.1s  linear"}} className='w-1/2 h-full bg-[rgb(240,248,255)] rounded-[40px] mr-[10px]'>
                            <img className='w-full h-full rounded-[40px]' src={tabImg.srcDeux[nombre]} alt="femme créé par intelligence artificielle" />   
                    </motion.div>
                    <motion.div style={{transform:tabAnim.transformImg[1],transition: "all 0.1s  linear"}} className='w-1/2 h-full bg-blanc rounded-[40px] ml-[10px] flex flex-row items-center justify-center'>
                            <img className='w-[58%]' src={tabImg.srcTrois[nombre]} alt="représentation du mot stronger." />
                    </motion.div>
                </div>
                <motion.div style={{transform:tabAnim.transformContainer[1],transition: "all 0.1s  linear"}} className='w-full h-[45%] bg-cardUn rounded-[50px] flex flex-col items-center justify-center leading-[18px]'>
                    <span className='supp1600:text-[48px] supp1600:leading-[30px] text-[40px] leading-[25px] text-blanc font-[Montreal-Bold] '>{tabText.texteCinq[nombre]}</span><br></br> 
                    <span className='supp1600:text-[30px] text-[24px] text-blanc font-[Montreal-Bold] '>{tabText.texteSix[nombre]}</span>
                </motion.div>
            </div>
        </motion.div>
    )
  }
  if(nombre!==0){
    return(
        <motion.div style={{transform:tabAnim.defilementPara[nombre],opacity:tabAnim.opacityPara[nombre]}} className='w-[1200px] h-[500px] absolute top-1/2 left-1/2 flex flex-row items-center justify-between translate-x-[70%] translate-y-[-50%]'>
            <div className='w-1/2 h-full bg-cardUn mr-5 rounded-[50px] flex flex-col items-center justify-center'>		
                <div className='w-full h-1/2 flex flex-col items-center justify-center'>
                    <img className='supp1600:w-[120px] w-[100px]' src={tabImg.srcUn[nombre]}alt="représentation de deux symboles quotation." />
                </div>
                <div  className='text-[24px] leading-[20px] supp1600:text-[30px] supp1600:leading-[23px] w-full h-1/2 flex flex-col items-center justify-start text-blanc font-[Montreal-Bold] '>
                    <span>{tabText.TexteUn[nombre]}</span><br></br>
                    <span>{tabText.TexteDeux[nombre]}</span><br></br>
                    <span>{tabText.TexteTrois[nombre]}</span><br></br>
                    <span>{tabText.TexteQuatre[nombre]}</span>
                </div>
            </div>
            <div className='w-1/2 h-full flex flex-col items-center justify-between'>
                <div className='w-full h-[55%] mb-5 flex flex-row items-center justify-center'>
                    <div className='w-1/2 h-full bg-[rgb(240,248,255)] rounded-[40px] mr-[10px]'>
                            <img className='w-full h-full rounded-[40px]' src={tabImg.srcDeux[nombre]} alt="femme créé par intelligence artificielle" />   
                    </div>
                    <div className='w-1/2 h-full bg-blanc rounded-[40px] ml-[10px] flex flex-row items-center justify-center'>
                        <img className='w-[58%]' src={tabImg.srcTrois[nombre]} alt="femme créé par intelligence artificielle" />
                    </div>
                </div>
                <div className='w-full h-[45%] bg-cardUn rounded-[50px] flex flex-col items-center justify-center leading-[18px]'>
                    <span className='supp1600:text-[48px] supp1600:leading-[30px] text-[40px] leading-[25px] text-blanc font-[Montreal-Bold] '>{tabText.texteCinq[nombre]}</span><br></br> 
                    <span className='supp1600:text-[30px] text-[24px] text-blanc font-[Montreal-Bold] '>{tabText.texteSix[nombre]}</span>
                </div>
            </div>
        </motion.div>
    )
  }
}
