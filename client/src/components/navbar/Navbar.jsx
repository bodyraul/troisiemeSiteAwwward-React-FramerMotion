import React from 'react'
import depictPicture from '../../assets/img/depict.svg'
import  '../navbar/navbar.css'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function Navbar() {

  const textInvisibleBtnOrange = useRef();
  const textVisibleBtnOrange = useRef();
  const nav = useRef();


  const enterBtnOrange =()=>{
    textInvisibleBtnOrange.current.classList.add('upSpan');
    textVisibleBtnOrange.current.classList.add('upSpan');
  }

  const leaveBtnOrange=()=>{
    textInvisibleBtnOrange.current.classList.remove('upSpan');
    textVisibleBtnOrange.current.classList.remove('upSpan');
  }

  useEffect(() => {
    nav.current.style.transform ="translateY(0%)";
  }, [])

  return (
    <div ref={nav} className='containerNav'>
      <nav className='navbar'>
        <img src={depictPicture} alt="" />
        <ul>
            <li>Product</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Sign in</li>
            <div  onMouseEnter={enterBtnOrange} onMouseLeave={leaveBtnOrange}  className='btnOrange'>
              <div className='pBtnOrange'>
                <p ref={textVisibleBtnOrange} className='visibleSpan'>Free Trial</p>
                <p ref={textInvisibleBtnOrange}className='invisibleSpan'>Start for free</p>
              </div>
            </div>
        </ul>
      </nav>
    </div>
  )
}
