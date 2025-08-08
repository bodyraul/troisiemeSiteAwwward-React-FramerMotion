import React from 'react'
import ParaDefilementBar from '../../componentsReutilisable/ParaDefilementBar';
import UseInitialiseBar from '../../customHoocks/defilementBarHoocks/UseInitialiseBar';


export default function DefilementBar() {

  const {refBar,bar} = UseInitialiseBar();

  return (
    <div ref={bar} className=' supp480:w-[460px] supp480:h-[65px] supp768:w-[600px] supp768:h-[80px] supp1024:w-[100%] supp1024:h-[110px] supp1600:h-[10vh] translate-y-1/2 transition-transform duration-[400] delay-700 ease-out w-[250px] h-[50px] flex flex-row items-start justify-center mt-[10px] '>
        <div className='supp480:h-[65px] supp768:h-[80px] supp1024:h-[110px]  supp1024:w-4/5 supp1600:w-[70%] w-[90%] max-w-[1800px] h-[50px] bg-noir rounded-[30px] relative overflow-hidden'>
          <div ref={refBar} className=' animAllBar supp480:w-[2400px] supp768:w-[3000px] supp1024:w-[3600px] supp1600:w-[4200px] h-full w-[1800px] absolute left-0  flex flex-row items-center justify-center '>
             <ParaDefilementBar></ParaDefilementBar>
             <ParaDefilementBar></ParaDefilementBar>
             <ParaDefilementBar></ParaDefilementBar>
          </div>
        </div>
    </div>
  )
}
