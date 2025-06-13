import React from 'react'

export default function ParaResponsiveMerchandising({srcUn,textUn,textDeux,textTrois}) {
  
    return(
        <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px] mb-[50px]'>
            <h1 className='supp610:text-[50px] supp610:leading-[45px]  block w-[90%] mt-20 font-[Montreal-Medium] text-[35px] leading-[35px]'> {textUn} </h1>
            <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'> {textDeux} <br></br> {textTrois} </p>
            <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-[90%] mb-[90px] rounded-[30px]' src={srcUn} alt="" />
        </div>
    )
  
}
