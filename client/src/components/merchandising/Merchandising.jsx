import React from 'react'
import { useRef } from 'react'
import pointImg from '../../assets/img/carrerOrange.svg'
import triangleImg from '../../assets/img/triangleHautBas.svg'
import statImg from '../../assets/img/troisBarres.svg'
import { motion,useTransform,useScroll } from "framer-motion"
import imgUne from '../../assets/img/mainImage.png'
import imgdeux from '../../assets/img/homepage.jpeg'
import imgTrois from '../../assets/img/homepage2.jpeg'
import imgQuatre from '../../assets/img/stats.png'
import ImgRightMerchandising from '../../componentsReutilisable/ImgRightMerchandising'
import ParaLeftMerchandising from '../../componentsReutilisable/ParaLeftMerchandising'
import useSetColor from '../../customHoocks/useSetColor'

export default function Merchandising({setcolor}) {

  const target = useRef();

  const {scrollYProgress} = useScroll({
    target:target,
    offset:["0 1","1 1"],
  })

  const opacityParaBase = useTransform(scrollYProgress,[0.37,0.50],[1,0]);
  const scaleParaBase = useTransform(scrollYProgress,[0.37,0.50],["scale(1)","scale(0.75)"]);
  const bottomParaUn = useTransform(scrollYProgress,[0.33,0.56],["calc(0% - 10px)","calc(100% - 290px)"]);
  const opacityParaUn = useTransform(scrollYProgress,[0.68,0.73],[1,0]);
  const scaleParaUn = useTransform(scrollYProgress,[0.68,0.73],["scale(1)","scale(0.5)"]);
  const bottomParaDeux = useTransform(scrollYProgress,[0.56,0.77],["calc(0% - 78px)","calc(100% - 358px)"]);
  const opacityParaDeux = useTransform(scrollYProgress,[0.91,0.95],[1,0]);
  const scaleParaDeux = useTransform(scrollYProgress,[0.91,0.95],["scale(1)","scale(0.5)"]);
  const bottomParaTrois = useTransform(scrollYProgress,[0.77,1],["calc(0% - 146px)","calc(100% - 426px)"]);
  const opacityParaTrois = useTransform(scrollYProgress,[0.77,1],[0,1]);
  const opacityImgUne = useTransform(scrollYProgress,[0.40,0.45],[1,0]);
  const opacityImgDeux = useTransform(scrollYProgress,[0.47,0.52,0.65,0.70],[0,1,1,0]);
  const opacityImgTrois = useTransform(scrollYProgress,[0.72,0.77,0.87,0.92],[0,1,1,0]);
  const opacityImgQuatre = useTransform(scrollYProgress,[0.93,1],[0,1]);

  useSetColor(scrollYProgress,setcolor,0.17,"#181818",0.19,"#5F5F5F",0.2,"#bfbfbf",0.21,"#f3f3f3");


  const tabAlt=["Représentation de six points oranges.","Représentation d'un triangle orange pointant vers le bas et d'un triangle orange pointant vers le haut.","Représentation de trois barres verticales oranges."]
  const tabTitre=["Editorial Merchandising","Strategic Merchandising","Analytics"]
  const tabParaUn=["Manual curation at its finest","Set boosting rules based on tags and dynamic groups","Auto-generated merchandising analytics"]
  const tabParaDeux=["Curating products does not have to feel like doing your taxes. View stock status tags and preview your storefront on mobile & desktop.","Organically boost key products across all collections. Or set rules to buty & hide products when needed.","The easiest way for brands to be date-driven by tracking sales and stocj data for products and collections."]

  return (
    <div ref={target}  className='h-[300vh] w-full flex flex-col items-center justify-start'>
      <div className='supp1740:w-[70%] sticky top-0 h-screen w-[80%] max-w-[1800px]'>
          <div className="h-[145px] w-full">

          </div>
          <div  className="h-[calc(100%-145px)] flex flex-row items-start justify-between">
            <div  className='relative flex flex-col items-center justify-between rounded-[70px] w-[42%] min-w-[500px] bg-cardUn h-[calc(100%-30px)] overflow-hidden'>
                <motion.p style={{opacity:opacityParaBase,transform:scaleParaBase}} className="text-blanc text-[50px] font-[Montreal-Bold] text-start w-full pt-[50px] pr-0 pb-0 pl-[50px] transition-all duration-300 ease-linear">The App for <br></br>Fashion<br></br>Merchandising</motion.p>
                <motion.p style={{opacity:opacityParaBase,transform:scaleParaBase}}  className="text-grisClair leading-[28px] font-[Montreal-Bold] text-xl text-start w-full pt-[10px] pr-0 pb-0 pl-[50px] transition-all duration-300 ease-linear">Depict lets you manage your<br></br> collection pages like a professional.</motion.p>
                <ParaLeftMerchandising bottom={bottomParaUn} src={pointImg} alt={tabAlt[0]} opacity={opacityParaUn} transform={scaleParaUn} titre={tabTitre[0]} paraUn={tabParaUn[0]} paraDeux={tabParaDeux[0]}></ParaLeftMerchandising>
                <ParaLeftMerchandising bottom={bottomParaDeux} src={triangleImg} alt={tabAlt[1]} opacity={opacityParaDeux} transform={scaleParaDeux} titre={tabTitre[1]} paraUn={tabParaUn[1]} paraDeux={tabParaDeux[1]}></ParaLeftMerchandising>
                <ParaLeftMerchandising bottom={bottomParaTrois} src={statImg} alt={tabAlt[2]} opacity={opacityParaTrois} transform={""} titre={tabTitre[2]} paraUn={tabParaUn[2]} paraDeux={tabParaDeux[2]}></ParaLeftMerchandising>
            </div>
            <motion.div className="w-[56%] h-[calc(100%-30px)] bg-blanc rounded-[70px] relative">
                  <ImgRightMerchandising src={imgUne} alt={"Représentation d'un homme."} opacity={opacityImgUne}></ImgRightMerchandising>
                  <ImgRightMerchandising src={imgdeux} alt={"Représentation de huight personnes."} opacity={opacityImgDeux}></ImgRightMerchandising>
                  <ImgRightMerchandising src={imgTrois} alt={"Représentation de huight personnes." } opacity={opacityImgTrois}></ImgRightMerchandising>
                  <ImgRightMerchandising src={imgQuatre} alt={"Représentation de plusieurs statistiques."} opacity={opacityImgQuatre}></ImgRightMerchandising>
            </motion.div>
          </div>
      </div>
      <div  className='absolute h-[200vh] w-5 top-[100vh]'>

      </div>
  </div>
  )
  
}
