import React from 'react'
import LeftPartVisual from './LeftPartVisual'
import RightPartVisual from './RightPartVisual'

export default function PhotoVisual() {
  
  return (
    <div className='supp480:h-[900px] supp480:w-[460px] supp768:w-[600px] supp768:h-[1050px] supp1024:w-full supp1024:h-[800px]  supp1024:mb-[20px] supp1600:h-[80vh] supp1600:mt-0 supp1600:mb-0 h-[600px] mb-[16px] w-[250px] flex flex-row items-center justify-center'>
      <div className='supp1024:w-[80%] supp1024:flex-row   h-full w-[90%] max-w-[1800px] flex flex-col items-center justify-between '>
          <LeftPartVisual/>
          <RightPartVisual/>
      </div>
    </div>
  )
}
