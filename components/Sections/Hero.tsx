'use client'
import Image from "next/image";
import Button from "../Button";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <section className=" max-contaoner   flex flex-col gap-22 py-10 pb-32 padding-container md:gap-28 lg:py-20 lg:px-[6rem] 2xl:px-[14rem] xl:flex-row">
        <div className="hero-map" />

        <div className=" relative z-20  flex flex-1 flex-col xl:w-1/2">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className=" absolute -left-[0.30rem] -top-[2rem] w-10 lg:w-[50px]"
          />
          <motion.h1 animate={{opacity:100 , x:0}} initial={{opacity:0 , x:-100}} transition={{duration:1.2}} className=" bold-52 lg:bold-88">Putuk Truno Camp Area</motion.h1>
          <motion.p animate={{opacity:100 , x:0}} initial={{opacity:0 , x:100}} transition={{duration:1.2}} className=" regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            assumenda. Alias voluptatum, fugiat vitae, similique doloribus
            adipisci, animi obcaecati cum officia deserunt minus suscipit
            consequatur dolorem harum molestias voluptas eos.
          </motion.p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className=" flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <>
                  <motion.div   key={index} animate={{opacity:100}} initial={{opacity:0}} transition={{duration:1.2}}>

                  <Image
                      src="/star.svg"
                    
                      width={24}
                      height={24}
                      alt="star"
                    />

                  </motion.div>
                    
                  </>
                ))}
            </div>

            <p className=" bold-16 lg:bold-20 text-blue-70">
              232K
              <span className=" regular-16 lg:regular-20 ml-1 underline">
                Excellent Reviews
              </span>
            </p>
          </div>

          <div className=" flex items-center flex-col w-full gap-3 sm:flex-row">
            <Button type="button" title="Download App" variant="btn_green" />
            <Button
              type="button"
              title="How we work?"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </div>
        </div>

        <div className=" relative flex  flex-1 items-start">
          <motion.div animate={{scale:1}}  transition={{duration:0.5}} initial={{scale:0}} className=" relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">


            <div className=" flex flex-col ">
              <div className=" flexBetween">
                <p className=" regular-16 text-gray-20">Locations</p>
                <Image src="/close.svg" width={24} height={24} alt="close" />
              </div>
              <p className=" bold-20 text-white">California</p>
            </div>

            <div className=" flexBetween">
              <div className=" flex flex-col">
                <p className=" regular-16 block text-gray-20 ">Distance</p>
                <p className=" bold-20 text-white">173.28 mi</p>
              </div>
              <div className=" flex flex-col">
                <p className=" regular-16 block text-gray-20 ">Elevation</p>
                <p className=" bold-20 text-white">4.027 km</p>
              </div>
            </div>


          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
