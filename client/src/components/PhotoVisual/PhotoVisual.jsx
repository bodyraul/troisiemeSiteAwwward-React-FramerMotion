import React from 'react'
import '../PhotoVisual/PhotoVisual.css'
import imgDollard from "../../assets/img/dollars.svg"
import bigPhoto from"../../assets/img/homepageTransformed.png"
import bigPhotoDeux from"../../assets/img/homepage.jpeg"
import imgSolo from "../../assets/img/menSolo.jpg" 
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function PhotoVisual() {

  const textInvisibleBtnOrange = useRef();
  const textVisibleBtnOrange = useRef();
  const imgRotate = useRef();
  const imgRotateDeux = useRef();
  const paraVisual = useRef();
  const paraPhotoVisual = useRef();
  const paraUn = useRef();
  const paraDeux = useRef();
  const paraTrois = useRef();
  const paraBtn = useRef();
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1100px)").matches
  )

  const enterBtnOrange =()=>{
    textInvisibleBtnOrange.current.classList.add('upSpan');
    textVisibleBtnOrange.current.classList.add('upSpan');
  }

  const leaveBtnOrange=()=>{
    textInvisibleBtnOrange.current.classList.remove('upSpan');
    textVisibleBtnOrange.current.classList.remove('upSpan');
  }

  const imgMoove = (e)=>{
    const left = imgRotate.current.getBoundingClientRect().left;
    const right = imgRotate.current.getBoundingClientRect().right;
    const top = imgRotate.current.getBoundingClientRect().top;
    const bottom = imgRotate.current.getBoundingClientRect().bottom;
    const middleX = ((left+right)/2);
    const middleY = ((top+bottom)/2);
    const sourisX = e.clientX;
    const sourisY = e.clientY;

    if(sourisY<=middleY){
      if(sourisX<=middleX){
        const newX = sourisX-left;
        const newMidlleX = middleX-left;
        const rotateX = (-1*(20-(newX*20)/newMidlleX));
        const newY = sourisY - top;
        const newMidlleY = middleY-top;
        const rotateY = 10-((newY*10)/newMidlleY);
        imgRotate.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        imgRotateDeux.current.style.transform = `scale(2) translateX(45.5%) translateY(-44%) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
      }
      if(sourisX>middleX){
        const newX = sourisX-right;
        const newMidlleX = middleX-right;
        const rotateX = (20-(newX*20)/newMidlleX);
        const newY = sourisY - top;
        const newMidlleY = middleY-top;
        const rotateY = 10-((newY*10)/newMidlleY);
        imgRotate.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        imgRotateDeux.current.style.transform = `scale(2) translateX(45.5%) translateY(-44%) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
      }
    }

    if(sourisY>middleY){
      if(sourisX<=middleX){
        const newX = sourisX-right;
        const newMidlleX = middleX-right;
        const rotateX = (20-(newX*20)/newMidlleX);
        const newY = sourisY - top;
        const newMidlleY = middleY-top;
        const rotateY = 10-((newY*10)/newMidlleY);
        imgRotate.current.style.transform = ` rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        imgRotateDeux.current.style.transform = `scale(2) translateX(45.5%) translateY(-44%) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
      }
      if(sourisX>middleX){
        const newX = sourisX-right;
        const newMidlleX = middleX-right;
        const rotateX = (20-(newX*20)/newMidlleX);
        const newY = sourisY - top;
        const newMidlleY = middleY-top;
        const rotateY = 10-((newY*10)/newMidlleY);
        imgRotate.current.style.transform = `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
        imgRotateDeux.current.style.transform = `scale(2) translateX(45.5%) translateY(-44%) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
      }
    }
  }

  const imgPositionBase = ()=>{
    imgRotate.current.style.transform = `rotateX(6deg) rotateY(-16deg)`;
    imgRotateDeux.current.style.transform = `scale(2) translateX(45.5%) translateY(-44%) rotateX(6deg) rotateY(-16deg) `;
}

