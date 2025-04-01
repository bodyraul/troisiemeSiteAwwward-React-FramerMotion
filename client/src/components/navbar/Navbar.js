import React from 'react'
import depictPicture from '../../assets/img/depict.svg'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function Navbar() {

  const nav = useRef();

  useEffect(() => {
    nav.current.style.transform ="translateY(0%)";
  }, [])

  return (
    <div ref={nav} className=' -translate-y-full  transition-transform duration-400 delay-600 ease-out w-full h-10vh sticky top-0 flex items-center justify-center z-3000' >
      <nav style={{boxShadow:`rgba(0, 0, 0, 0.24) 0px 3px 8px`}} className=' supp1100:w-4/5 supp1740:py-0 supp1740:px-0 supp1740:w-70%  flex flex-row items-center justify-between w-90% max-w-1800px rounded-3xl bg-blanc h-4/5 z-3000 py-7 px-0 '>
        <img className='pl-5 hover:cursor-pointer' src={depictPicture} alt="" />
        <ul className='flex items-center justify-around list-none'>
            <li className='mr-[50px] text-noir font-[Montreal-Medium] font-medium text-center text-base p-2 transition-all duration-400 hover:rounded-[10px] hover:bg-grisPlusGris hover:cursor-pointer'>Product</li>
            <li className='mr-[50px] text-noir font-[Montreal-Medium] font-medium text-center text-base p-2 transition-all duration-400 hover:rounded-[10px] hover:bg-grisPlusGris hover:cursor-pointer'>Customers</li>
            <li className='mr-[50px] text-noir font-[Montreal-Medium] font-medium text-center text-base p-2 transition-all duration-400 hover:rounded-[10px] hover:bg-grisPlusGris hover:cursor-pointer'>Pricing</li>
            <li className='mr-[50px] text-noir font-[Montreal-Medium] font-medium text-center text-base p-2 transition-all duration-400 hover:rounded-[10px] hover:bg-grisPlusGris hover:cursor-pointer'>Sign in</li>
        </ul>
      </nav>
    </div>
  )
}
