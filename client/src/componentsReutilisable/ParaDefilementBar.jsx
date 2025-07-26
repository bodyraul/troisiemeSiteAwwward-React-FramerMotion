import React from 'react'
import marqueUne from '../assets/img/marqueUne.png'
import marqueDeux from '../assets/img/marqueDeux.png'
import marqueTrois from '../assets/img/marqueTrois.png'
import marqueQuatre from '../assets/img/marqueQuatre.png'
import marqueCinq from '../assets/img/marqueCinq.png'
import marqueSix from '../assets/img/marqueSix.png'
import ImgParaDefilement from './ImgParaDefilement'
import tabParaDefilementBar from '../tools/paraDefilementBarTools/TabParaDefilementBar'



export default function ParaDefilementBar() {
  return (
    <p className='supp1100:w-[1500px] w-[1111px] h-full flex flex-row items-center justify-around'>
        <ImgParaDefilement srcs={marqueUne} alts={tabParaDefilementBar[0]} />
        <ImgParaDefilement srcs={marqueDeux} alts={tabParaDefilementBar[1]} />
        <ImgParaDefilement srcs={marqueTrois} alts={tabParaDefilementBar[2]} />
        <ImgParaDefilement srcs={marqueQuatre} alts={tabParaDefilementBar[3]} />
        <ImgParaDefilement srcs={marqueCinq} alts={tabParaDefilementBar[4]} />
        <ImgParaDefilement srcs={marqueSix} alts={tabParaDefilementBar[5]} />
    </p>
  )
}
