import React from 'react'

export default function ParaResponsiveMerchandising({bolean,srcUn,textUn,textDeux,textTrois,srcDeux}) {
  if(bolean){
    return(
        <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
            <h1 className='supp610:text-[50px] supp610:leading-[45px]  block w-[90%] mt-20 font-[Montreal-Medium] text-[35px] leading-[35px]'> {textUn} </h1>
            <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'> {textDeux} <br></br> {textTrois} </p>
            <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-[90%] mb-[90px] rounded-[30px]' src={srcUn} alt="" />
        </div>
    )
  }
  if(!bolean){
    return(
        <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 mt-[50px] flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
            <div className='w-[90%]'>
            <img className='supp610:w-[60px] w-[40px] mt-20' src={srcUn} alt="" />
            <h1 className='supp610:text-[50px] supp610:leading-[45px] block w-[90%] font-[Montreal-Medium] text-[35px] leading-[35px] mt-[30px]'> {textUn} </h1>
            <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'> {textDeux} </p>
            <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-full rounded-[30px] mb-20' src={srcDeux} alt="" />
            </div>
        </div>
    )
  }
}
