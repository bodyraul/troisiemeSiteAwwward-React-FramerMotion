import React from 'react'
import atwork from '../../assets/img/artwork.png'
import UseInitialiseNav from '../../customHoocks/navHoocks/UseInitialiseNav'
import LiNavbar from '../../componentsReutilisable/nav/LiNavbar';
export default function Navbar() {

  const nav=UseInitialiseNav();

  return (
    <div ref={nav} className='supp480:h-[145px] supp768:h-[180px] supp1024:h-[240px] supp1600:h-[10vh] h-[110px] -translate-y-full  transition-transform duration-[400] delay-[600] ease-out w-full  sticky top-0 flex items-center justify-center z-[3000]  ' >
      <nav style={{boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} className='supp480:w-[414px] supp480:h-[65px] supp768:w-[540px] supp768:h-[80px] supp1024:w-[80%] supp1024:h-[100px] supp1600:h-[70%] w-[225px] h-[50px] flex flex-row items-center justify-between max-w-[1800px] rounded-3xl bg-blanc  z-3000  overflow-hidden '>
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
