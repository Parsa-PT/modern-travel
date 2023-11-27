'use client'
import { FEATURES } from "@/constants"
import Image from "next/image"
import {motion} from 'framer-motion'
import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


type FeatursProps ={
    title : string,
    description : string,
    icon : string,
    variant : string,

}

const Features = () => {

    

  return (
    <section className=' flexCenter overflow-hidden  flex-col  bg-feature-bg bg-center bg-no-repeat py-24'>
            <div className=' max-container padding-container relative w-full flex justify-end'>
                <div className=" flex flex-1 lg:min-h-[900px]">
                    <Image src='/phone.png' width={440} height={1000} alt="phone" className="feature-phone"/>
                </div>
                <div className="z-20 flex w-full flex-col lg:w-[60%]">
                    <div className=" relative">
                        <Image src='/camp.svg'  className=" absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]" alt="camp" width={50} height={50}/>
                        <h2 className=" bold-14 mt-2 lg:bold-64">Our features</h2>
                    </div>
                    <ul className=" mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
                        {FEATURES.map((item)=>(
                            <>
                                <FeaturesItem 
                                key={item.title}
                                title={item.title}
                                icon={item.icon}
                                variant={item.variant}
                                description={item.description}
                                
                                />
                            </>
                           
                        ))}
                    </ul>
                </div>
            </div>
    </section>
  )
}

const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    hidden: { opacity: 0, scale: 0 }
  };


const descVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    hidden: { opacity: 0, x: -60 }
  };


const FeaturesItem =({title ,icon ,variant , description } : FeatursProps)=>{

    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return(
        <li className=" flex w-full flex-1 flex-col items-start">
                <motion.div ref={ref} animate={controls} initial="hidden"  variants={squareVariants} className=" rounded-full p-4 lg:p-7 bg-green-50">
                        <Image src={icon} alt="map" width={28} height={28}/>
                </motion.div>  
                <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                    {title}
                </h2>
                <motion.p ref={ref} animate={controls} initial="hidden"  variants={descVariants}  className=" regular-16 mt-5 bg-white/80 lg:mt-[30px] text-gray-30 lg:bg-none">
                    {description}
                </motion.p>
        </li>
    )
}

export default Features
