import React from 'react'
import './Merchandising.css'
import { useRef } from 'react'
import pointImg from '../../assets/img/carrerOrange.svg'
import triangleImg from '../../assets/img/triangleHautBas.svg'
import statImg from '../../assets/img/troisBarres.svg'
import { motion,useTransform,useScroll,useMotionValueEvent } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'
import imgUne from '../../assets/img/mainImage.png'
import imgdeux from '../../assets/img/homepage.jpeg'
import imgTrois from '../../assets/img/homepage2.jpeg'
import imgQuatre from '../../assets/img/stats.png'

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


  return (
    <div ref={target}  className='allContainerMarchansising'>
        <div className='contenuMarchandising'>
            <div className="topVide">

            </div>
            <div  className="MarchandisingPlusImg">
              <div  className='fashionMarchandising'>
                  <motion.p style={{opacity:opacityParaBase,transform:scaleParaBase}} className="titreMarchandising">The App for <br></br>Fashion<br></br>Merchandising</motion.p>
                  <motion.p style={{opacity:opacityParaBase,transform:scaleParaBase}}  className="descriptionMerchandising">Depict lets you manage your<br></br> collection pages like a professional.</motion.p>
                  <motion.div style={{bottom:bottomParaUn}} id='pCache1' className="pCache">
                      <p className="affichageCache">
                        <img src={pointImg} alt="" />
                        <p>Editorial Merchandising</p>
                      </p>
                      <motion.div style={{opacity:opacityParaUn,transform:scaleParaUn}} className="contenuCache">
                          <p className="titreCache">
                          Manual curation at its finest
                          </p>
                          <p className="texteCache">
                          Curating products does not have to feel like doing your taxes. View stock status tags and preview your storefront on mobile & desktop.
                          </p>
                      </motion.div>
                      
                  </motion.div>
                  <motion.div style={{bottom:bottomParaDeux}} id='pCache2' className="pCache">
                      <p className="affichageCache">
                        <img src={triangleImg} alt="" />
                        <p>Strategic Merchandising</p>
                      </p>
                      <motion.div style={{opacity:opacityParaDeux,transform:scaleParaDeux}} className="contenuCache">
                          <p className="titreCache">
                          Set boosting rules based on tags, collections, and dynamic groups
                          </p>
                          <p className="texteCache">
                            Organically boost key products across all collections. Or set rules to buty & hide products when needed.
                          </p>
                      </motion.div>
                      
                  </motion.div>
                  <motion.div style={{bottom:bottomParaTrois}} id='pCache3' className="pCache">
                      <p className="affichageCache">
                        <img src={statImg} alt="" />
                        <p>Analytics</p>
                      </p>
                      <motion.div style={{opacity:opacityParaTrois}} className="contenuCache">
                          <p className="titreCache">
                            Auto-generated merchandising analytics
                          </p>
                          <p className="texteCache">
                            The easiest way for brands to be date-driven by tracking sales and stocj data for products and collections.
                          </p>
                      </motion.div>
                      
                  </motion.div>
              </div>
              <motion.div className="imgMarchandising">
                    <motion.img style={{opacity:opacityImgUne}} id='img1' src={imgUne} alt="" />
                    <motion.img style={{opacity:opacityImgDeux}} id='img2' src={imgdeux} alt="" />
                    <motion.img  style={{opacity:opacityImgTrois}} id='img3' src={imgTrois} alt="" />
                    <motion.img style={{opacity:opacityImgQuatre}} id='img4' src={imgQuatre} alt="" />
              </motion.div>
            </div>
        </div>
        <div  className='target'>

        </div>
    </div>
  )
}
