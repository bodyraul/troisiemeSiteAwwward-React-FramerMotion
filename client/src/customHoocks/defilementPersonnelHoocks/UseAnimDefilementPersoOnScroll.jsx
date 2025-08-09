import {  useScroll,useTransform } from "framer-motion"
import { useRef } from 'react'


export default function UseAnimDefilementPersoOnScroll(){

    const ref=useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1","1 1"],
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

    const tabAnimDefilementPerso = {
      transformImg:[transformImgUne,transformImgDeux],
      transformContainer:[transformContainerUn,transformContainerDeux],
      defilementPara:[defilementParaUn,defilementParaDeux,defilementParaTrois],
      opacityPara:[opacityParaUn,opacityParaDeux,opacityParaTrois],
      scrollYProgress:scrollYProgress,
      ref:ref
    }

    return tabAnimDefilementPerso

}