import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "../Acceuil/pageAccueil.css"
import PhotoVisual from '../../components/PhotoVisual/PhotoVisual'
import DefilementBar from '../../components/defilementBar/DefilementBar'
import Cards from '../../components/cards/Cards'
import Merchandising from '../../components/merchandising/Merchandising'
import DefilementPersonnel from '../../components/defilementPersonnel/defilementPersonnel'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'


export default function PageAccueil() {

  const [color, setcolor] = useState("#F3F3F3");
  const refAccueil = useRef();

  useEffect(() => {
    refAccueil.current.style.backgroundColor=color;
    return () => {
     
    };
  }, [color])

  return (
    <>
    <Navbar></Navbar>
    <div ref={refAccueil} className='pageAccueil'>
      <div className='affichageAccueil'>
        <PhotoVisual></PhotoVisual>
        <DefilementBar></DefilementBar>
      </div>
      <div className='partieCard'>
          <Cards  setcolor={setcolor}></Cards>
      </div>
      <Merchandising  setcolor={setcolor}></Merchandising>
      <DefilementPersonnel setcolor={setcolor}></DefilementPersonnel>
    </div>
    </>
  )
}
