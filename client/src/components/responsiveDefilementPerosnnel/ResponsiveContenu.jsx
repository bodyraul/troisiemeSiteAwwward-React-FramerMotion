import React from 'react'
import virgule from '../../assets/img/virgule.png'

export default function ResponsiveContenu() {
  return (
    <div className='supp480:h-[250px] supp768:h-[290px] supp1024:h-[350px] flex flex-col items-start justify-evenly py-0 px-[30px] w-[90%] h-[160px] bg-cardUn border border-borderGris border-solid rounded-[50px]'>
        <img className='supp480:w-[60px] supp480:translate-x-[-9px] supp768:w-[80px] supp768:translate-x-[-15px] supp1024:w-[100px] supp1024:translate-x-[-17px] sup w-[40px] transform translate-x-[-7px]' src={virgule}alt="" />
        <p className='supp480:text-[16px] supp768:text-[20px] supp1024:text-[24px] text-[12px] font-[Montreal-Bold] text-blanc'>A work(like)saving app. We saved 40% of our time merchandising every month. </p>
    </div>
  )
}
