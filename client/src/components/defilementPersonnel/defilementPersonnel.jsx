import React from 'react'
import partner from '../../assets/img/partner.jpg'
import communication from '../../assets/img/communication.jpg'
import strategie from '../../assets/img/strategie.jpg'
import virgule from '../../assets/img/virgule.png'
import cercle from '../../assets/img/cercle.png'
import inter from '../../assets/img/inter.png'
import femmeUne from '../../assets/img/femme-Une.jpg'
import femmeDeux from '../../assets/img/femme-Deux.jpg'
import femmeTrois from '../../assets/img/femme-Trois.jpg'

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

    const tabTextUn=["A lifesaving app for work,","Effective visual ","TechNova integrates"];
    const tabTextDeux=["saving 40% of our","merchandising, TechNova  "," processes with AI"];
    const tabTextTrois=["merchandising time","is smart and very","to improve"];
    const tabParaTextQuatre=["each month."," user-friendly.","our operations."];
    const tabParaCinq=["Madison Harper","Brooklyn Avery","Skylar Bennett"];
    const tabParaSix=["Financial Manager"," Project Manager"," Marketing Manager"];

    return(
        <div ref={ref}  className='h-[5000px] w-screen relative'>
           <div className='sticky top-0 h-screen w-full'>
                <ParaDefilementPersonnel motionBol={true} transformUn={defilementParaUn} opacity={opacityParaUn} transformDeux={transformContainerUn} srcUn={cercle} textUn={tabTextUn[0]} textDeux={tabTextDeux[0]} textTrois={tabTextTrois[0]} paraQuatre={tabParaTextQuatre[0]} transformTrois={transformImgUne} srcDeux={femmeTrois} transformQuatre={transformImgDeux} srcTrois={partner} transformCinq={transformContainerDeux} paraCinq={tabParaCinq[0]} paraSix={tabParaSix[0]}></ParaDefilementPersonnel>
                <ParaDefilementPersonnel motionBol={false} transformUn={defilementParaDeux} opacity={opacityParaDeux} transformDeux={""} srcUn={virgule} textUn={tabTextUn[1]} textDeux={tabTextDeux[1]} textTrois={tabTextTrois[1]} paraQuatre={tabParaTextQuatre[1]} transformTrois={""} srcDeux={femmeUne} transformQuatre={""} srcTrois={communication} transformCinq={""} paraCinq={tabParaCinq[1]} paraSix={tabParaSix[1]}></ParaDefilementPersonnel>
                <ParaDefilementPersonnel motionBol={false} transformUn={defilementParaTrois} opacity={opacityParaTrois} transformDeux={""} srcUn={inter} textUn={tabTextUn[2]} textDeux={tabTextDeux[2]} textTrois={tabTextTrois[2]} paraQuatre={tabParaTextQuatre[2]} transformTrois={""} srcDeux={femmeDeux} transformQuatre={""} srcTrois={strategie} transformCinq={""} paraCinq={tabParaCinq[2]} paraSix={tabParaSix[2]}></ParaDefilementPersonnel>
           </div>
       </div>
       )
}