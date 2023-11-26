import Image from "next/image"

const Guide = () => {
  return (
    <section className=' flexCenter flex-col'>
            <div className='padding-container max-container w-full pb-24'>
              
                    <Image src='/camp.svg' width={50} height={50} alt="camp"/>
                    <p className=" uppercase regular-18 -mt-1 mb-3 text-green-50">
                        We are here for you
                    </p>
           
                <div className=" flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className=" bold-40 lg:bold-64  xl:max-w-[390px]">Guide you to easy path</h2>
                    <p className=" regular-16 text-gray-30 xl:max-w-[520px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quod sapiente debitis ipsa doloremque earum ex, nihil a deserunt eos recusandae temporibus veritatis sint alias, magni aut reprehenderit maxime pariatur!
                        Itaque sint, maxime aperiam id aliquam aliquid, necessitatibus alias placeat vero unde consequatur nisi recusandae dolorem aut, magni beatae totam illum cumque praesentium fugit perspiciatis error. Rem quidem quisquam obcaecati.
                        Iusto quam sequi, officiis magni impedit, adipisci tempore, vitae numquam blanditiis ad dolorem beatae? Alias placeat nulla iure quos, libero cumque voluptatum explicabo quas impedit eum, natus numquam odio veniam.
                    </p>
                </div>
            </div>

            <div className="flexCenter max-container  relative w-full ">
                <Image src='/boat.png' alt="boat" height={580} width={1440} className=" w-full object-cover object-center 2xl:rounded-5xl"/>
                <div className=" absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] 2xl:left-[-3%] lg:top-20">
                    <Image src='/meter.svg' alt="meter" width={16} height={158} className=" h-full w-auto"/>
                    <div className=" flexBetween flex-col ">
                        <div className=" flex w-full flex-col">
                            <div className=" flexBetween w-full">
                                <p className=" regular16 text-gray-20">Distinations</p>
                                <p className=" bold-16 text-green-50">48 min</p>
                            </div>
                            <p className=" bold-20 mt-2">Aguas Calientes</p>
                        </div>
                        <div className=" flex w-full flex-col">
                           
                                <p className=" regular16 text-gray-20">Start track</p>
                                <h4 className=" bold-16 whitespace-nowrap  text-green-50">wonorejo</h4>
                       
                            <p className=" bold-20 mt-2">Aguas Calientes</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Guide
