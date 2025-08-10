import React from 'react'

export default function NameStatusDefielementPerso({tabText,nombre}) {
  return (
    <>
        <span className='supp1600:text-[48px] supp1600:leading-[30px] text-[40px] leading-[25px] text-blanc font-[Montreal-Bold] '>{tabText.texteCinq[nombre]}</span><br></br> 
        <span className='supp1600:text-[30px] text-[24px] text-blanc font-[Montreal-Bold] '>{tabText.texteSix[nombre]}</span>
    </>
  )
}