useEffect(() => {
  paraVisual.current.style.transform = "translateY(0%)";
  paraVisual.current.style.opacity = "1";
  paraPhotoVisual.current.style.transform = "translateY(0%)";
  paraPhotoVisual.current.style.opacity = "1";
  paraUn.current.style.transform = "translateY(0%)";
  paraDeux.current.style.transform = "translateY(0%)";
  paraTrois.current.style.transform = "translateY(0%)";
  paraBtn.current.style.transform = "translateY(0%)";

  function eventResponsive(e){
    setMatches( e.matches );
  }

  window.matchMedia("(max-width: 1100px)").addEventListener('change', eventResponsive);

    return () => {
      window.matchMedia("(max-width: 1100px)").removeEventListener('change', eventResponsive);      
    }
}, [])


  return (
    <div className='supp1100:h-[800px] supp1740:h-[90vh]  h-auto mb-0 w-full flex flex-row items-center justify-center'>
    <div className='supp1100:w-[80%] supp1100:flex-row  supp1740:w-[70%] h-full w-[90%] max-w-[1800px] flex flex-col items-center justify-between'>
        <div style={{transition:`transform 0.5s ease-out,opacity 0.2s ease-out`,boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} ref={paraVisual} className='supp1100:mb-0 supp1100:h-full supp1100:w-[49%] translate-y-[10%] opacity-0 h-[600px] w-[100%] bg-blanc rounded-[50px] flex flex-col items-start justify-center mb-4'>
          <p ref={paraUn} className='translate-y-[40%] transition-transform duration-500 ease-out my-0 mx-12 w-[170px] flex flex-row items-center justify-around p-[10px] font-[Montreal-Regular] text-base'>
             <img src={imgDollard} alt="Représentation du symbole dollars."/>
             <span>Made for shopify</span>
          </p>
          <p ref={paraDeux} className='supp500:text-[45px] supp500:leading-[50px] supp680:text-[75px] supp680:leading-[75px] supp1100:text-[45px] supp1100:leading-[50px] supp1250:text-[60px] supp1250:leading-[65px] supp1740:text-[75px] supp1740:leading-[75px] translate-y-[15%] transition-transform duration-500 ease-out m-12 font-[Montreal-Bold] text-[33px] leading-[30px] tracking-[3px]'>
              <span>Visual</span><br></br>
              <span>Merchandising</span><br></br>
              <span>for Brands</span>
          </p>
          <p ref={paraTrois} className='supp500:text-xl translate-y-full transition-transform duration-500 ease-out mt-0 mx-12 mb-12 text-grisTexte font-[Montreal-Medium] font-bold tracking-[1px] text-base'>
              <span className='supp500:leading-[25px] leading-[20px]'>Tailored to Fashion Brands</span><br></br>
              <span className='supp500:leading-[25px] leading-[20px]'>One-Click Setups</span>
          </p>
          <div ref={paraBtn}  onMouseEnter={enterBtnOrange} onMouseLeave={leaveBtnOrange} className='supp680:h-[100px] supp680:rounded-[30px] translate-y-[50%] transition-transform duration-500 ease-out text-orangeCustom border border-solid border-red-500 w-[150px] h-[60px] ml-12 font-[Montreal-Medium] text-base rounded-[15px] flex flex-row items-center justify-center hover:cursor-pointer'>
              <div className='w-full h-1/2 relative overflow-hidden'>
                <p ref={textVisibleBtnOrange} className='visibleSpan'>10-Day Free Trial</p>
                <p ref={textInvisibleBtnOrange} className='invisibleSpan'>Start for free</p>
              </div>
          </div>
        </div>
        <div style={{transition:`transform 0.5s 0.4s ease-out,opacity 0.2s 0.4s ease-out`,boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} ref={paraPhotoVisual} className='supp1100:w-[49%] supp1100:h-full supp1100:p-0 supp1100:mb-0 translate-y-[10%] opacity-0 h-auto w-full bg-blanc rounded-[50px] relative flex flex-row items-center justify-center perspective-[1500px] p-5 mb-4'>
          {matches && ( <img ref={imgRotate}   className='supp500:w-[80vw] supp1100:w-[97%] supp1740:w-[90%] supp1740:rotate-x-[6deg] supp1740:rotate-y-[-16deg] w-[97%] rotate-x-[0deg] rotate-y-[0deg] transition-all duration-200 ease-linear ' src={bigPhotoDeux} alt="Représenation de huight personnes." />)}
          {!matches && ( <img ref={imgRotate} onMouseMove={imgMoove} onMouseLeave={imgPositionBase}  className='supp500:w-[80vw] supp1100:w-[97%] supp1740:w-[90%] supp1740:rotate-x-[6deg] supp1740:rotate-y-[-16deg] w-[97%] rotate-x-[0deg] rotate-y-[0deg] transition-all duration-200 ease ease-linear' src={bigPhoto} alt="Représenation de huight personnes." />)}
          <img ref={imgRotateDeux} style={matches ? {opacity:0} : {opacity:1}} src={imgSolo} className='supp1100:w-[12%] supp1100:scale-[2] supp1100:rotate-x-[6deg] supp1100:rotate-y-[-16deg] absolute w-[10%] scale-[0] translate-x-[45.5%] translate-y-[-44%] rotate-x-[0deg] rotate-y-[0deg] transition-all duration-200 ease-linear'  alt="" />
        </div>
    </div>
</div>

  )
}
