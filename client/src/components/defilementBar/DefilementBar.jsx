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
    <div ref={bar} className='defilementBar'>
        <div className='defilementBarAll'>
          <p className='defilementBarTitre'>Trusted by</p>
          {matches && (<div ref={refBar} className='allBar animAllBarResponsive'>
            <p className='imgDefilement'>
                <img src={aplace} alt="représentation d'un mot avec écrit APLACE. " />
                <img src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
                <img src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
                <img src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
                <img src={hope} alt="représentation d'un mot avec écrit HOPE." />
                <img src={kotn} alt="représentation d'un mot avec écrit KOTN." />
              </p>
              <p className='imgDefilement'>
                <img src={aplace} alt="représentation d'un mot avec écrit APLACE." />
                <img src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
                <img src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
                <img src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
                <img src={hope} alt="représentation d'un mot avec écrit HOPE." />
                <img src={kotn} alt="représentation d'un mot avec écrit KOTN." />
              </p>
              <p className='imgDefilement'>
                <img src={aplace} alt="représentation d'un mot avec écrit APLACE." />
                <img src={stuternhim} alt="représentation d'un mot avec écrit STUTTERHEIM RAINCOATS." />
                <img src={chimie} alt="représentation d'un mot avec écrit CHIMI." />
                <img src={sandqvist} alt="représentation d'un mot avec écrit SANDVIST." />
                <img src={hope} alt="représentation d'un mot avec écrit HOPE." />
                <img src={kotn} alt="représentation d'un mot avec écrit KOTN." />
              </p>
          </div>)
          }
           {!matches && (<div ref={refBar} className='allBar animAllBar'>
            <p className='imgDefilement'>
                <img src={aplace} alt="" />
                <img src={stuternhim} alt="" />
                <img src={chimie} alt="" />
                <img src={sandqvist} alt="" />
                <img src={hope} alt="" />
                <img src={kotn} alt="" />
              </p>
              <p className='imgDefilement'>
                <img src={aplace} alt="" />
                <img src={stuternhim} alt="" />
                <img src={chimie} alt="" />
                <img src={sandqvist} alt="" />
                <img src={hope} alt="" />
                <img src={kotn} alt="" />
              </p>
              <p className='imgDefilement'>
                <img src={aplace} alt="" />
                <img src={stuternhim} alt="" />
                <img src={chimie} alt="" />
                <img src={sandqvist} alt="" />
                <img src={hope} alt="" />
                <img src={kotn} alt="" />
              </p>
          </div>)
          }
        </div>
    </div>
  )
}
