import React from 'react'
import aplace from '../assets/img/aplace.png'
import stuternhim from '../assets/img/stuternheim.png'
import chimie from '../assets/img/chimie.png'
import sandqvist from '../assets/img/sand.png'
import hope from '../assets/img/hopeWhite.png'
import kotn from '../assets/img/kotnWhite.png'



export default function ParaDefilementBar() {
  return (
    <p className='supp1100:w-[1500px] w-[1111px] h-full flex flex-row items-center justify-around'>
        <img className='w-[120px] h-[100px]' src={aplace} alt="représentation d'un mot avec écrit APLACE. " />
        <img className='w-[150px] h-[25px]' src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
        <img className='w-[80px] h-[15px]' src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
        <img className='w-[150px] h-[40px]' src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
        <img className='w-[90px] h-[30px]' src={hope} alt="représentation d'un mot avec écrit HOPE." />
        <img className='w-[60px] h-[30px]' src={kotn} alt="représentation d'un mot avec écrit KOTN." />
    </p>
  )
}
