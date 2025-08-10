import React from 'react'
import useSetColor from '../../customHoocks/useSetColor'
import UseResDefPersoOnScroll from '../../customHoocks/responsiveDefilementPersonnel/UseResDefPersoOnScroll'
import ResponsiveImg from './ResponsiveImg'
import ResponsiveNameStatus from './ResponsiveNameStatus'
import ResponsiveContenu from './ResponsiveContenu'

export default function ResponsiveDefilementPerosnnel({setcolor}) {

    const {ref,scrollYProgress} = UseResDefPersoOnScroll();

    useSetColor(scrollYProgress,setcolor,0.10,"#f3f3f3",0.13,"#bfbfbf",0.16,"#5f5f5f",0.19,"#181818");  

  return (
    <div ref={ref} className='supp480:mt-[110px] supp768:mt-[150px] supp1024:mt-[160px] flex flex-col justify-center items-center mt- w-screen  mt-[60px] '>
        <div className='supp480:w-[450px] supp768:w-[650px] supp1024:w-[900px] flex flex-col items-center justify-center w-[250px]'>
            <ResponsiveContenu/>
            <ResponsiveNameStatus/> 
            <ResponsiveImg/> 
        </div>
     </div>
  )
}

