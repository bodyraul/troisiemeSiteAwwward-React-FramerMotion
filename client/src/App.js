import React from 'react'
import Navbar from './components/navbar/Navbar'
import PhotoVisual from './components/PhotoVisual/PhotoVisual'
import DefilementBar from './components/defilementBar/DefilementBar'
import Cards from './components/cards/Cards'
import Merchandising from './components/merchandising/Merchandising'
import DefilementPersonnel from './components/defilementPersonnel/defilementPersonnel'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import ResponsiveCards from './components/respondiveCards/ResponsiveCards'
import ResponsiveDefilementPerosnnel from './components/responsiveDefilementPerosnnel/ResponsiveDefilementPerosnnel'
import ResponsiveMerchandising from './components/responsiveMerchandising/ResponsiveMerchandising'

function App() {
  const [color, setcolor] = useState("#F3F3F3");
    const refAccueil = useRef();
    const [matches, setMatches] = useState(
      window.matchMedia("(max-width: 1350px)").matches
    )
  
    useEffect(() => {
      refAccueil.current.style.backgroundColor=color;
      return () => {
       
      };
    }, [color])
  
    useEffect(() => {
      function eventResponsive(e){
        setMatches( e.matches );
      }
      window.matchMedia("(max-width: 1350px)").addEventListener('change', eventResponsive);
      return () => {
        window.matchMedia("(max-width: 1350px)").removeEventListener('change', eventResponsive);
      }
    }, [])
  return (
    <div >
      <div ref={refAccueil} className='AllPageAnim'>
        <Navbar></Navbar>
        <div className='partieIntro'>
          <PhotoVisual></PhotoVisual>
          <DefilementBar></DefilementBar>
        </div>
        <div >
        {!matches? <Cards  setcolor={setcolor}></Cards> : <ResponsiveCards setcolor={setcolor}></ResponsiveCards>}
        </div>
        {!matches? <Merchandising  setcolor={setcolor}></Merchandising> : <ResponsiveMerchandising setcolor={setcolor} ></ResponsiveMerchandising>}
        {!matches? <DefilementPersonnel setcolor={setcolor}></DefilementPersonnel> : <ResponsiveDefilementPerosnnel setcolor={setcolor} ></ResponsiveDefilementPerosnnel>}
      </div>
    </div>
  );
}

export default App;
