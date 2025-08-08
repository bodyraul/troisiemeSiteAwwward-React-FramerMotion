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
    <div className='supp480:h-[900px] supp480:w-[460px] supp768:w-[600px] supp768:h-[1050px] supp1024:w-full supp1024:h-[800px]  supp1024:mb-[20px] supp1600:h-[80vh] supp1600:mt-0 supp1600:mb-0 h-[600px] mb-[16px] w-[250px] flex flex-row items-center justify-center'>
    <div className='supp1024:w-[80%] supp1024:flex-row   h-full w-[90%] max-w-[1800px] flex flex-col items-center justify-between '>
        <div style={{transition:`transform 0.5s ease-out,opacity 0.2s ease-out`,boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} ref={paraVisual} className='supp1024:mb-0 supp1024:h-full supp1024:w-[49%] translate-y-[10%] opacity-0 h-full w-[100%] bg-blanc rounded-[50px] flex flex-col items-start justify-center mb-[16px]'>
          <p ref={paraUn} className='supp480:text-[18px] supp768:text-[23px] supp1024:text-[26px] supp1600:text-[30px] translate-y-[40%] transition-transform duration-500 ease-out my-0 mx-[48px]  flex flex-row items-center justify-around  font-[Montreal-Regular] text-[12px]'>
             <img className='supp480:w-[23px] supp768:w-[26px] supp1024:w-[29px] supp1600:w-[35px] w-[20px] ' src={imgDollard} alt="Représentation du symbole dollars."/>
             <span className='supp480:pl-[15px] pl-[10px]'>do your shop</span>
          </p>
          <p ref={paraDeux} className='supp480:my-[38px] supp480:text-[28px] supp480:leading-[29px] supp768:text-[42px] supp768:leading-[43px] supp768:my-[50px] supp1024:text-[55px] supp1024:leading-[56px] supp1024:my-[60px] supp1600:text-[75px] supp1600:leading-[75px] supp1600:my-[70px] translate-y-[15%] transition-transform duration-500 ease-out mx-[48px] my-[25px] font-[Montreal-Bold] text-[18px] leading-[19px] tracking-[1px]'>
              <span>Best of</span><br></br>
              <span>Collection</span><br></br>
              <span>for you</span>
          </p>
          <p ref={paraTrois} className='supp480:mb-[38px] supp480:text-[15px] supp768:text-[17px] supp768:mb-[45px] supp1024:text-[19px]  supp1024:mb-[60px] supp1600:text-[25px] supp1600:mb-[70px] translate-y-full transition-transform duration-500 ease-out mt-0 mx-12 mb-[25px] text-grisTexte font-[Montreal-Medium] font-bold tracking-[1px] text-[10px]'>
              <span >Perfect for fashion brands instantly.</span>
              <br></br>
              <span >One-Click Setups</span>
          </p>
          <div ref={paraBtn}  onMouseEnter={()=>enterBtnOrange(textInvisibleBtnOrange,textVisibleBtnOrange)} onMouseLeave={()=>leaveBtnOrange(textInvisibleBtnOrange,textVisibleBtnOrange)} className='supp480:h-[45px] supp480:text-[15px] supp480:w-[130px] supp768::h-[50px] supp768:w-[140px] supp768:text-[17px] supp1024:w-[150px] supp1024:h-[60px] supp1024:text-[20px] supp1024:rounded-[15px] supp1600:text-[24px]  supp1600:w-[180px] supp1600:h-[70px] supp1600:rounded-[18px]  translate-y-[50%] transition-transform duration-500 ease-out text-orangeCustom border border-solid border-red-500 w-[100px] h-[40px] ml-[46px] font-[Montreal-Medium] text-[12px] rounded-[10px] flex flex-row items-center justify-center hover:cursor-pointer'>
              <div className='w-full h-1/2 relative overflow-hidden'>
                <p ref={textVisibleBtnOrange} className='visibleSpan'>Here for more</p>
                <p ref={textInvisibleBtnOrange} className='invisibleSpan'>Click-me</p>
              </div>
          </div>
        </div>
        <div style={{transition:`transform 0.5s 0.4s ease-out,opacity 0.2s 0.4s ease-out`,boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} ref={paraPhotoVisual} className='supp1024:w-[49%] supp1024:h-full supp1024:p-0 supp1024:mb-0 translate-y-[10%] opacity-0 h-auto w-full bg-blanc rounded-[50px] relative flex flex-row items-center justify-center perspective-[1500px] p-[20px]'>
           <img ref={imgRotate} onMouseMove={(e)=>imgMoove(e,imgRotate)} onMouseLeave={()=>imgPositionBase(imgRotate)}  className='bigImgMerchandising supp500:w-[80vw] supp1600:w-[90%]  w-[97%]  transition-all duration-200 ease ease-linear' src={allMannequin} alt="Représenation de huight personnes." />
        </div>
    </div>
</div>

  )
}
