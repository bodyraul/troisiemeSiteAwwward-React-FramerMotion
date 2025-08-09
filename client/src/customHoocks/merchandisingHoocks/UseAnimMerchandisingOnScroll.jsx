import {useTransform,useScroll } from "framer-motion"
import { useRef } from "react";

export default function UseAnimMerchandisingOnScroll(){
    const target = useRef();

    const {scrollYProgress} = useScroll({
    target:target,
    offset:["0 1","1 1"],
    })

    const opacityParaBase = useTransform(scrollYProgress,[0.37,0.50],[1,0]);
    const opacityParaUn = useTransform(scrollYProgress,[0.68,0.73],[1,0]);
    const opacityParaDeux = useTransform(scrollYProgress,[0.91,0.95],[1,0]);
    const opacityParaTrois = useTransform(scrollYProgress,[0.77,1],[0,1]);
    const scaleParaBase = useTransform(scrollYProgress,[0.37,0.50],["scale(1)","scale(0.75)"]);
    const scaleParaUn = useTransform(scrollYProgress,[0.68,0.73],["scale(1)","scale(0.5)"]);
    const scaleParaDeux = useTransform(scrollYProgress,[0.91,0.95],["scale(1)","scale(0.5)"]);
    const scaleParaTrois = "";
    const bottomParaUn = useTransform(scrollYProgress,[0.33,0.56],["calc(0% - 10px)","calc(100% - 290px)"]);
    const bottomParaDeux = useTransform(scrollYProgress,[0.56,0.77],["calc(0% - 78px)","calc(100% - 358px)"]);
    const bottomParaTrois = useTransform(scrollYProgress,[0.77,1],["calc(0% - 146px)","calc(100% - 426px)"]);
    const opacityImgUne = useTransform(scrollYProgress,[0.40,0.45],[1,0]);
    const opacityImgDeux = useTransform(scrollYProgress,[0.47,0.52,0.65,0.70],[0,1,1,0]);
    const opacityImgTrois = useTransform(scrollYProgress,[0.72,0.77,0.87,0.92],[0,1,1,0]);
    const opacityImgQuatre = useTransform(scrollYProgress,[0.93,1],[0,1]);

    const tabAnim = {
        opacityPara:[opacityParaBase,opacityParaUn,opacityParaDeux,opacityParaTrois],
        scale:scaleParaBase,
        scales:[scaleParaUn,scaleParaDeux,scaleParaTrois],
        position:[bottomParaUn,bottomParaDeux,bottomParaTrois],
        opacityImg:[opacityImgUne,opacityImgDeux,opacityImgTrois,opacityImgQuatre],
        scrollYProgress:scrollYProgress,
        ref:target
    }

    return tabAnim

}