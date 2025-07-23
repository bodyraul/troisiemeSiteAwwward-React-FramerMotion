import {  useScroll,useTransform } from "framer-motion"
import { useRef } from "react";

export default function UseResponsiveCardOnScroll(){
    const englobeCardTitreResponsive =useRef();
    
    const {scrollYProgress} = useScroll({
        target:englobeCardTitreResponsive,
        offset:["0 1","1 1"],
    
      })
    
    const rotationCardUneResponsive= useTransform(scrollYProgress,[0.4,0.5],[`translate3d(0px,0px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const rotationCardDeuxResponsive= useTransform(scrollYProgress,[0.5,0.6],[`translate3d(0px,0px,0px) rotateZ(-10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const rotationCardTroisResponsive= useTransform(scrollYProgress,[0.75,0.85],[`translate3d(0px,0px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
    const ColorTitre= useTransform(scrollYProgress,[0,0.40,0.41666,0.50,0.58],[`#181818`,`#181818`,`#4F4F4F`,`#B2B2B2`,`#FBFBFB`]);
    const opacityTitre= useTransform(scrollYProgress,[0,0.6,0.8,0.85,0.9],[1,1,0.7,0.4,0]);

    return {englobeCardTitreResponsive,scrollYProgress,rotationCardUneResponsive,rotationCardDeuxResponsive,rotationCardTroisResponsive,ColorTitre,opacityTitre}
}