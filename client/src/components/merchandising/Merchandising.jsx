import React from 'react'
import { useRef } from 'react'
import pointImg from '../../assets/img/carrerOrange.svg'
import triangleImg from '../../assets/img/triangleHautBas.svg'
import statImg from '../../assets/img/troisBarres.svg'
import { motion,useTransform,useScroll,useMotionValueEvent } from "framer-motion"
import { useEffect } from 'react'
import imgUne from '../../assets/img/mainImage.png'
import imgdeux from '../../assets/img/homepage.jpeg'
import imgTrois from '../../assets/img/homepage2.jpeg'
import imgQuatre from '../../assets/img/stats.png'
import { useState } from 'react'

export default function Merchandising({setcolor}) {

  
  const target = useRef();
  const {scrollYProgress} = useScroll({
    target:target,
    offset:["0 1","1 1"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest<0.17 ){

      setcolor("#181818");
    }
    if(latest>=0.17 && latest<= 0.19){
   
      setcolor("#5F5F5F");
    }
    if(latest>=0.2 && latest<= 0.21){

      setcolor("#BFBFBF");
    }
    if(latest>0.21){
  
      setcolor("#F3F3F3");
    }
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

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1350px)").matches
  )

  useEffect(() => {
    function eventResponsive(e){
      setMatches( e.matches );
    }

    window.matchMedia("(max-width: 1350px)").addEventListener('change', eventResponsive);
  
    return () => {
      window.matchMedia("(max-width: 1350px)").removeEventListener('change', eventResponsive);
    }
  }, [])


  if(!matches){
    return (
      <div ref={target}  className='h-[300vh] w-full flex flex-col items-center justify-start'>
        <div className='supp1740:w-[70%] sticky top-0 h-screen w-[80%] max-w-[1800px]'>
            <div className="h-[145px] w-full">

            </div>
            <div  className="h-[calc(100%-145px)] flex flex-row items-start justify-between">
              <div  className='relative flex flex-col items-center justify-between rounded-[70px] w-[42%] min-w-[500px] bg-cardUn h-[calc(100%-30px)] overflow-hidden'>
                  <motion.p style={{opacity:opacityParaBase,transform:scaleParaBase}} className="text-blanc text-[50px] font-[Montreal-Bold] text-start w-full pt-[50px] pr-0 pb-0 pl-[50px] transition-all duration-300 ease-linear">The App for <br></br>Fashion<br></br>Merchandising</motion.p>
                  <motion.p style={{opacity:opacityParaBase,transform:scaleParaBase}}  className="text-grisClair leading-[28px] font-[Montreal-Bold] text-xl text-start w-full pt-[10px] pr-0 pb-0 pl-[50px] transition-all duration-300 ease-linear">Depict lets you manage your<br></br> collection pages like a professional.</motion.p>
                  <motion.div style={{bottom:bottomParaUn}}  className="h-[240px] w-[calc(100%-100px)] absolute flex flex-col justify-around z-[1] bg-cardUn bottom-[calc(0%+18px)] transition-all duration-300 ease-linear">
                      <p className="flex flex-row items-center justify-start h-[24%] bg-grisParaCache text-blanc font-[Montreal-Bold] text-2xl pt-5 pl-0 pb-5 pr-[10px] rounded-2xl">
                        <img className='h-10 w-10' src={pointImg} alt="Représentation de six points oranges." />
                        <p className='ml-[10px] flex flex-row items-center justify-center'>Editorial Merchandising</p>
                      </p>
                      <motion.div style={{opacity:opacityParaUn,transform:scaleParaUn}} className="h-[70%] transition-all duration-200 ease-linear flex flex-col items-start justify-evenly">
                          <p className="text-blanc font-[Montreal-Bold] text-[33px]">
                          Manual curation at its finest
                          </p>
                          <p className="text-grisClair font-[Montreal-Bold] text-xl leading-[28px]">
                          Curating products does not have to feel like doing your taxes. View stock status tags and preview your storefront on mobile & desktop.
                          </p>
                      </motion.div>
                      
                  </motion.div>
                  <motion.div style={{bottom:bottomParaDeux}} className="h-[240px] w-[calc(100%-100px)] absolute flex flex-col justify-around z-[2] bg-cardUn bottom-[calc(0%-50px)] transition-all duration-300 ease-linear">
                      <p className="flex flex-row items-center justify-start h-[24%] bg-grisParaCache text-blanc font-[Montreal-Bold] text-2xl pt-5 pl-0 pb-5 pr-[10px] rounded-2xl">
                        <img className='h-10 w-10' src={triangleImg} alt="Représentation d'un triangle orange pointant vers le bas et d'un triangle orange pointant vers le haut." />
                        <p className='ml-[10px] flex flex-row items-center justify-center'>Strategic Merchandising</p>
                      </p>
                      <motion.div style={{opacity:opacityParaDeux,transform:scaleParaDeux}} className="h-[70%] transition-all duration-200 ease-linear flex flex-col items-start justify-evenly">
                          <p className="text-blanc font-[Montreal-Bold] text-[33px]">
                          Set boosting rules based on tags, collections, and dynamic groups
                          </p>
                          <p className="text-grisClair font-[Montreal-Bold] text-xl leading-[28px]">
                            Organically boost key products across all collections. Or set rules to buty & hide products when needed.
                          </p>
                      </motion.div>
                      
                  </motion.div>
                  <motion.div style={{bottom:bottomParaTrois}} className="h-[240px] w-[calc(100%-100px)] absolute flex flex-col justify-around z-[3] bg-cardUn bottom-[calc(0%-118px)] transition-all duration-300 ease-linear">
                      <p className="flex flex-row items-center justify-start h-[24%] bg-grisParaCache text-blanc font-[Montreal-Bold] text-2xl pt-5 pl-0 pb-5 pr-[10px] rounded-2xl">
                        <img className='h-10 w-10' src={statImg} alt="Représentation de trois barres verticales oranges." />
                        <p className='ml-[10px] flex flex-row items-center justify-center'>Analytics</p>
                      </p>
                      <motion.div style={{opacity:opacityParaTrois}} className="h-[70%] transition-all duration-200 ease-linear flex flex-col items-start justify-evenly">
                          <p className="text-blanc font-[Montreal-Bold] text-[33px]">
                            Auto-generated merchandising analytics
                          </p>
                          <p className="text-grisClair font-[Montreal-Bold] text-xl leading-[28px]">
                            The easiest way for brands to be date-driven by tracking sales and stocj data for products and collections.
                          </p>
                      </motion.div>
                      
                  </motion.div>
              </div>
              <motion.div className="w-[56%] h-[calc(100%-30px)] bg-blanc rounded-[70px] relative">
                    <motion.img className='w-[85%] absolute left-1/2  top-1/2 rounded-[40px] transition-all duration-300 ease-linear z-[5]' style={{opacity:opacityImgUne ,transform:`translate3d(-50%,-50%,0)`,boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}}  src={imgUne} alt="Représentation d'un homme." />
                    <motion.img className='w-[85%] absolute left-1/2  top-1/2 rounded-[40px] transition-all duration-300 ease-linear opacity-0 z-[4]' style={{opacity:opacityImgDeux,transform:`translate3d(-50%,-50%,0)`,boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}}  src={imgdeux} alt="Représentation de huight personnes." />
                    <motion.img className='w-[85%] absolute left-1/2  top-1/2 rounded-[40px] transition-all duration-300 ease-linear opacity-0 z-[3]' style={{opacity:opacityImgTrois,transform:`translate3d(-50%,-50%,0)`,boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}}  src={imgTrois} alt="Représentation de huight personnes." />
                    <motion.img className='w-[85%] absolute left-1/2  top-1/2 rounded-[40px] transition-all duration-300 ease-linear opacity-0 z-[2]' style={{opacity:opacityImgQuatre,transform:`translate3d(-50%,-50%,0)`,boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}}  src={imgQuatre} alt="Représentation de plusieurs statistiques." />
              </motion.div>
            </div>
        </div>
        <div  className='absolute h-[200vh] w-5 top-[100vh]'>

        </div>
    </div>
    )
  }

  if(matches){
    return(
      <div ref={target}  className='h-auto w-full flex flex-col items-center justify-start'>
        <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
            <h1 className='supp610:text-[50px] supp610:leading-[45px]  block w-[90%] mt-20 font-[Montreal-Medium] text-[35px] leading-[35px]'> The App for Fashion Merchandising</h1>
            <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'>Simple for you to manage.<br></br>Easier to discover</p>
            <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-[90%] mb-[90px] rounded-[30px]' src={imgUne} alt="" />
        </div>
        <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 mt-[50px] flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
          <div className='w-[90%]'>
            <img className='supp610:w-[60px] w-[40px] mt-20' src={pointImg} alt="" />
            <h1 className='supp610:text-[50px] supp610:leading-[45px] block w-[90%] font-[Montreal-Medium] text-[35px] leading-[35px] mt-[30px]'>Manual curation at its finest</h1>
            <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'>Curating products does not have to feel like doing your taxes. View stock status tags and preview your storefront on mobile & desktop.</p>
            <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-full rounded-[30px] mb-20' src={imgdeux} alt="" />
          </div>
        </div>
        <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 mt-[50px] flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
          <div className='w-[90%]'>
            <img className='supp610:w-[60px] w-[40px] mt-20' src={triangleImg} alt="" />
            <h1 className='supp610:text-[50px] supp610:leading-[45px] block w-[90%] font-[Montreal-Medium] text-[35px] leading-[35px] mt-[30px]'>Manual curation at its finest</h1>
            <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'>Curating products does not have to feel like doing your taxes. View stock status tags and preview your storefront on mobile & desktop.</p>
            <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-full rounded-[30px] mb-20' src={imgTrois} alt="" />
          </div>
        </div>
        <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 mt-[50px] flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
          <div className='w-[90%]'>
            <img className='supp610:w-[60px] w-[40px] mt-20' src={statImg} alt="" />
            <h1 className='supp610:text-[50px] supp610:leading-[45px] block w-[90%] font-[Montreal-Medium] text-[35px] leading-[35px] mt-[30px]'>Auto-generated merchandising analytics</h1>
            <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'>The easiest for brands to be data-driven by tracking sales and stock data for products and collections.</p>
            <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-full rounded-[30px] mb-20' src={imgQuatre} alt="" />
          </div>
        </div>
      </div>
    )
  }
}
