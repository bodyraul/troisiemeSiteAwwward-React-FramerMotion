import React from 'react'
import imgStronger from '../../assets/img/partner.jpg'
import femmeUne from '../../assets/img/femme-Une.jpg'


export default function ResponsiveImg() {
  return (
    <div className='supp480:my-[40px] supp768:my-[50px] supp1024:my-[70px] supp480:flex supp480:flex-row supp480:items-center supp480:justify-between my-[30px] w-[90%] flex flex-col items-center justify-center'>
        <div className='supp480:mb-[40px] supp480:w-[45%] supp768:mb-[50px] supp1024:mb-[70px] w-full rounded-[50px] relative mb-[30px]'>
            <img className='rounded-[50px] w-full' src={femmeUne} alt="" />
            <div className='absolute bg-blanc h-full w-full rounded-[50px] top-0 flex flex-row items-center justify-center'> 
                <img className='w-4/5' src={imgStronger} alt="" />
            </div>
        </div>
            <img className='supp480:w-[45%] supp480:translate-y-[-20px] supp768:translate-y-[-26px] supp1024:translate-y-[-35px] supp768: w-full rounded-[50px] relative' src={femmeUne} alt="femme créé par intelligence artificielle" />
    </div>
  )
}
