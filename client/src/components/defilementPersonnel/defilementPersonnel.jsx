import React from 'react'
import UseAnimDefilementPersoOnScroll from '../../customHoocks/defilementPersonnelHoocks/UseAnimDefilementPersoOnScroll'
import ParaDefilementPersonnel from '../../componentsReutilisable/defilementPerso/ParaDefilementPersonnel'
import useSetColor from '../../customHoocks/useSetColor'


export default function DefilementPersonnel({setcolor}) {
    
    const tabAnim = UseAnimDefilementPersoOnScroll();

    useSetColor(tabAnim.scrollYProgress,setcolor,0.10,"#f3f3f3",0.13,"#bfbfbf",0.16,"#5f5f5f",0.19,"#181818");  

    return(
        <div ref={tabAnim.ref}  className='h-[5000px] w-screen relative'>
           <div className='sticky top-0 h-screen w-full'>
                <ParaDefilementPersonnel tabAnim={tabAnim} nombre={0}></ParaDefilementPersonnel>
                <ParaDefilementPersonnel tabAnim={tabAnim} nombre={1}></ParaDefilementPersonnel>
                <ParaDefilementPersonnel tabAnim={tabAnim} nombre={2}></ParaDefilementPersonnel>
           </div>
       </div>
       )
}