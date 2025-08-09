import React from 'react'
import UseAnimDefilementPersoOnScroll from '../../customHoocks/defilementPersonnelHoocks/UseAnimDefilementPersoOnScroll'
import ParaDefilementPersonnel from '../../componentsReutilisable/defilementPersoComponentsReutilisable/ParaDefilementPersonnel'
import useSetColor from '../../customHoocks/useSetColor'


export default function DefilementPersonnel({setcolor}) {
    
    const tabAnimDefilementPerso = UseAnimDefilementPersoOnScroll();

    useSetColor(tabAnimDefilementPerso.scrollYProgress,setcolor,0.10,"#f3f3f3",0.13,"#bfbfbf",0.16,"#5f5f5f",0.19,"#181818");  

    return(
        <div ref={tabAnimDefilementPerso.ref}  className='h-[5000px] w-screen relative'>
           <div className='sticky top-0 h-screen w-full'>
                <ParaDefilementPersonnel motionBol={true} tab={tabAnimDefilementPerso} nombre={0}></ParaDefilementPersonnel>
                <ParaDefilementPersonnel motionBol={false} tab={tabAnimDefilementPerso} nombre={1}></ParaDefilementPersonnel>
                <ParaDefilementPersonnel motionBol={false} tab={tabAnimDefilementPerso} nombre={2}></ParaDefilementPersonnel>
           </div>
       </div>
       )
}