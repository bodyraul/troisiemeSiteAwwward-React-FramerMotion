import React from 'react'
import atwork from '../../assets/img/artwork.png'
import UseInitialiseNav from '../../customHoocks/navHoocks/UseInitialiseNav'
import LiNavbar from '../../componentsReutilisable/LiNavbar';
export default function Navbar() {

  const nav=UseInitialiseNav();

  return (
    <div ref={nav} className=' supp1024:h-[140px] supp1600:h-[10vh] -translate-y-full  transition-transform duration-[400] delay-[600] ease-out w-full h-[10vh] sticky top-0 flex items-center justify-center z-[3000]  ' >
      <nav style={{boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} className='supp1024:h-[100px] supp1600:h-[70%] flex flex-row items-center justify-between w-[80%] max-w-[1800px] rounded-3xl bg-blanc h-[70%] z-3000  overflow-hidden '>
        <img className='pl-1 h-[150px] hover:cursor-pointer  rounded-3xl' src={atwork} alt="" />
        <ul className='flex items-center justify-around list-none'>
          <LiNavbar>Product</LiNavbar>
          <LiNavbar>Custom</LiNavbar>
          <LiNavbar>Price</LiNavbar>
          <LiNavbar>Sign in</LiNavbar>
        </ul>
      </nav>
    </div>
  )
}
