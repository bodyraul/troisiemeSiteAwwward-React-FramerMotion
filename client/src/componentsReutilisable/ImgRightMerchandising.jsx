import React from 'react'
import { motion } from "framer-motion"

export default function ImgRightMerchandising({src,alt,opacity}) {
  return (
    <motion.img className='w-[85%] absolute left-1/2  top-1/2 rounded-[40px] transition-all duration-300 ease-linear z-[5]' style={{opacity:opacity ,transform:`translate3d(-50%,-50%,0)`,boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}}  src={src} alt={alt}/>
  )
}
