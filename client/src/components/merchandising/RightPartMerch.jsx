import React from 'react'
import { motion} from "framer-motion"
import ImgMerch from '../../componentsReutilisable/Merchandising/ImgMerch'

export default function RightPartMerch({tabAnim}) {
  return (
    <motion.div className="w-[56%] h-[calc(100%-30px)] bg-blanc rounded-[70px] relative">
            <ImgMerch tabAnim={tabAnim} nb={0}></ImgMerch>
            <ImgMerch tabAnim={tabAnim} nb={1} ></ImgMerch>
            <ImgMerch tabAnim={tabAnim} nb={2}></ImgMerch>
            <ImgMerch tabAnim={tabAnim} nb={3}></ImgMerch>
    </motion.div>
  )
}
