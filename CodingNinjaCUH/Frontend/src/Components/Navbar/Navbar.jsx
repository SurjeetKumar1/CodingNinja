import React from 'react'
import logo from "./CodingNinjaLogo.png"
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=' flex h-[6rem] justify-between items-center pl-10 pr-10'>

            <div className=' flex  items-center'>
                <Link to="/">
                    <img className="rounded-full h-16 cursor-pointer" src={logo} alt="logo" />
                </Link>

                <div className=' ml-2'>
                    <div className=' text-center text-3xl font-bold mr-3'>

                        <div>
                            <span className="text-orange-600">Coding Ninjas</span> Student Chapter
                        </div>

                    </div>
                    <div>Central University Of Haryana</div>
                </div>
            </div>

            <div className=''>
                <ul className=' flex justify-between gap-6 text-xl font-semibold cursor-pointer'>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="events">
                        <li>Events</li>
                    </Link>
                    <Link to="about">
                        <li>About</li>
                    </Link>
                    <Link to="team">
                        <li>Team</li>
                    </Link>
                    <Link to="socialmedia">
                        <li>Social Media</li>
                    </Link>

                </ul>
            </div>

            <div>
                <Link to="contactus">
                    <Button style={{ background: "#F66C3B", padding: "0.8rem 1.3rem ", fontWeight: "700", borderRadius: "0.7rem" }} variant="contained">
                        Contact Us
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
