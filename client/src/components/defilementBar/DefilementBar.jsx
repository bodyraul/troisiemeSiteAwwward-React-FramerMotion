import React from 'react'
import './defilementBar.css'
import aplace from '../../assets/img/aplace.png'
import stuternhim from '../../assets/img/stuternheim.png'
import chimie from '../../assets/img/chimie.png'
import sandqvist from '../../assets/img/sand.png'
import hope from '../../assets/img/hopeWhite.png'
import kotn from '../../assets/img/kotnWhite.png'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'


export default function DefilementBar() {

  const refBar = useRef();
  const bar = useRef();

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1100px)").matches
  )

  useEffect(() => {;
    bar.current.style.transform ="translateY(0%)";

    window
    .matchMedia("(max-width: 1100px)")
    .addEventListener('change', (e) =>{
      setMatches( e.matches );
      console.log("oui");
    } );
  }, [])

  return (
    <div ref={bar} className=' supp1740:h-10vh translate-y-1/2 transition-transform duration-400 delay-700 ease-out w-full h-150px flex flex-row items-center justify-center'>
        <div className='supp1100:h-4/5 supp1100:w-4/5 supp1740:w-70% w-[90%] max-w-[1800px] h-[120px] bg-noir rounded-[30px] relative overflow-hidden'>
          {matches && (<div ref={refBar} className='animAllBarResponsive supp1100:w-[4500px]   h-[30%] w-[3300px] absolute left-0  flex flex-row items-center justify-center'>
            <p className='supp1100:w-[1500px] w-[1111px] h-full flex flex-row items-center justify-around'>
                <img className='w-[120px] h-[100px]' src={aplace} alt="représentation d'un mot avec écrit APLACE. " />
                <img className='w-[150px] h-[25px]' src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
                <img className='w-[80px] h-[15px]' src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
                <img className='w-[150px] h-[40px]' src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
                <img className='w-[90px] h-[30px]' src={hope} alt="représentation d'un mot avec écrit HOPE." />
                <img className='w-[60px] h-[30px]' src={kotn} alt="représentation d'un mot avec écrit KOTN." />
              </p>
              <p className='supp1100:w-[1500px] w-[1111px] h-full flex flex-row items-center justify-around'>
                <img className='w-[120px] h-[100px]' src={aplace} alt="représentation d'un mot avec écrit APLACE. " />
                <img className='w-[150px] h-[25px]' src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
                <img className='w-[80px] h-[15px]' src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
                <img className='w-[150px] h-[40px]' src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
                <img className='w-[90px] h-[30px]' src={hope} alt="représentation d'un mot avec écrit HOPE." />
                <img className='w-[60px] h-[30px]' src={kotn} alt="représentation d'un mot avec écrit KOTN." />
              </p>
              <p className='supp1100:w-[1500px] w-[1111px] h-full flex flex-row items-center justify-around'>
                <img className='w-[120px] h-[100px]' src={aplace} alt="représentation d'un mot avec écrit APLACE. " />
                <img className='w-[150px] h-[25px]' src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
                <img className='w-[80px] h-[15px]' src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
                <img className='w-[150px] h-[40px]' src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
                <img className='w-[90px] h-[30px]' src={hope} alt="représentation d'un mot avec écrit HOPE." />
                <img className='w-[60px] h-[30px]' src={kotn} alt="représentation d'un mot avec écrit KOTN." />
              </p>
          </div>)
          }
           {!matches && (<div ref={refBar} className=' animAllBar supp1100:w-[4500px]  h-full w-[3300px] absolute left-0  flex flex-row items-center justify-center '>
            <p className='supp1100:w-[1500px] w-[1111px] h-full flex flex-row items-center justify-around'>
                <img className='w-[120px] h-[100px]' src={aplace} alt="représentation d'un mot avec écrit APLACE. " />
                <img className='w-[150px] h-[25px]' src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
                <img className='w-[80px] h-[15px]' src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
                <img className='w-[150px] h-[40px]' src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
                <img className='w-[90px] h-[30px]' src={hope} alt="représentation d'un mot avec écrit HOPE." />
                <img className='w-[60px] h-[30px]' src={kotn} alt="représentation d'un mot avec écrit KOTN." />
              </p>
              <p className='supp1100:w-[1500px] w-[1111px] h-full flex flex-row items-center justify-around'>
                <img className='w-[120px] h-[100px]' src={aplace} alt="représentation d'un mot avec écrit APLACE. " />
                <img className='w-[150px] h-[25px]' src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
                <img className='w-[80px] h-[15px]' src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
                <img className='w-[150px] h-[40px]' src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
                <img className='w-[90px] h-[30px]' src={hope} alt="représentation d'un mot avec écrit HOPE." />
                <img className='w-[60px] h-[30px]' src={kotn} alt="représentation d'un mot avec écrit KOTN." />
              </p>
              <p className='supp1100:w-[1500px] w-[1111px] h-full flex flex-row items-center justify-around'>
                <img className='w-[120px] h-[100px]' src={aplace} alt="représentation d'un mot avec écrit APLACE. " />
                <img className='w-[150px] h-[25px]' src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
                <img className='w-[80px] h-[15px]' src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
                <img className='w-[150px] h-[40px]' src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
                <img className='w-[90px] h-[30px]' src={hope} alt="représentation d'un mot avec écrit HOPE." />
                <img className='w-[60px] h-[30px]' src={kotn} alt="représentation d'un mot avec écrit KOTN." />
              </p>
          </div>)
          }
        </div>
    </div>
  )
}
