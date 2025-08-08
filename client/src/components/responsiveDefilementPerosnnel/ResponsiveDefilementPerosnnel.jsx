import React from 'react'
import imgStronger from '../../assets/img/stronger.png'
import femmeUne from '../../assets/img/femme-Une.jpg'
import virgule from '../../assets/img/virgule.png'
import useSetColor from '../../customHoocks/useSetColor'
import UseResDefPersoOnScroll from '../../customHoocks/responsiveDefilementPersonnel/UseResDefPersoOnScroll'

export default function ResponsiveDefilementPerosnnel({setcolor}) {

    const {ref,scrollYProgress} = UseResDefPersoOnScroll();

    useSetColor(scrollYProgress,setcolor,0.10,"#f3f3f3",0.13,"#bfbfbf",0.16,"#5f5f5f",0.19,"#181818");  

  return (
    <div ref={ref} className='supp480:mt-[150px] supp1024:mt-[250px] flex flex-col justify-center items-center mt-[50px] w-screen'>
        <div className='supp480:w-[450px] supp768:w-[650px] supp1024:w-[900px] flex flex-col items-center justify-center w-[250px]'>
        <div className='supp480:h-[250px] supp768:h-[290px] supp1024:h-[350px] flex flex-col items-start justify-evenly py-0 px-[30px] w-[90%] h-[160px] bg-cardUn border border-borderGris border-solid rounded-[50px]'>
            <img className='supp480:w-[60px] supp480:translate-x-[-9px] supp768:w-[80px] supp768:translate-x-[-15px] supp1024:w-[100px] supp1024:translate-x-[-17px] sup w-[40px] transform translate-x-[-7px]' src={virgule}alt="" />
            <p className='supp480:text-[16px] supp768:text-[20px] supp1024:text-[24px] text-[12px] font-[Montreal-Bold] text-blanc'>A work(like)saving app. We saved 40% of our time merchandising every month. </p>
        </div>
        <div className='supp480:h-[160px] supp480:mt-[30px] supp768:h-[190px] supp768:mt-[40px] supp1024:h-[240px]  mt-[20px] flex flex-col items-start justify-center py-0 px-[30px] w-[90%] h-[110px] bg-cardUn border border-borderGris border-solid rounded-[50px]'>
            <span className='supp480:text-[25px] supp768:text-[32px] supp1024:text-[40px]  text-[20px] font-[Montreal-Bold] text-blanc'>Hanny Eldblom</span><br></br>
            <span className='supp480:text-[16px] supp768:text-[20px] supp1024:text-[24px]  text-[12px] font-[Montreal-Bold] text-blanc'>Head of Ecommerce</span>
        </div>  
        <div className='supp480:my-[30px] supp768:my-[40px] supp480:flex supp480:flex-row supp480:items-center supp480:justify-between mt-[20px] w-[90%] flex flex-col items-center justify-center'>
            <div className='supp480:w-[45%] supp480:mb-0 w-full rounded-[50px] relative mb-[20px]'>
                <img className='rounded-[50px] w-full' src={femmeUne} alt="" />
                <div className='absolute bg-blanc h-full w-full rounded-[50px] top-0 flex flex-row items-center justify-center'> 
                    <img className='w-4/5' src={imgStronger} alt="" />
                </div>
            </div>
            <img className='supp480:w-[45%] w-full rounded-[50px] relative' src={femmeUne} alt="femme créé par intelligence artificielle" />
        </div>  
        </div>
     </div>
  )
}

