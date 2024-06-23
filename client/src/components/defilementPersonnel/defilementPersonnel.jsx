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
import { useState } from 'react'
import { useEffect } from 'react'
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

    const transformImgUne = useTransform(scrollYProgress,[0.10,0.27],["translate3d(0,-50px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const transformImgDeux = useTransform(scrollYProgress,[0.10,0.26],["translate3d(0,-130px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const transformContainerUn = useTransform(scrollYProgress,[0.10,0.25],["translate3d(0px,230px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const transformContainerDeux = useTransform(scrollYProgress,[0.10,0.28],["translate3d(60px,230px,0px) rotateZ(-20deg)","translate3d(0px,0px,0px) rotateZ(0deg)"]);
    const defilementParaUn = useTransform(scrollYProgress,[0.30,1],["translateX(-50%) translateY(-50%)","translateX(-290%) translateY(-50%)"]);
    const defilementParaDeux = useTransform(scrollYProgress,[0.30,1],["translateX(70%) translateY(-50%)","translateX(-170%) translateY(-50%)"]);
    const defilementParaTrois = useTransform(scrollYProgress,[0.30,1],[" translateX(190%) translateY(-50%)","translateX(-50%) translateY(-50%)"]);
    const opacityParaUn = useTransform(scrollYProgress,[0.45,0.55],[1,0]);
    const opacityParaDeux = useTransform(scrollYProgress,[0.45,0.55,0.8,0.9],[0,1,1,0]);
    const opacityParaTrois = useTransform(scrollYProgress,[0.8,0.9],[0,1]);

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
        return(
         <div ref={ref}  className='partieDefilementPersonnel'>
            <div className='allPersonnel'>
                <motion.div style={{transform:defilementParaUn,opacity:opacityParaUn}} className='ElementPersonnelUn'>
                    <motion.div style={{transform:transformContainerUn,transition: "all 0.1s  linear"}} className='partieUne'>		
                        <div className='partieUneImg'>
                            <img src={imgQuotation} alt="" />
                        </div>
                        <div  className='partieUneDescription'>
                            <span>Awork(life)saving app.</span><br></br><span>We saved 40% of our</span><br></br><span>time merchandising</span><br></br><span>every month.</span>
                        </div>
                    </motion.div>
                    <div className='partieDeux'>
                        <div className='partiePhotoTitre'>
                            <motion.div style={{transform:transformImgUne,transition: "all 0.1s  linear"}} className='partiePhotoPersonnel'>
                                    <img  src={imgAnnie} alt="" />   
                            </motion.div>
                            <motion.div style={{transform:transformImgDeux,transition: "all 0.1s  linear"}} className='partieTitrePersonnel'>
                                <img src={imgStronger} alt="" />
                            </motion.div>
                        </div>
                        <motion.div style={{transform:transformContainerDeux,transition: "all 0.1s  linear"}}className='partiePersonnelNom'>
                            <span>Hanny Eldblom</span><br></br> <span>Head of Ecommerce</span>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div style={{transform:defilementParaDeux,opacity:opacityParaDeux}} className='ElementPersonnelDeux'>
                    <div className='partieUne'>		
                        <div className='partieUneImg'>
                            <img src={imgQuotation}alt="" />
                        </div>
                        <div  className='partieUneDescription'>
                            <span>Time-effective visual</span><br></br><span>merchandising, Depict is</span><br></br><span>super user-friendly and</span><br></br><span>smart.</span>
                        </div>
                    </div>
                    <div className='partieDeux'>
                        <div className='partiePhotoTitre'>
                            <div  className='partiePhotoPersonnel'>
                                    <img  src={imgElysa} alt="" />   
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
                <motion.div style={{transform:defilementParaTrois,opacity:opacityParaTrois}} className='ElementPersonnelTrois'>
                    <div className='partieUne'>		
                        <div className='partieUneImg'>
                            <img src={imgQuotation} alt="" />
                        </div>
                        <div  className='partieUneDescription'>
                            <span>Depict has</span><br></br><span>revolutionized our</span><br></br><span>workflow with AI</span><br></br><span>capabilities to enhance</span><br></br><span>our operations.</span>
                        </div>
                    </div>
                    <div className='partieDeux'>
                        <div className='partiePhotoTitre'>
                            <div  className='partiePhotoPersonnel'>
                                    <img  src={imgCassandra}  alt="" />   
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
            </div>
        </div>
        )
    }

    if(matches){
        return(
            <div className='allResponsiveMarc'>
             <div className='responsiveMarchandising'>
                <div className='responsivePartieIntro'>
                    <img src={imgQuotation}alt="" />
                    <p>A work(like)saving app. We saved 40% of our time merchandising every month. </p>
                </div>
                <div className='responsivePartieNom'>
                    <span>Hanny Eldblom</span><br></br><span>Head of Ecommerce</span>
                </div>  
                <div className='responsivePartieImage'>
                    <div className='responsiveImg'>
                        <img className='imgCassandra' src={imgElysa} alt="" />
                        <div className='testImg'> 
                            <img src={imgStronger} alt="" />
                        </div>
                    </div>
                    <img id='imgResUn' src={imgAnnie} alt="" />
                </div>  
             </div>
            </div>
        )
    }
}
