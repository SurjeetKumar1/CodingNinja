import React, { useEffect, useState } from 'react';
import logo from "./CodingNinjaLogo.png";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { IoDesktopOutline } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const element = document.documentElement;
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            return storedTheme;
        } else {
            const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            return prefersDarkMode ? "dark" : "light";
        }
    });
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    useEffect(() => {
        function onWindowMatch(e) {
            if (!localStorage.getItem("theme")) {
                if (e.matches) {
                    element.classList.add("dark");
                    setTheme("dark");
                } else {
                    element.classList.remove("dark");
                    setTheme("light");
                }
            }
        }

        darkQuery.addEventListener("change", onWindowMatch);

        return () => {
            darkQuery.removeEventListener("change", onWindowMatch);
        };
    }, []);

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
            case "system":
                if (darkQuery.matches) {
                    element.classList.add("dark");
                    localStorage.setItem('theme', 'dark');
                } else {
                    element.classList.remove("dark");
                    localStorage.setItem('theme', 'light');
                }
                break;
            default:
                localStorage.removeItem("theme");
                break;
        }
    }, [theme]);

    const handleThemeChange = (selectedTheme) => {
        setTheme(selectedTheme);
    };

    const option = [
        {
            icon: <MdOutlineLightMode />,
            text: "light"
        },
        // {
        //     icon: <MdDarkMode />,
        //     text: "dark"
        // },
        // {
        //     icon: <IoDesktopOutline />,
        //     text: "system"
        // }
    ];

    return (
        <>
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
                <div className={` ${clicked ? "block" : "hidden"} sm:block flex sm:flex-row flex-col items-center justify-center fixed sm:static top-24 w-full sm:max-w-fit   `} style={{display:"flex"}} >
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
                        <Button style={{ background: "#F66C3B", width:"9rem",height:"3.5rem", fontWeight: "700", borderRadius: "0.7rem" ,marginLeft:"5rem"}} variant="contained">
                            Contact Us
                        </Button>
                    </Link>
                </div>
                <div className='flex dark:bg-slate-700 bg-gray-100 rounded'>
                    {option.map(opt => (
                        <div className='' key={opt.text} onClick={() => handleThemeChange(opt.text)}>
                            <button className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && " text-orange-600"}`}>
                                {opt.icon}
                            </button>
                        </div>
                    ))}
                </div>
                <div className='cursor-pointer sm:hidden' onClick={() => setClicked(!clicked)}>
                    {clicked ? <RxCross1 className="w-8 h-8" /> : <FiAlignJustify className="w-8 h-8" />}
                </div>
            </div>
        </>
    );
}

export default Navbar;
