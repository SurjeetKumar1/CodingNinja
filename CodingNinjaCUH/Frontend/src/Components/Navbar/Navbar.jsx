import React, { useEffect, useState } from 'react';
import logo from "./CodingNinjaLogo.png";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { IoDesktopOutline } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [clicked, setClicked] = useState(false);
    const element = document.documentElement;

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });
    
    // const [theme, setTheme] = useState("dark");
    
    console.log("theme is",theme)

    // match karega desktop ki theme aur light ki theme  
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // console.log(darkQuery)

    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark")
        }
        else {
            element.classList.remove("dark");
        }
    }

    onWindowMatch()


    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark");
                localStorage.setItem('theme', 'dark');
                break;
            case "light":
                element.classList.remove("dark");
                localStorage.setItem('theme', 'light');
                break;

            default:
                localStorage.removeItem("theme");
                onWindowMatch()
                break;
        }
    }, [theme]); // Include all dependencies


    // set theme
    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    darkQuery.addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
            if (e.matches) {
                element.classList.add("dark");
            }
            else {
                element.classList.remove("dark");
            }
        }
    });

    const option = [
        {
            icon: <MdOutlineLightMode />,
            text: "light"
        },
        {
            icon: <MdDarkMode />,
            text: "dark"
        },
        {
            icon: <IoDesktopOutline />,
            text: "System"
        }
    ];

    return (
        <div className='flex h-[6rem] justify-between items-center sm:pl-10 sm:pr-10 pl-2 pr-2'>
            <div className='flex items-center'>
                <Link to="/">
                    <img className="rounded-full sm:h-16 h-12 text-start cursor-pointer" src={logo} alt="logo" />
                </Link>
                <div className='ml-2'>
                    <div className='text-center sm:text-3xl text-base font-bold mr-3'>
                        <div className='text-start'>
                            <span className="text-orange-600">Coding Ninjas</span> Student Chapter
                        </div>
                    </div>
                    <div className='text-sm'>Central University Of Haryana</div>
                </div>
            </div>
            <div className={`${clicked ? "flex bg-[#2B2A2A]" : "hidden"} sm:flex flex-col sm:flex-row items-center justify-center fixed sm:static top-24 w-full sm:max-w-fit`}>
                <ul className={`flex sm:flex flex-col justify-center items-center sm:flex-row gap-6 text-xl font-semibold cursor-pointer w-full `}>
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
                <Link to="contactus">
                    <Button style={{ background: "#F66C3B", width: "9rem", height: "3.5rem", fontWeight: "700", borderRadius: "0.7rem", marginLeft: "5rem" }} variant="contained">
                        Contact Us
                    </Button>
                </Link>
            </div>
            <div className='flex dark:bg-slate-900 bg-gray-300  rounded'>
                <div className="" onClick={() => setToggle(!toggle)}>
                    <button className={`w-8 h-8 leading-9 text-xl rounded-full m-1 flex items-center justify-center `}>
                        {(theme === "light") ? <MdOutlineLightMode /> : (theme === "dark") ? <MdDarkMode /> : <IoDesktopOutline />}
                    </button>
                </div>
                <div className={`bg-slate-200 dark:bg-slate-900 absolute top-[5.5rem] sm:right-7 right-2 border-[1px] rounded-lg border-orange-600 p-2 ${(toggle) ? "block" : "hidden"}`}>
                    {option.map(opt => (
                        <div
                            className={`flex gap-5 sm:text-base text-sm justify-start items-center text-center p-1 min-w-full cursor-pointer hover:bg-gray-700 capitalize rounded-sm ${theme === opt.text ? "text-orange-600" : ""}`}
                            key={opt.text}
                            onClick={() => handleThemeChange(opt.text)}
                            role="button" // Accessibility improvement
                        >
                            <div className='cursor-pointer text-center'>{opt.icon}</div>
                            <div>{opt.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='cursor-pointer sm:hidden' onClick={() => setClicked(!clicked)}>
                {clicked ? <RxCross1 className="w-8 h-8" /> : <FiAlignJustify className="w-8 h-8" />}
            </div>
        </div>
    );
}

export default Navbar;
