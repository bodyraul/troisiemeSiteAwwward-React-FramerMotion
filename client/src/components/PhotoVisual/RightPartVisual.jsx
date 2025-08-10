import React from 'react'
import UseLoadRightVisual from '../../customHoocks/photoVisualHoocks/UseLoadRightVisual'
import allMannequin from"../../assets/img/allMannequin.jpg"

export default function RightPartVisual() {

    const {paraPhotoVisual,imgRotate}= UseLoadRightVisual();

  return (
    <div style={{transition:`transform 0.5s 0.4s ease-out,opacity 0.2s 0.4s ease-out`,boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} ref={paraPhotoVisual} className='supp1024:w-[49%] supp1024:mb-[0px] supp1024:h-full supp1024:p-0  translate-y-[10%] opacity-0 h-auto w-full bg-blanc rounded-[50px] relative flex flex-row items-center justify-center perspective-[1500px] p-[20px]'>
        <img ref={imgRotate} className='bigImgMerchandising supp500:w-[80vw] supp1600:w-[90%]  w-[97%]  transition-all duration-300 ease-linear' src={allMannequin} alt="Représenation de huight personnes." />
    </div>
  )
}
