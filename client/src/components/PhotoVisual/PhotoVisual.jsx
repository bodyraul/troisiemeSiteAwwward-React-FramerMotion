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
    <div className='blocPhotoVisual'>
        <div className='photoPlusVisual'>
            <div ref={paraVisual} className='blocVisual'>
              <p ref={paraUn} className='blocVisualP1'>
                 <img src={imgDollard} alt="Représentation du symbole dollars." />
                 <span>Made for shopify</span>
              </p>
              <p ref={paraDeux} className='blocVisualP2'>
                  <span>Visual</span><br></br>
                  <span>Merchandising</span><br></br>
                  <span>for Brands</span>
              </p>
              <p ref={paraTrois} className='blocVisualP3'>
                  <span>Tailored to Fashion Brands</span><br></br>
                  <span>One-Click Setups</span>
              </p>
              <div ref={paraBtn}  onMouseEnter={enterBtnOrange} onMouseLeave={leaveBtnOrange} className='btnOrange'>
                  <div className='pBtnorange'>
                    <p ref={textVisibleBtnOrange} className='visibleSpan'>10-Day Free Trial</p>
                    <p ref={textInvisibleBtnOrange} className='invisibleSpan'>Start for free</p>
                  </div>
              </div>
            </div>
            <div ref={paraPhotoVisual} className='blocPhotoDeVisual'>
              {matches && ( <img ref={imgRotate}  className='bigphoto' src={bigPhotoDeux} alt="Représenation de huight personnes." />)}
              {!matches && ( <img ref={imgRotate} onMouseMove={imgMoove} onMouseLeave={imgPositionBase} className='bigphoto' src={bigPhoto} alt="Représenation de huight personnes." />)}
              <img ref={imgRotateDeux} style={matches ? {opacity:0} : {opacity:1}} src={imgSolo} id='imgSolo'  alt="" />
            </div>
        </div>
    </div>
  )
}
