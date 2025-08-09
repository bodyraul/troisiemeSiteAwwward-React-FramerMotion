import React from 'react'
import imgStronger from '../../assets/img/stronger.png'
import femmeUne from '../../assets/img/femme-Une.jpg'


export default function ResponsiveImg() {
  return (
    <div className='supp480:my-[30px] supp768:my-[40px] supp480:flex supp480:flex-row supp480:items-center supp480:justify-between mt-[20px] w-[90%] flex flex-col items-center justify-center'>
        <div className='supp480:w-[45%] supp480:mb-0 w-full rounded-[50px] relative mb-[20px]'>
            <img className='rounded-[50px] w-full' src={femmeUne} alt="" />
            <div className='absolute bg-blanc h-full w-full rounded-[50px] top-0 flex flex-row items-center justify-center'> 
                <img className='w-4/5' src={imgStronger} alt="" />
            </div>
        </div>
        <img className='supp480:w-[45%] w-full rounded-[50px] relative' src={femmeUne} alt="femme créé par intelligence artificielle" />
    </div>
  )
}
