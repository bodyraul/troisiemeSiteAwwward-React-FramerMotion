import React from 'react'
import imgDollard from "../../assets/img/dollars.svg"
import allMannequin from"../../assets/img/allMannequin.jpg"
import { useRef } from 'react'
import enterBtnOrange from '../../fonction/photoVisualFonction/EnterBtnOrange'
import leaveBtnOrange from '../../fonction/photoVisualFonction/LeaveBtnOrange'
import imgMoove from '../../fonction/photoVisualFonction/ImgMoove'
import imgPositionBase from '../../fonction/photoVisualFonction/ImgPositionBase'
import UseAffichagePhotoVisual from '../../customHoocks/photoVisualHoocks/UseAffichagePhotoVisual'

export default function PhotoVisual() {

  const textInvisibleBtnOrange = useRef();const textVisibleBtnOrange = useRef();const imgRotate = useRef();const paraVisual = useRef();
  const paraPhotoVisual = useRef();const paraUn = useRef();const paraDeux = useRef();const paraTrois = useRef();const paraBtn = useRef();

  UseAffichagePhotoVisual(paraVisual,paraPhotoVisual,paraUn,paraDeux,paraTrois,paraBtn);

  return (
    <div className='supp1100:h-[800px] supp1740:h-[90vh]  h-auto mb-0 w-full flex flex-row items-center justify-center'>
    <div className='supp1100:w-[80%] supp1100:flex-row  supp1740:w-[70%] h-full w-[90%] max-w-[1800px] flex flex-col items-center justify-between'>
        <div style={{transition:`transform 0.5s ease-out,opacity 0.2s ease-out`,boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} ref={paraVisual} className='supp1100:mb-0 supp1100:h-full supp1100:w-[49%] translate-y-[10%] opacity-0 h-[600px] w-[100%] bg-blanc rounded-[50px] flex flex-col items-start justify-center mb-4'>
          <p ref={paraUn} className='translate-y-[40%] transition-transform duration-500 ease-out my-0 mx-12 w-[170px] flex flex-row items-center justify-around p-[10px] font-[Montreal-Regular] text-base'>
             <img src={imgDollard} alt="Représentation du symbole dollars."/>
             <span>do your shop</span>
          </p>
          <p ref={paraDeux} className='supp500:text-[45px] supp500:leading-[50px] supp680:text-[75px] supp680:leading-[75px] supp1100:text-[45px] supp1100:leading-[50px] supp1250:text-[60px] supp1250:leading-[65px] supp1740:text-[75px] supp1740:leading-[75px] translate-y-[15%] transition-transform duration-500 ease-out m-12 font-[Montreal-Bold] text-[33px] leading-[30px] tracking-[3px]'>
              <span>Best of</span><br></br>
              <span>Collection</span><br></br>
              <span>for you</span>
          </p>
          <p ref={paraTrois} className='supp500:text-xl translate-y-full transition-transform duration-500 ease-out mt-0 mx-12 mb-12 text-grisTexte font-[Montreal-Medium] font-bold tracking-[1px] text-base'>
              <span className='supp500:leading-[25px] leading-[20px]'>Perfect for fashion brands instantly.</span>
              <br></br>
              <span className='supp500:leading-[25px] leading-[20px]'>One-Click Setups</span>
          </p>
          <div ref={paraBtn}  onMouseEnter={()=>enterBtnOrange(textInvisibleBtnOrange,textVisibleBtnOrange)} onMouseLeave={()=>leaveBtnOrange(textInvisibleBtnOrange,textVisibleBtnOrange)} className='supp680:h-[100px] supp680:rounded-[30px] translate-y-[50%] transition-transform duration-500 ease-out text-orangeCustom border border-solid border-red-500 w-[150px] h-[60px] ml-12 font-[Montreal-Medium] text-base rounded-[15px] flex flex-row items-center justify-center hover:cursor-pointer'>
              <div className='w-full h-1/2 relative overflow-hidden'>
                <p ref={textVisibleBtnOrange} className='visibleSpan'>Here for more</p>
                <p ref={textInvisibleBtnOrange} className='invisibleSpan'>Click-me</p>
              </div>
          </div>
        </div>
        <div style={{transition:`transform 0.5s 0.4s ease-out,opacity 0.2s 0.4s ease-out`,boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} ref={paraPhotoVisual} className='supp1100:w-[49%] supp1100:h-full supp1100:p-0 supp1100:mb-0 translate-y-[10%] opacity-0 h-auto w-full bg-blanc rounded-[50px] relative flex flex-row items-center justify-center perspective-[1500px] p-5 mb-4'>
           <img ref={imgRotate} onMouseMove={(e)=>imgMoove(e,imgRotate)} onMouseLeave={()=>imgPositionBase(imgRotate)}  className='bigImgMerchandising supp500:w-[80vw] supp1100:w-[97%] supp1740:w-[90%]  w-[97%]  transition-all duration-200 ease ease-linear' src={allMannequin} alt="Représenation de huight personnes." />
        </div>
    </div>
</div>

  )
}
