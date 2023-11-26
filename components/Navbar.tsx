'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/hilink-logo.svg'
import { NAV_LINKS } from '@/constants'
import Button from './Button'

const Navbar = () => {
  return (
    <div>
      <nav className='  flex justify-between items-center max-container padding-container relative z-30 py-5'>
        <Link href='/'>
            <Image src={Logo} height={29} width={74} alt='logo'/>
        </Link>
        <ul className=' hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map((item)=>(
                    <>
                    <Link className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href={item.href} key={item.key}>
                        {item.label}
                    </Link>
                    </>
                ))}
            </ul>

            <div className='lg:flexCenter hidden'>
                <Button type='button' title='Log in' icon='/user.svg' variant='btn_dark_green'/>
            </div>

            <Image  src='menu.svg' alt='menu' width={32} height={32} className=' inline-block cursor-pointer lg:hidden'/>
      </nav>
    </div>
  )
}

export default Navbar
