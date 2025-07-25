import {  useScroll,useTransform } from "framer-motion"
import { useRef } from "react";

export default function UseAnimCardsOnScroll(){
    const englobeCardTitre =useRef();
    const {scrollYProgress} = useScroll({
    target:englobeCardTitre,
    offset:["0 1","1 1"],

  })

  const rotationCardUne = useTransform(scrollYProgress,[0.6,0.95],[`translate3d(110px,115px,0px) rotateZ(-10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
  const rotationCardDeux = useTransform(scrollYProgress,[0.6,0.95],[`translate3d(0px,55px,0px)`,`translate3d(0px,0px,0px)`]);
  const rotationCardTrois = useTransform(scrollYProgress,[0.6,0.95],[`translate3d(-110px,115px,0px) rotateZ(10deg)`,`translate3d(0px,0px,0px) rotateZ(0deg)`]);
  const ColorTitre= useTransform(scrollYProgress,[0,0.40,0.41666,0.50,0.58],[`#181818`,`#181818`,`#4F4F4F`,`#B2B2B2`,`#FBFBFB`]);
  const opacityTitre= useTransform(scrollYProgress,[0,0.6,0.8,0.85,0.9],[1,1,0.7,0.4,0]);

  return {englobeCardTitre,scrollYProgress,rotationCardUne,rotationCardDeux,rotationCardTrois,ColorTitre,opacityTitre}
}