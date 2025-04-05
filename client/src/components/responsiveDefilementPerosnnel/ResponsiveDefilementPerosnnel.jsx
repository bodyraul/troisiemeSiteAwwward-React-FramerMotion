import React from 'react'
import imgStronger from '../../assets/img/stronger.png'
import imgAnnie from '../../assets/img/hanny.jpeg'
import imgElysa from '../../assets/img/elysa.jpeg'
import imgQuotation from '../../assets/img/quotation.png'
import { useRef } from 'react'
import {  useScroll} from "framer-motion"
import useSetColor from '../../customHoocks/useSetColor'

export default function ResponsiveDefilementPerosnnel({setcolor}) {

    const ref=useRef();
    
        const {scrollYProgress} = useScroll({
            target:ref,
            offset:["0 1","1 1"],
          })
    
        useSetColor(scrollYProgress,setcolor,0.10,"#f3f3f3",0.13,"#bfbfbf",0.16,"#5f5f5f",0.19,"#181818");  

  return (
    <div ref={ref} className='mt-[50px] w-screen'>
        <div className='flex flex-col items-center justify-center w-full'>
        <div className='supp546:h-[280px] supp721:h-[420px] flex flex-col items-start justify-evenly py-0 px-[50px] w-[90%] h-[250px] bg-cardUn border border-borderGris border-solid rounded-[50px]'>
            <img className='supp546:w-[80px] supp721:w-[100px] w-[60px]' src={imgQuotation}alt="" />
            <p className='supp546:text-[30px] supp721:text-[42px] text-[20px] font-[Montreal-Bold] text-blanc'>A work(like)saving app. We saved 40% of our time merchandising every month. </p>
        </div>
        <div className='supp546:h-[180px] supp721:h-[200px] mt-[50px] flex flex-col items-center justify-center py-0 px-[50px] w-[90%] h-[150px] bg-cardUn border border-borderGris border-solid rounded-[50px]'>
            <span className='supp721:text-[42px] supp546:text-3xl text-2xl font-[Montreal-Bold] text-blanc'>Hanny Eldblom</span><br></br><span className='supp721:text-xl supp546:text-[15px]  text-xs font-[Montreal-Bold] text-blanc'>Head of Ecommerce</span>
        </div>  
        <div className='supp546:flex supp546:flex-row supp546:items-center supp546:justify-between mt-[50px] w-[90%] flex flex-col items-center justify-center'>
            <div className='supp546:w-[45%] supp546:mb-0 w-full rounded-[50px] relative mb-[50px]'>
                <img className='rounded-[50px] w-full' src={imgElysa} alt="" />
                <div className='absolute bg-blanc h-full w-full rounded-[50px] top-0 flex flex-row items-center justify-center'> 
                    <img className='w-4/5' src={imgStronger} alt="" />
                </div>
            </div>
            <img className='supp546:w-[45%] w-full rounded-[50px] relative' src={imgAnnie} alt="" />
        </div>  
        </div>
     </div>
  )
}

