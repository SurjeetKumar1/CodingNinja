import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
        <div className='border-b dark:border-[#A59D9D] border-slate-900  w-full mb-28 mt-16' ></div>
        <div className='flex sm:justify-between flex-col sm:flex-row sm:pr-40 pr-16 pl-16 ms:gap-1 gap-8 sm:pl-40'>
            <div className=''>
                <div className=' sm:text-2xl text-xl font-bold mb-2'>@coding.ninja_cuh</div>
                <div className='mb-2 dark:text-[#A59D9D] text-slate-600'>codingninja@cug.ac.in</div>
                <div className='mb-2 dark:text-[#A59D9D] text-slate-600'>Central University of Haryana, Jant-Pali, Mahenderagarh Haryana Pin:
                    123031 </div>
                <div className='flex gap-4 mt-2'>
                    <div className='flex items-center justify-center pt-2 pb-2 pr-3 pl-3 bg-orange-600 rounded-full cursor-pointer  '>
                        <FaLinkedinIn style={{ fontSize: "1.2rem", color: "black" }} />
                    </div>

                    <div className='p-2 bg-orange-600 rounded-xl cursor-pointer'>
                        <BsInstagram style={{ fontSize: "1.6rem " }} />
                    </div>

                </div>
            </div>

            <div className=''>
                <h1 className='sm:text-2xl text-xl font-bold sm:mb-4 mb-2'>know More</h1>
                <ul className='dark:text-[#A59D9D] text-slate-600 flex flex-col sm:gap-4 gap-2 sm:text-xl text-lg font-semibold cursor-pointer'>
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Gellery</li>
                    <li>Coding Ninja</li>
                </ul>
            </div>

            <div >
                <h1 className='sm:text-2xl text-xl font-bold sm:mb-4 mb-2'>Other Links</h1>
                <ul className='dark:text-[#A59D9D] text-slate-600 flex flex-col sm:gap-4 gap-2 sm:text-xl text-lg font-semibold cursor-pointer'>
                    <li>Terms & condition</li>
                    <li>Privacy policy</li>
                    <li>Contact Us</li>
                    <li>Meeting</li>
                </ul>
            </div>
        </div>

        <div className='border-b dark:border-[#A59D9D] border-slate-900  w-full mt-20' ></div>
        <div className='text-center mt-4 min-h-[6rem]'>
            <div className='sm:text-2xl text-xl dark:text-[#A59D9D] text-slate-800'>All Rights are reserved</div>
        </div>
        </>
    )
}

export default Footer
