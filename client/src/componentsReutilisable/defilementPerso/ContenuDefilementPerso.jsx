import React from 'react'


export default function ContenuDefilementPerso({tabImg,tabText,nombre}) {
  return (
    <>
        <div className='w-full h-1/2 flex flex-col items-center justify-center'>
            <img className='supp1600:w-[120px] w-[100px]' src={tabImg.srcUn[nombre]} alt="représentation de deux symboles quotation." />
        </div>
        <div  className='supp1600:text-[30px] supp1600:leading-[23px] text-[24px] leading-[20px] w-full h-1/2 flex flex-col items-center justify-start text-blanc font-[Montreal-Bold] '>
            <span>{tabText.TexteUn[nombre]}</span><br></br>
            <span>{tabText.TexteDeux[nombre]}</span><br></br>
            <span>{tabText.TexteTrois[nombre]}</span><br></br>
            <span>{tabText.TexteQuatre[nombre]}</span>
        </div>
    </>
  )
}
