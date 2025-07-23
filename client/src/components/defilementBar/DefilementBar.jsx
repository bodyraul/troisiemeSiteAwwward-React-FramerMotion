import React from 'react'
import ParaDefilementBar from '../../componentsReutilisable/ParaDefilementBar';
import UseInitialiseBar from '../../customHoocks/defilementBarHoocks/UseInitialiseBar';


export default function DefilementBar() {

  const {refBar,bar} = UseInitialiseBar();

  return (
    <div ref={bar} className=' supp1740:h-[10vh] translate-y-1/2 transition-transform duration-[400] delay-700 ease-out w-full h-[150px] flex flex-row items-center justify-center'>
        <div className='supp1100:h-4/5 supp1100:w-4/5 supp1740:w-[70%] w-[90%] max-w-[1800px] h-[120px] bg-noir rounded-[30px] relative overflow-hidden'>
          <div ref={refBar} className=' animAllBar supp1100:w-[4500px]  h-full w-[3300px] absolute left-0  flex flex-row items-center justify-center '>
             <ParaDefilementBar></ParaDefilementBar>
             <ParaDefilementBar></ParaDefilementBar>
             <ParaDefilementBar></ParaDefilementBar>
          </div>
        </div>
    </div>
  )
}
