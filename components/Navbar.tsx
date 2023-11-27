'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/hilink-logo.svg'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {motion} from 'framer-motion'

const Navbar = () => {

  const [nav , setNav] = useState(false)

  return (
    <div>
      <nav className='  flex justify-between items-center max-container padding-container relative z-30 py-5'>
        <Link href='/'>
            <h1 className='text-xl'>Modern<span className=' text-green-400'>Travel</span></h1>
        </Link>
        <ul className=' hidden h-full gap-12 lg:flex'>
                {NAV_LINKS.map((item)=>(
                    <>
                    <Link  className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href={item.href} key={item.key}>
                        {item.label}
                    </Link>
                    </>
                ))}
            </ul>

            <div className='lg:flexCenter hidden'>
                <Button type='button' title='Log in' icon='/user.svg' variant='btn_dark_green'/>
            </div>

            <Image onClick={()=> setNav(!nav)}  src='menu.svg' alt='menu' width={32} height={32} className=' inline-block cursor-pointer lg:hidden'/>

            
      </nav>
                  
<AnimatePresence>
    {nav && (

        <motion.div animate={{height:700}} exit={{height:0}} initial={{height:0}} transition={{duration:1}} className=' flex flex-col  justify-center items-center  overflow-hidden  w-full '>
                   {NAV_LINKS.map((item)=>(
                    <>
                   <motion.div key={item.key} animate={{opacity:100 , x:0}} initial={{opacity:0 , x:-30}} transition={{duration:2}}>
                   <Link  onClick={()=> setNav(!nav)} className='regular-16 transition-all ease-in duration-75 hover:text-green-50 bold-20 text-gray-50 flexCenter cursor-pointer pb-1.5 lg:transition-all hover:font-bold' href={item.href} >
                        {item.label}
                    </Link>

                    </motion.div> 
                    
                    </>
                   ))}   
        </motion.div>

    )}
</AnimatePresence>
    </div>
  )
}

export default Navbar
