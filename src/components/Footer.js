import logo from '../assets/Logo.svg'
import insta from '../assets/insta.png'
import fb from '../assets/fb.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='border-t-[1px] border-[#ccc] border-solid'>
            <div className='max-w-4xl mx-auto max-md:px-3 py-10 grid md:grid-cols-3 gap-12 text-center md:text-left md:gap-28'>
                <div>
                    <Link to='/'>
                        <img src={logo} className='w-full mb-10 max-h-[70px]' />
                    </Link>
                    <h3 className='font-display text-2xl mb-4'>Follow us on</h3>
                    <ul className='flex gap-4 justify-center md:justify-start'>
                        <li><img src={insta} className='h-8 w-auto' /></li>
                        <li><img src={fb} className='h-8 w-auto' /></li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-display text-2xl mb-4'>Quick links</h3>
                    <ul className='font-body text-md flex flex-col gap-2'>
                        <li><Link to='/'>Home</Link></li>
                        <li>About</li>
                        <li>Menu</li>
                        <li><Link to='/reserve-a-table'>Reservations</Link></li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-display text-2xl mb-4'>Contact</h3>
                    <ul className='font-body text-md flex flex-col gap-2'>
                        <li>123 N Michigan Ave Chicago, IL 60601 USA</li>
                        <li>+1 (312) 555-3890</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}