import React from 'react'
import marqueUne from '../assets/img/marqueUne.png'
import marqueDeux from '../assets/img/marqueDeux.png'
import marqueTrois from '../assets/img/marqueTrois.png'
import marqueQuatre from '../assets/img/marqueQuatre.png'
import marqueCinq from '../assets/img/marqueCinq.png'
import marqueSix from '../assets/img/marqueSix.png'



export default function ParaDefilementBar() {
  return (
    <p className='supp1100:w-[1500px] w-[1111px] h-full flex flex-row items-center justify-around'>
        <img className='h-[150%] mb-[10px]' src={marqueUne} alt="représentation d'un mot avec écrit APLACE. " />
        <img className='h-[150%] mb-[10px]' src={marqueDeux} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
        <img className='h-[150%] mb-[15px]' src={marqueTrois} alt="représentation d'un mot avec écrit CHIMI." />
        <img className='h-[150%] mb-[15px]' src={marqueQuatre} alt="représentation d'un mot avec écrit SANDVIST." />
        <img className='h-[150%] mb-[15px]' src={marqueCinq} alt="représentation d'un mot avec écrit HOPE." />
        <img className='h-[170%] mb-[17px]' src={marqueSix} alt="représentation d'un mot avec écrit KOTN." />
    </p>
  )
}
