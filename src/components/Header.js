import logo from '../assets/Logo.svg'
import hamburger from  '../assets/icon_hamburgermenu.svg'
import basket from '../assets/Basket.svg'
import { useState } from 'react'
import close from '../assets/close.png'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {

  const [mobMenu, setMobMenu] = useState(false)

  return (
    <div className='max-w-4xl mx-auto flex items-center justify-between py-3 font-body font-bold max-md:px-3'>
        <div className='md:hidden' onClick={()=> setMobMenu(!mobMenu)}>
          <img className='w-8' src={hamburger}/>
        </div>
        <Link to='/'>
            <img className='w-40 h-auto' src={logo}/>
        </Link>
        <nav className={mobMenu ? 'max-md:fixed z-50 max-md:flex max-md:w-full max-md:bg-white max-md:px-10 max-md:pb-12 max-md:pt-20 max-md:h-screen max-md:top-0 max-md:right-0 max-md:justify-center max-md:text-center' : 'max-md:hidden'}>
            <a className='md:hidden absolute right-4 top-4' onClick={()=> setMobMenu(!mobMenu)}>
              <img src={close} className='w-[32px]'/>
            </a>
            <ul className='flex gap-10 max-md:flex-col active-nav-link'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><NavLink to='/reserve-a-table'>Reservations</NavLink></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
        <a className='md:hidden'>
          <img className='w-8' src={basket}/>
        </a>
    </div>
  )
}