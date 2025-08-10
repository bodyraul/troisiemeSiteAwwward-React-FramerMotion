import React from 'react'
import { motion } from "framer-motion"
import tabText from '../../tools/DefilementPerso/TabText'
import tabImg from '../../tools/DefilementPerso/TabImg'
import ContenuDefilementPerso from '../../componentsReutilisable/defilementPerso/ContenuDefilementPerso'
import NameStatusDefielementPerso from '../../componentsReutilisable/defilementPerso/NameStatusDefielementPerso'

export default function ParaLineaire({tabAnim,nombre}) {
  return (
    <motion.div style={{transform:tabAnim.defilementPara[nombre],opacity:tabAnim.opacityPara[nombre]}} className='w-[1200px] h-[500px] absolute top-1/2 left-1/2 flex flex-row items-center justify-between translate-x-[70%] translate-y-[-50%]'>
        <div className='w-1/2 h-full bg-cardUn mr-5 rounded-[50px] flex flex-col items-center justify-center'>		
            <ContenuDefilementPerso tabImg={tabImg} tabText={tabText}nombre={nombre} />
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
                <NameStatusDefielementPerso tabText={tabText} nombre={nombre}/>
            </div>
        </div>
    </motion.div>
  )
}
