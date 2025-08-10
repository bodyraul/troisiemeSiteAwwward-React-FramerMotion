import React from 'react'
import UseLoadLeftVisual from '../../customHoocks/photoVisualHoocks/UseLoadLeftVisual'
import imgDollard from "../../assets/img/dollars.svg"
import BtnVisual from './BtnVisual';


export default function LeftPartVisual() {

    const {paraVisual,paraUn,paraDeux,paraTrois,paraBtn,textInvisibleBtnOrange,textVisibleBtnOrange}=UseLoadLeftVisual();

  return (
    <div style={{transition:`transform 0.5s ease-out,opacity 0.2s ease-out`,boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} ref={paraVisual} className='supp480:mb-[40px] supp768:mb-[50px] supp1024:mb-[0px] supp1024:h-full supp1024:w-[49%] translate-y-[10%] opacity-0 h-full w-[100%] bg-blanc rounded-[50px] flex flex-col items-start justify-center mb-[30px]'>
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
        <BtnVisual refe={paraBtn} TextUn={textInvisibleBtnOrange} TextDeux={textVisibleBtnOrange} ></BtnVisual>
    </div>
  )
}
