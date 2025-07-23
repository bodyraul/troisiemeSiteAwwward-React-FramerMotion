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
import UseAnimDefilementPersoOnScroll from '../../customHoocks/defilementPersonnelHoocks/UseAnimDefilementPersoOnScroll'
import ParaDefilementPersonnel from '../../componentsReutilisable/ParaDefilementPersonnel'
import useSetColor from '../../customHoocks/useSetColor'
import tabDefilementPerso from '../../tools/defilementPersoTools/TabDefilementPerso'

export default function DefilementPersonnel({setcolor}) {
    
    const {ref,scrollYProgress,transformImgUne,transformImgDeux,transformContainerUn,transformContainerDeux,defilementParaUn,
    defilementParaDeux,defilementParaTrois,opacityParaUn,opacityParaDeux,opacityParaTrois} = UseAnimDefilementPersoOnScroll();

    useSetColor(scrollYProgress,setcolor,0.10,"#f3f3f3",0.13,"#bfbfbf",0.16,"#5f5f5f",0.19,"#181818");  
   
    const {tabTextUn,tabTextDeux,tabTextTrois,tabParaTextQuatre,tabParaCinq,tabParaSix} = tabDefilementPerso;

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