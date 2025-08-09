import React from 'react'
import enterBtnOrange from '../../fonction/photoVisualFonction/EnterBtnOrange'
import leaveBtnOrange from '../../fonction/photoVisualFonction/LeaveBtnOrange'

export default function BtnVisual({refe,TextUn,TextDeux}) {
  return (
    <div ref={refe}  onMouseEnter={()=>enterBtnOrange(TextUn,TextDeux)} onMouseLeave={()=>leaveBtnOrange(TextUn,TextDeux)} className='supp480:h-[45px] supp480:text-[15px] supp480:w-[130px] supp768::h-[50px] supp768:w-[140px] supp768:text-[17px] supp1024:w-[150px] supp1024:h-[60px] supp1024:text-[20px] supp1024:rounded-[15px] supp1600:text-[24px]  supp1600:w-[180px] supp1600:h-[70px] supp1600:rounded-[18px]  translate-y-[50%] transition-transform duration-500 ease-out text-orangeCustom border border-solid border-red-500 w-[100px] h-[40px] ml-[46px] font-[Montreal-Medium] text-[12px] rounded-[10px] flex flex-row items-center justify-center hover:cursor-pointer'>
        <div className='w-full h-1/2 relative overflow-hidden'>
        <p ref={TextDeux} className='visibleSpan'>Here for more</p>
        <p ref={TextUn} className='invisibleSpan'>Click-me</p>
        </div>
    </div>
  )
}
