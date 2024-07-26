const { default: Image } = require("next/image")
import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill,RiWhatsappFill } from "react-icons/ri";
import Sidebar from "../Sidebar";

const Header = () =>{
    const router = useRouter()
    return(
        <>
        <div className="bg-[#fffefd]  flex items-center h-[70px] w-full sticky top-0 z-[100]">
            <div className="container">
                <div className="flex items-center justify-between">
                <div className="w-[40px] h-[50px]">
                    <Link href={'/'}>
                    <Image src={'/assets/images/main-logo.png'} className=" w-full h-full fit-cover" width={100} height={50} alt="logo"/>
                    </Link>
                </div>
                <div className="max-[1024px]:hidden">
                    <ul className="flex gap-[30px]" style={{transition:'all 0.5s'}}>
                        <li className={router.pathname === '/' ? "font-[600] text-[#86a0b6]" : "font-[600] text-[#282C35] hover:text-[#86a0b6]"}><Link href='/'>Home</Link></li>
                        <li className={router.pathname === '/About' ? "font-[600] text-[#86a0b6]" : "font-[600] text-[#282C35] hover:text-[#86a0b6]"}><Link href='/About'>About Us</Link></li>
                        <li className={router.pathname === '/Gallery' ? "font-[600] text-[#86a0b6]" : "font-[600] text-[#282C35] hover:text-[#86a0b6]"}><Link href={'/Gallery'}>Our Gallery</Link></li>
                        <li className={router.pathname === '/Contactus' ? "font-[600] text-[#86a0b6]" : "font-[600] text-[#282C35] hover:text-[#86a0b6]"}><Link href={'/Contactus'}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="max-[1024px]:hidden">
                    <ul className="flex gap-3">
                        <li className="text-[20px] text-[#86a0b6]"><a href="/"><FaFacebook/></a></li>
                        <li className="text-[20px] text-[#86a0b6]"><a href="/"><RiInstagramFill/></a></li>
                        <li className="text-[20px] text-[#86a0b6]"><a href="/"><RiWhatsappFill/></a></li>
                    </ul>
                </div>
                <div className="hidden max-[1024px]:block">
                    <Sidebar/>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;