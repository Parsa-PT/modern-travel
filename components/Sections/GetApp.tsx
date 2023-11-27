'use client'
import Image from 'next/image'
import Button from '../Button'
import {motion} from 'framer-motion'
import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"



const squareVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, y: 300 }
  };


const GetApp = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
        <div className='get-app'>
            <div className=' z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
                <h2 className=' bold-40 lg:bold-64 xl:max-w-[320px]'>
                    Get for free now!
                </h2>
                <p className='regular-16 text-gray-10'>Available on iOS and Android</p>
                <div className=' flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
                    <Button type='button' title='Downlaod App' icon='/apple.svg' full variant='btn_white'/>
                    <Button type='button' title='Play Store' icon='/android.svg' full variant='btn_dark_green_outline'/>
                </div>
            </div>

            <motion.div ref={ref}  animate={controls} initial="hidden"  variants={squareVariants} className=' flex flex-1 items-center justify-end'>
                    <Image src='/phones.png' alt='phone' width={550} height={870}/>
            </motion.div>
        </div>
    </section>
  )
}

export default GetApp
