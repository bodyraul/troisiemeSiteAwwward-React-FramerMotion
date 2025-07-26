import React from 'react'

export default function LiNavbar({children}) {
  return (
    <li className='mr-[50px] text-noir font-[Montreal-Medium] font-medium text-center text-base p-2 transition-all duration-[400] hover:rounded-[10px] hover:bg-grisPlusGris hover:cursor-pointer'>{children}</li>
  )
}
