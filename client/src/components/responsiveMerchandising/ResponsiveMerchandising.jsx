import React from 'react'
import { useRef } from 'react'
import { useScroll } from "framer-motion"
import soloWomen from '../../assets/img/soloWomen.jpg'
import allMannequin from"../../assets/img/allMannequin.jpg"
import summerCollection from"../../assets/img/summerCollection.jpg"
import statVente from"../../assets/img/statVente.jpg"
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
          <ParaResponsiveMerchandising  srcUn={soloWomen} textUn={tabTextUn[0]} textDeux={tabTextDeux[0]} textTrois={textParaTrois}  ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising  srcUn={allMannequin} textUn={tabTextUn[1]} textDeux={tabTextDeux[1]} textTrois={""}  ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising  srcUn={summerCollection} textUn={tabTextUn[2]} textDeux={tabTextDeux[2]} textTrois={""}  ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising  srcUn={statVente} textUn={tabTextUn[3]} textDeux={tabTextDeux[3]} textTrois={""}  ></ParaResponsiveMerchandising>
        </div>
      )
}
