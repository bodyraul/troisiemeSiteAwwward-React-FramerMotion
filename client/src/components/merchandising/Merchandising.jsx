import React from 'react'
import useSetColor from '../../customHoocks/useSetColor'
import UseAnimMerchandisingOnScroll from '../../customHoocks/merchandisingHoocks/UseAnimMerchandisingOnScroll'
import LeftPartMerch from './LeftPartMerch'
import RightPartMerch from './RightPartMerch'

export default function Merchandising({setcolor}) {
  
  const tabAnim=UseAnimMerchandisingOnScroll();

  useSetColor(tabAnim.scrollYProgress,setcolor,0.17,"#181818",0.19,"#5F5F5F",0.2,"#bfbfbf",0.21,"#f3f3f3");

  return (
    <div ref={tabAnim.ref}  className='h-[300vh] w-full flex flex-col items-center justify-start '>
      <div className='sticky top-0 h-screen w-[80%] max-w-[1800px]'>
          <div className="h-[145px] w-full">
          </div>
          <div  className="h-[calc(100%-145px)] flex flex-row items-start justify-between">
            <LeftPartMerch tabAnim={tabAnim} />
            <RightPartMerch tabAnim={tabAnim} />
          </div>
      </div>
      <div  className='absolute h-[200vh] w-5 top-[100vh]'>

      </div>
  </div>
  )
  
}
