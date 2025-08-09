import React from 'react'
import ImgParaDefilement from './ImgParaDefilement'


export default function ParaDefilementBar() {
  return (
    <div className='supp480:w-[800px] supp768:w-[1000px] supp1024:w-[1200px] supp1600:w-[1400px] w-[600px] h-full flex flex-row items-center justify-around'>
        <ImgParaDefilement  texte={"Vibeco"} />
        <ImgParaDefilement  texte={"Urbane"} />
        <ImgParaDefilement  texte={"Stylix"} />
        <ImgParaDefilement  texte={"Modish"} />
        <ImgParaDefilement  texte={"Trendz"} />
        <ImgParaDefilement  texte={"Chique"}/>
    </div>
  )
}
