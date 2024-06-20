import React from 'react'
import "../defilementPersonnel/defilementPersonnel.css"
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

    const translateDefilement = useTransform(scrollYProgress,[0.38,1],["translateX(0vw)","translateX(-130vw)"]);
    const transformImgUne = useTransform(scrollYProgress,[0.10,0.35],["translate3d(0,-50px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const transformImgDeux = useTransform(scrollYProgress,[0.10,0.35],["translate3d(0,-130px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const transformContainerUn = useTransform(scrollYProgress,[0.10,0.35],["translate3d(0px,230px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const transformContainerDeux = useTransform(scrollYProgress,[0.10,0.35],["translate3d(60px,230px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const opacityParaUn = useTransform(scrollYProgress,[0.40,0.60],[1,0]);
    const opacityParaDeux = useTransform(scrollYProgress,[0.40,0.45,0.80,1],[0,1,1,0]);
    const opacityParaTrois = useTransform(scrollYProgress,[0.72,0.80],[0,1]);

  return (
    <div ref={ref} className='partieDefilementPersonnel'>
        <div className="allPersonnel">
            <motion.div style={{transform:translateDefilement}} className='defilementPersonnel'>
                <motion.div style={{opacity:opacityParaUn}} className='ElementPersonnel'>
                    <motion.div style={{transform:transformContainerUn,transition: "all 0.1s  linear"}} className='partieUne'>
                        <div className='partieUneImg'>
                            <img src={imgQuotation} alt="" />
                        </div>
                        <motion.div  className='partieUneDescription'>
                            <span>Awork(life)saving app.</span><br></br><span>We saved 40% of our</span><br></br><span>time merchandising</span><br></br><span>every month.</span>
                        </motion.div>
                    </motion.div>
                    <div className='partieDeux'>
                        <div className='partiePhotoTitre'>
                            <motion.div style={{transform:transformImgUne,transition: "all 0.1s  linear"}} className='partiePhotoPersonnel'>
                                 <img  src={imgAnnie} alt="" />   
                            </motion.div>
                            <motion.div style={{transform:transformImgDeux,transition: "all 0.1s  linear"}}  className='partieTitrePersonnel'>
                                <img src={imgStronger} alt="" />
                            </motion.div>
                        </div>
                        <motion.div style={{transform:transformContainerDeux,transition: "all 0.1s  linear"}} className='partiePersonnelNom'>
                            <span>Hanny Eldblom</span><br></br> <span>Head of Ecommerce</span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div style={{opacity:opacityParaDeux}}  className='ElementPersonnel'>
                    <div className='partieUne'>
                        <div className='partieUneImg'>
                            <img src={imgQuotation} alt="" />
                        </div>
                        <div className='partieUneDescription'>
                            <span>Time-effective visual</span><br></br><span>merchandising, Depict is</span><br></br><span>super user-friendly and</span><br></br><span>smart.</span>
                        </div>
                    </div>
                    <div className='partieDeux'>
                        <div className='partiePhotoTitre'>
                            <div className='partiePhotoPersonnel'>
                                 <img src={imgElysa} alt="" />   
                            </div>
                            <div className='partieTitrePersonnel'>
                                <img src={imgEytis} alt="" />
                            </div>
                        </div>
                        <div className='partiePersonnelNom'>
                            <span>Karin Lijenfeldt</span><br></br> <span>Ecommerce Manager</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div style={{opacity:opacityParaTrois}} className='ElementPersonnel'>
                    <div className='partieUne'>
                        <div className='partieUneImg'>
                            <img src={imgQuotation} alt="" />
                        </div>
                        <div className='partieUneDescription'>
                            <span>Depict has</span><br></br><span>revolutionized our</span><br></br><span>workflow with AI</span><br></br><span>capabilities to enhance</span><br></br><span>our operations.</span>
                        </div>
                    </div>
                    <div className='partieDeux'>
                        <div className='partiePhotoTitre'>
                            <div className='partiePhotoPersonnel'>
                                 <img src={imgCassandra} alt="" />   
                            </div>
                            <div className='partieTitrePersonnel'>
                                <img src={imgUnderstatement} alt="" />
                            </div>
                        </div>
                        <div className='partiePersonnelNom'>
                            <span>Cassandra Backman</span><br></br> <span>Ecommerce Manager</span>
                        </div>
                    </div>
                </motion.div>
                
            </motion.div>
        </div>
    </div>
  )
}
