import { useEffect, useRef, useState } from "react"
import { iconClose, iconMenu, logo } from "../constant/images"
import { navLinks } from "../constant/navlinks"
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import 'animate.css'
const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState(false)
    const navRef = useRef()

    useEffect(() => {

        const handleWindow = () => {
            window.scrollY > 0 ? setActiveNav(true) : setActiveNav(false)
        }

        window.addEventListener('scroll', handleWindow)

        return () => window.removeEventListener('scroll', handleWindow)

    }, [activeNav])


    return (
        <nav ref={navRef} className={`${activeNav ? 'bg-color-offWhite' : ''} max-w-[1440px] w-full fixed p-[1.2rem] sm:px-[2rem] lg:px-[4rem] z-50`}>
            <div onClick={() => {
                setToggle(false)
                enablePageScroll(navRef.current)
            }} className={`${toggle ? 'bg-black bg-opacity-[0.5] flex' : 'collapse'} absolute w-[100vw] h-[100vh] top-0 left-0  duration-300`}></div>
            <ul className="flex justify-between items-center">
                <div className="logo">
                    <img className="w-[50px]" src={logo} alt="" />
                </div>

                <img className="md:hidden" onClick={() => {
                    setToggle(true)
                    disablePageScroll(navRef.current)
                }} src={iconMenu} alt="iconmenu" />



                <div className={`${toggle ? 'nav-open flex' : ' nav-close'} translate-x-[100vw]  absolute top-0 right-0 p-[2rem] pt-[10rem]  bg-color-offWhite w-[50%] h-[100vh] flex-col  gap-5 text-[1.2rem] md:hidden duration-300 `}>
                    <img onClick={() => {
                        setToggle(false)
                        enablePageScroll(navRef.current)
                    }} className="absolute top-5 right-5" src={iconClose} alt="icon-close" />

                    {
                        navLinks.map((link) => {
                            return (
                                <li onClick={() => alert('this is a single page web')} className="text-black" key={link.id}>{link.link}</li>
                            )
                        })
                    }
                </div>

                {/* this is for tablets and desktops */}
                <div className="hidden md:flex gap-5 font-[500]">
                    {
                        navLinks.map((link) => {
                            return (
                                <li onClick={() => alert('this is a single page web')} className="cursor-pointer lg:text-[1.2rem] hover:text-color-softRed duration-300" key={link.id}>{link.link}</li>
                            )
                        })
                    }
                </div>

            </ul>

        </nav>

    )
}

export default Navbar
