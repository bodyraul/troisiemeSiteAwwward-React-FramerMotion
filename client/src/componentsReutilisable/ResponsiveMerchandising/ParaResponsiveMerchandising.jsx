import React from 'react'
import tabText from '../../tools/responsiveMerchandisingTools/TabTexts'
import tabImg from '../../tools/responsiveMerchandisingTools/TabImg'

export default function ParaResponsiveMerchandising({nb}) {
  
    return(
        <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp480:w-[400px] supp480:mb-[30px] supp768:w-[600px] supp768:mb-[40px] supp1024:w-[80%] supp1024:mb-[50px]  flex flex-col items-center justify-center w-[250px] bg-blanc rounded-[40px] mb-[20px] '>
            <h1 className='supp480:text-[28px] supp480:leading-[33px] supp768:text-[38px] supp768:leading-[45px] supp1024:text-[44px] supp1024:leading-[53px]  block w-[90%] mt-20 font-[Montreal-Medium] text-[18px] leading-[23px]'> {tabText.textUn[nb]} </h1>
            <p className='supp480:text-[16px] supp768:text-[20px] supp1024:text-[24px]  text-[13px] w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] '> {tabText.textDeux[nb]}  </p>
            <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1024:w-[800px] w-[90%] mb-[90px] rounded-[30px]' src={tabImg[nb]} alt="" />
        </div>
    )
  
}
