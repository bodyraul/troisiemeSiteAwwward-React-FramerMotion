import React from 'react'
import imgStronger from '../../assets/img/stronger.png'
import imgEytis from '../../assets/img/eytis.png'
import imgUnderstatement from '../../assets/img/understatement.png'
import imgAnnie from '../../assets/img/hanny.jpeg'
import imgElysa from '../../assets/img/elysa.jpeg'
import imgCassandra from '../../assets/img/casandra.jpeg'
import imgQuotation from '../../assets/img/quotation.png'
import { useRef } from 'react'
import {  useScroll,useTransform } from "framer-motion"
import ParaDefilementPersonnel from '../../componentsReutilisable/ParaDefilementPersonnel'
import useSetColor from '../../customHoocks/useSetColor'

export default function DefilementPersonnel({setcolor}) {
    
    const ref=useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1","1 1"],
      })

    useSetColor(scrollYProgress,setcolor,0.10,"#f3f3f3",0.13,"#bfbfbf",0.16,"#5f5f5f",0.19,"#181818");  
   

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

    const tabTextUn=["Awork(life)saving app.","Time-effective visual","Depict has"];
    const tabTextDeux=["We saved 40% of our","merchandising, Depict is","workflow with AI"];
    const tabTextTrois=["time merchandising","super user-friendly and","capabilities to enhance"];
    const tabParaTextQuatre=["every month.","smart.","our operations."];
    const tabParaCinq=["Hanny Eldblom","Karin Lijenfeldt","Cassandra Backman"];
    const tabParaSix=["Head of Ecommerce","Ecommerce Manager","Ecommerce Manager"];

    return(
        <div ref={ref}  className='h-[5000px] w-screen relative'>
           <div className='sticky top-0 h-screen w-full'>
                <ParaDefilementPersonnel motionBol={true} transformUn={defilementParaUn} opacity={opacityParaUn} transformDeux={transformContainerUn} srcUn={imgQuotation} textUn={tabTextUn[0]} textDeux={tabTextDeux[0]} textTrois={tabTextTrois[0]} paraQuatre={tabParaTextQuatre[0]} transformTrois={transformImgUne} srcDeux={imgAnnie} transformQuatre={transformImgDeux} srcTrois={imgStronger} transformCinq={transformContainerDeux} paraCinq={tabParaCinq[0]} paraSix={tabParaSix[0]}></ParaDefilementPersonnel>
                <ParaDefilementPersonnel motionBol={false} transformUn={defilementParaDeux} opacity={opacityParaDeux} transformDeux={""} srcUn={imgQuotation} textUn={tabTextUn[1]} textDeux={tabTextDeux[1]} textTrois={tabTextTrois[1]} paraQuatre={tabParaTextQuatre[1]} transformTrois={""} srcDeux={imgElysa} transformQuatre={""} srcTrois={imgEytis} transformCinq={""} paraCinq={tabParaCinq[1]} paraSix={tabParaSix[1]}></ParaDefilementPersonnel>
                <ParaDefilementPersonnel motionBol={false} transformUn={defilementParaTrois} opacity={opacityParaTrois} transformDeux={""} srcUn={imgQuotation} textUn={tabTextUn[2]} textDeux={tabTextDeux[2]} textTrois={tabTextTrois[2]} paraQuatre={tabParaTextQuatre[2]} transformTrois={""} srcDeux={imgCassandra} transformQuatre={""} srcTrois={imgUnderstatement} transformCinq={""} paraCinq={tabParaCinq[2]} paraSix={tabParaSix[2]}></ParaDefilementPersonnel>
           </div>
       </div>
       )
}