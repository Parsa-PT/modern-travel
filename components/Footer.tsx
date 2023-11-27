import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import rexcode from '../public/Rexcode_logo.png'


const Footer = () => {
  return (
    <footer className=' flexCenter mb-24'>
        <div className=' padding-container max-container flex w-full flex-col gap-14'>
            <div className=' flex flex-col items-start justify-center gap-[10%] md:flex-row'>
                <Link href='/' className=" mb-10">
                    <h1 className=" text-xl">Modern<span className=" text-green-500">Travel</span></h1>
                </Link>
                <div className=" flex flex-wrap gap-10 sm:justify-between md:flex-1">
                    {FOOTER_LINKS.map((item)=>(
                        <>
                            <FooterColumn key={item.title} title={item.title}>
                                <ul className=" regular-14 flex flex-col gap4 text-gray-30">
                                    {item.links.map((link)=>(
                                        <>

                                        <Link href='/' key={link}>
                                            {link}
                                        </Link>
                                        </>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </>
                    ))}

                    <div className=" flex flex-col gap-5">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                    {FOOTER_CONTACT_INFO.links.map((link)=>(
                                        <>
                                            <Link href='/' key={link.label} className=" flex gap-4 md:flex-col lg:flex-row ">
                                                <p className=" whitespace-nowrap ">
                                                    {link.label};
                                                </p>
                                                <p className=" medium-14 whitespace-nowrap text-blue-70">
                                                    {link.value}
                                                </p>
                                            </Link>
                                        </>
                                    ))}
                            </FooterColumn>
                    </div>

                    <div className=" flex flex-col gap-5">
                        <FooterColumn title={SOCIALS.title}>
                                    <ul className=" regular-14 flex gap-4  text-gray-30">
                                        {SOCIALS.links.map((item)=>(
                                            <>
                                                    <Link key={item} href='/'>
                                                        <Image src={item} alt="logo" width={24} height={24}/>
                                                    </Link>
                                            </>
                                        ))}
                                    </ul>
                        </FooterColumn>
                    </div>

                </div>
            </div>

            <div className="border bg-gray-20"/>
            <div className=" regular-14 w-full flex justify-center items-center">
                <span>2023 | Design by</span>
                <Image src={rexcode} className=" -ml-[1.2rem]" alt="rexlogo" width={120} height={50}/>
            </div>
        </div>
    </footer>
  )
}

type FooterProps ={
    title : string,
    children : React.ReactNode
}


const FooterColumn = ({title , children} : FooterProps )=>{
    return(
        <div className=" flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

export default Footer
