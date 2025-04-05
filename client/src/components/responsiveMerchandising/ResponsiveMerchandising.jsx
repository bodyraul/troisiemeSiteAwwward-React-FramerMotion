import React from 'react'
import { useRef } from 'react'
import pointImg from '../../assets/img/carrerOrange.svg'
import triangleImg from '../../assets/img/triangleHautBas.svg'
import statImg from '../../assets/img/troisBarres.svg'
import { useScroll } from "framer-motion"
import imgUne from '../../assets/img/mainImage.png'
import imgdeux from '../../assets/img/homepage.jpeg'
import imgTrois from '../../assets/img/homepage2.jpeg'
import imgQuatre from '../../assets/img/stats.png'
import ParaResponsiveMerchandising from '../../componentsReutilisable/ParaResponsiveMerchandising'
import useSetColor from '../../customHoocks/useSetColor'

export default function ResponsiveMerchandising({setcolor}) {

  const target = useRef();
  const {scrollYProgress} = useScroll({
    target:target,
    offset:["0 1","1 1"],
  })

  const tabTextUn=["The App for Fashion Merchandising","Manual curation at its finest","Set boosting rules based on tags and dynamic groups","Auto-generated merchandising analytics"]
  const tabTextDeux=["Simple for you to manage.","Curating products does not have to feel like doing your taxes. View stock status tags and preview your storefront on mobile & desktop.","Organically boost key products across all collections. Or set rules to buty & hide products when needed.","The easiest for brands to be data-driven by tracking sales and stock data for products and collections."]
  const textParaTrois ="Easier to discover";

  useSetColor(scrollYProgress,setcolor,0.17,"#181818",0.19,"#5F5F5F",0.2,"#bfbfbf",0.21,"#f3f3f3");

  return(
        <div ref={target}  className='h-auto w-full flex flex-col items-center justify-start'>
          <ParaResponsiveMerchandising bolean={true} srcUn={imgUne} textUn={tabTextUn[0]} textDeux={tabTextDeux[0]} textTrois={textParaTrois} srcDeux={""} ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising bolean={false} srcUn={pointImg} textUn={tabTextUn[1]} textDeux={tabTextDeux[1]} textTrois={""} srcDeux={imgdeux} ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising bolean={false} srcUn={triangleImg} textUn={tabTextUn[2]} textDeux={tabTextDeux[2]} textTrois={""} srcDeux={imgTrois} ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising bolean={false} srcUn={statImg} textUn={tabTextUn[3]} textDeux={tabTextDeux[3]} textTrois={""} srcDeux={imgQuatre} ></ParaResponsiveMerchandising>
        </div>
      )
}
