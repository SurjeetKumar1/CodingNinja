import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
        <div className='border-b border-[#A59D9D] w-full mb-28 mt-16' ></div>
        <div className='flex justify-between pr-40 pl-40'>
            <div className=''>
                <div className=' text-2xl font-bold mb-2'>@coding.ninja_cuh</div>
                <div className='mb-2 text-[#A59D9D]'>codingninja@cug.ac.in</div>
                <div className='mb-2 text-[#A59D9D]'>Central University of Haryana, Jant-Pali, Mahenderagarh Haryana Pin:
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
                <h1 className='text-2xl font-bold mb-4'>know More</h1>
                <ul className='text-[#A59D9D] flex flex-col gap-4 text-xl font-semibold cursor-pointer'>
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Gellery</li>
                    <li>Coding Ninja</li>
                </ul>
            </div>

            <div >
                <h1 className='text-2xl font-bold mb-4'>Other Links</h1>
                <ul className='text-[#A59D9D] flex flex-col gap-4 text-xl font-semibold cursor-pointer'>
                    <li>Terms & condition</li>
                    <li>Privacy policy</li>
                    <li>Contact Us</li>
                    <li>Meeting</li>
                </ul>
            </div>
        </div>

        <div className='border-b border-[#A59D9D] w-full mt-20' ></div>
        <div className='text-center mt-4 mb-20'>
            <div className='text-2xl text-[#A59D9D]'>All Rights are reserved</div>
        </div>
        </>
    )
}

export default Footer
