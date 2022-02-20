import { MenuIcon,XIcon } from '@heroicons/react/outline';
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

function Header() {

    const [open, setOpen] = useState(false)
    function handleClick() {
        setOpen(!open);
    }

  return (
        <motion.div
        initial={{ opacity: 0 }} 
        whileInView = {{ opacity: 1 }}
        viewport={{ once: true }}
        transition = {{ type: "tween", duration: 0.6 }}
        >
            <motion.header 
                            initial={{ opacity: 0 }} 
                            whileInView = {{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition = {{ type: "tween", duration: 0.4 }}
            className=" flex ml-20 lg:m-auto md:ml-14 justify-center gap-6 md:justify-between mx-auto max-w-7xl items-center md:px-12 py-5">
                <Link href="/" >
                    <img className="h-24 w-24 md:h-20 md:w-20 cursor-pointer" src="https://i0.wp.com/paakhitravels.com/wp-content/uploads/2022/01/Istagram_Actual-Size.png?w=150&ssl=1" alt="" />
                </Link>
                <Link href="/" >
                    <h1 className="-mx-3 md:mx-auto text-2xl font-semibold md:absolute md:px-[90px] cursor-pointer hover:text-green-500 duration-300">Paakhi Travels</h1>
                </Link>
                <Link href="/">
                    <h3 className="mx-[66px] pl-[71px] md:pl-[11px] absolute mt-9 text-[9px] md:text-[11px] text-gray-400 md:mx-[79px] px-3 cursor-pointer text-left truncate">Explore the unexplored</h3>
                </Link>
                <div className="hidden md:inline-flex flex-col space-y-3 -mt-5 items-end">
                <h2 className="text-gray-500 text-xs relative">Call us for dream holiday</h2>
                <h1 className="absolute text-xl text-green-500 cursor-pointer hover:underline">+91-5487941232</h1>
                </div>
            </motion.header>
            <hr className='' />
            <button type="button" className="" onClick={handleClick}>
                {open && (
                    <XIcon className='text-3xl relative bottom-20 md:hidden left-[53px] h-6 w-6'/>
                )}
                {!open && (
                    <MenuIcon className='text-3xl relative bottom-20 md:hidden left-[53px] h-6 w-6 '/>
                )}
            </button>
            <div className={`z-10 border-t-2 border-b md:border-none justify-evenly p-5 truncate -mt-6 md:-mt-5 pb-7 md:pb-5 items-center md:flex absolute md:static bg-white w-full md:w-auto transition-all duration-500 ease-in ${ open ? ' top-40 z-10 opacity-100' : 'hidden' } md:opacity-100`}>
                <div className={`md:flex items-center text-center mx-16 space-x-9 font-semibold text-lg lg:text-[21px] space-y-4 md:space-y-0 md:z-auto z-[-1]`}>
                    <Link href="/">
                        <h3 className="hover:text-green-500 bg-white shadow-lg rounded-md md:shadow-none mr-0 duration-200 cursor-pointer mx-9 md:mx-0 hover:shadow-inner md:hover:shadow-none">Home</h3>
                    </Link>
                    <Link href="/about">
                        <h3 className="hover:text-green-500 bg-white shadow-lg rounded-md md:shadow-none duration-200 cursor-pointer hover:shadow-inner md:hover:shadow-none">About Me</h3>
                    </Link>
                    <h3 className="hover:text-green-500 bg-white shadow-lg rounded-md md:shadow-none duration-200 cursor-pointer hover:shadow-inner md:hover:shadow-none">Flashback</h3>
                    <h3 className="hover:text-green-500 bg-white shadow-lg rounded-md md:shadow-none duration-200 cursor-pointer hover:shadow-inner md:hover:shadow-none">Get in Touch</h3>
                    <h3 className="hover:text-green-500 bg-white shadow-lg rounded-md md:shadow-none duration-200 cursor-pointer hover:shadow-inner md:hover:shadow-none">Untold Stories</h3>
                </div>
            </div>
            <hr className="hidden md:flex" />
        </motion.div>
    )
}

export default Header