import React from 'react'
import { useRef } from 'react'
import pointImg from '../../assets/img/carrerOrange.svg'
import triangleImg from '../../assets/img/triangleHautBas.svg'
import statImg from '../../assets/img/troisBarres.svg'
import { useScroll,useMotionValueEvent } from "framer-motion"
import imgUne from '../../assets/img/mainImage.png'
import imgdeux from '../../assets/img/homepage.jpeg'
import imgTrois from '../../assets/img/homepage2.jpeg'
import imgQuatre from '../../assets/img/stats.png'


export default function ResponsiveMerchandising({setcolor}) {

const target = useRef();
  const {scrollYProgress} = useScroll({
    target:target,
    offset:["0 1","1 1"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if(latest<0.17 ){

      setcolor("#181818");
    }
    if(latest>=0.17 && latest<= 0.19){
   
      setcolor("#5F5F5F");
    }
    if(latest>=0.2 && latest<= 0.21){

      setcolor("#BFBFBF");
    }
    if(latest>0.21){
  
      setcolor("#F3F3F3");
    }
  })

  return(
        <div ref={target}  className='h-auto w-full flex flex-col items-center justify-start'>
          <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
              <h1 className='supp610:text-[50px] supp610:leading-[45px]  block w-[90%] mt-20 font-[Montreal-Medium] text-[35px] leading-[35px]'> The App for Fashion Merchandising</h1>
              <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'>Simple for you to manage.<br></br>Easier to discover</p>
              <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-[90%] mb-[90px] rounded-[30px]' src={imgUne} alt="" />
          </div>
          <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 mt-[50px] flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
            <div className='w-[90%]'>
              <img className='supp610:w-[60px] w-[40px] mt-20' src={pointImg} alt="" />
              <h1 className='supp610:text-[50px] supp610:leading-[45px] block w-[90%] font-[Montreal-Medium] text-[35px] leading-[35px] mt-[30px]'>Manual curation at its finest</h1>
              <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'>Curating products does not have to feel like doing your taxes. View stock status tags and preview your storefront on mobile & desktop.</p>
              <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-full rounded-[30px] mb-20' src={imgdeux} alt="" />
            </div>
          </div>
          <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 mt-[50px] flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
            <div className='w-[90%]'>
              <img className='supp610:w-[60px] w-[40px] mt-20' src={triangleImg} alt="" />
              <h1 className='supp610:text-[50px] supp610:leading-[45px] block w-[90%] font-[Montreal-Medium] text-[35px] leading-[35px] mt-[30px]'>Manual curation at its finest</h1>
              <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'>Curating products does not have to feel like doing your taxes. View stock status tags and preview your storefront on mobile & desktop.</p>
              <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-full rounded-[30px] mb-20' src={imgTrois} alt="" />
            </div>
          </div>
          <div style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='supp1100:w-4/5 mt-[50px] flex flex-col items-center justify-center w-[90%] bg-blanc rounded-[40px]'>
            <div className='w-[90%]'>
              <img className='supp610:w-[60px] w-[40px] mt-20' src={statImg} alt="" />
              <h1 className='supp610:text-[50px] supp610:leading-[45px] block w-[90%] font-[Montreal-Medium] text-[35px] leading-[35px] mt-[30px]'>Auto-generated merchandising analytics</h1>
              <p className='supp610:text-xl w-[90%] mt-5 mb-[30px] text-grisClair font-[Montreal-Bold] text-[15px]'>The easiest for brands to be data-driven by tracking sales and stock data for products and collections.</p>
              <img style={{boxShadow:`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`}} className='w-full rounded-[30px] mb-20' src={imgQuatre} alt="" />
            </div>
          </div>
        </div>
      )
}
