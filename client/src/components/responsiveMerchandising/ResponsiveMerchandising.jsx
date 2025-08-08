import React from 'react'
import soloWomen from '../../assets/img/soloWomen.jpg'
import allMannequin from"../../assets/img/allMannequin.jpg"
import summerCollection from"../../assets/img/summerCollection.jpg"
import statVente from"../../assets/img/statVente.jpg"
import ParaResponsiveMerchandising from '../../componentsReutilisable/ParaResponsiveMerchandising'
import useSetColor from '../../customHoocks/useSetColor'
import tabResponsiveMerchandising from '../../tools/responsiveMerchandisingTools/TabResponsibeMerchandising'
import UseResMerchanOnScroll from '../../customHoocks/responsiveMerchandisingHoocks/UseResMerchanOnScroll'

export default function ResponsiveMerchandising({setcolor}) {

  const {target,scrollYProgress}= UseResMerchanOnScroll();

  const {tabTextUn,tabTextDeux}=tabResponsiveMerchandising;

  useSetColor(scrollYProgress,setcolor,0.17,"#181818",0.19,"#5F5F5F",0.2,"#bfbfbf",0.21,"#f3f3f3");

  return(
        <div ref={target}  className='supp768:mt-[250px] supp1024:mt-[700px] h-auto w-full flex flex-col items-center justify-start '>
          <ParaResponsiveMerchandising  srcUn={soloWomen} textUn={tabTextUn[0]} textDeux={tabTextDeux[0]} textTrois={""}  ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising  srcUn={allMannequin} textUn={tabTextUn[1]} textDeux={tabTextDeux[1]} textTrois={""}  ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising  srcUn={summerCollection} textUn={tabTextUn[2]} textDeux={tabTextDeux[2]} textTrois={""}  ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising  srcUn={statVente} textUn={tabTextUn[3]} textDeux={tabTextDeux[3]} textTrois={""}  ></ParaResponsiveMerchandising>
        </div>
      )
}
