import React from 'react'
import pointImg  from '../../assets/img/points.png'
import triangleImg from '../../assets/img/triangles.png'
import statImg from '../../assets/img/statsImg.png'
import { motion} from "framer-motion"
import soloWomen from '../../assets/img/soloWomen.jpg'
import allMannequin from"../../assets/img/allMannequin.jpg"
import summerCollection from"../../assets/img/summerCollection.jpg"
import statVente from"../../assets/img/statVente.jpg"
import ImgRightMerchandising from '../../componentsReutilisable/MerchandisingComponentsReutilisable/ImgRightMerchandising'
import ParaLeftMerchandising from '../../componentsReutilisable/MerchandisingComponentsReutilisable/ParaLeftMerchandising'
import useSetColor from '../../customHoocks/useSetColor'
import tabMerchandising from '../../tools/merchandisingTools/TabMerchandising'
import UseAnimMerchandisingOnScroll from '../../customHoocks/merchandisingHoocks/UseAnimMerchandisingOnScroll'

export default function Merchandising({setcolor}) {
  
  const {target,scrollYProgress,opacityParaBase,scaleParaBase,bottomParaUn,opacityParaUn,scaleParaUn,bottomParaDeux,opacityParaDeux,
  scaleParaDeux,bottomParaTrois,opacityParaTrois,opacityImgUne,opacityImgDeux,opacityImgTrois,opacityImgQuatre}=UseAnimMerchandisingOnScroll();

  useSetColor(scrollYProgress,setcolor,0.17,"#181818",0.19,"#5F5F5F",0.2,"#bfbfbf",0.21,"#f3f3f3");

  const {tabAlt,tabTitre,tabParaUn,tabParaDeux}=tabMerchandising;

  return (
    <div ref={target}  className='h-[300vh] w-full flex flex-col items-center justify-start '>
      <div className='sticky top-0 h-screen w-[80%] max-w-[1800px]'>
          <div className="h-[145px] w-full">

          </div>
          <div  className="h-[calc(100%-145px)] flex flex-row items-start justify-between">
            <div  className='relative flex flex-col items-center justify-between rounded-[70px] w-[42%] min-w-[500px] bg-cardUn h-[calc(100%-30px)] overflow-hidden'>
                <motion.p style={{opacity:opacityParaBase,transform:scaleParaBase}} className="supp1600:text-[55px] supp1600:leading-[62px] text-blanc text-[45px] leading-[55px] font-[Montreal-Bold] text-start w-full pt-[50px] pr-0 pb-0 pl-[50px] transition-all duration-300 ease-linear">The dedicated <br></br>Fashion<br></br>Application</motion.p>
                <motion.p style={{opacity:opacityParaBase,transform:scaleParaBase}}  className="text-grisClair leading-[28px] font-[Montreal-Bold] text-xl text-start w-full pt-[10px] pr-0 pb-0 pl-[50px] transition-all duration-300 ease-linear">TechNova lets you manage your<br></br> collection pages like a professional.</motion.p>
                <ParaLeftMerchandising bottom={bottomParaUn} src={pointImg} alt={tabAlt[0]} opacity={opacityParaUn} transform={scaleParaUn} titre={tabTitre[0]} paraUn={tabParaUn[0]} paraDeux={tabParaDeux[0]}></ParaLeftMerchandising>
                <ParaLeftMerchandising bottom={bottomParaDeux} src={triangleImg} alt={tabAlt[1]} opacity={opacityParaDeux} transform={scaleParaDeux} titre={tabTitre[1]} paraUn={tabParaUn[1]} paraDeux={tabParaDeux[1]}></ParaLeftMerchandising>
                <ParaLeftMerchandising bottom={bottomParaTrois} src={statImg} alt={tabAlt[2]} opacity={opacityParaTrois} transform={""} titre={tabTitre[2]} paraUn={tabParaUn[2]} paraDeux={tabParaDeux[2]}></ParaLeftMerchandising>
            </div>
            <motion.div className="w-[56%] h-[calc(100%-30px)] bg-blanc rounded-[70px] relative">
                  <ImgRightMerchandising src={soloWomen} alt={"Représentation d'un homme."} opacity={opacityImgUne}></ImgRightMerchandising>
                  <ImgRightMerchandising src={allMannequin} alt={"Représentation de huight personnes."} opacity={opacityImgDeux}></ImgRightMerchandising>
                  <ImgRightMerchandising src={summerCollection} alt={"Représentation de huight personnes." } opacity={opacityImgTrois}></ImgRightMerchandising>
                  <ImgRightMerchandising src={statVente} alt={"Représentation de plusieurs statistiques."} opacity={opacityImgQuatre}></ImgRightMerchandising>
            </motion.div>
          </div>
      </div>
      <div  className='absolute h-[200vh] w-5 top-[100vh]'>

      </div>
  </div>
  )
  
}
