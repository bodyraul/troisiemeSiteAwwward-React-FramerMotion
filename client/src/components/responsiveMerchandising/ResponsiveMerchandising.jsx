import React from 'react'
import ParaResponsiveMerchandising from '../../componentsReutilisable/ResponsiveMerchandising/ParaResponsiveMerchandising'
import useSetColor from '../../customHoocks/useSetColor'
import UseResMerchanOnScroll from '../../customHoocks/responsiveMerchandisingHoocks/UseResMerchanOnScroll'

export default function ResponsiveMerchandising({setcolor}) {

  const {target,scrollYProgress}= UseResMerchanOnScroll();

  useSetColor(scrollYProgress,setcolor,0.17,"#181818",0.19,"#5F5F5F",0.2,"#bfbfbf",0.21,"#f3f3f3");

  return(
        <div ref={target}  className='supp768:mt-[150px] supp1024:mt-[250px] h-auto w-full flex flex-col items-center justify-start '>
          <ParaResponsiveMerchandising nb={0} ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising nb={1} ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising nb={2} ></ParaResponsiveMerchandising>
          <ParaResponsiveMerchandising nb={3} ></ParaResponsiveMerchandising>
        </div>
      )
}
