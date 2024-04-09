import React, { useEffect, useState } from 'react';
import logo from "./CodingNinjaLogo.png";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { IoDesktopOutline } from "react-icons/io5";

const Navbar = () => {
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
        {
            icon: <MdDarkMode />,
            text: "dark"
        },
        {
            icon: <IoDesktopOutline />,
            text: "system"
        }
    ];

    return (
        <div className='flex h-[6rem] justify-between items-center pl-10 pr-10'>
            <div className='flex items-center'>
                <Link to="/">
                    <img className="rounded-full h-16 cursor-pointer" src={logo} alt="logo" />
                </Link>
                <div className='ml-2'>
                    <div className='text-center text-3xl font-bold mr-3'>
                        <div>
                            <span className="text-orange-600">Coding Ninjas</span> Student Chapter
                        </div>
                    </div>
                    <div>Central University Of Haryana</div>
                </div>
            </div>

            <div>
                <ul className='flex justify-between gap-6 text-xl font-semibold cursor-pointer'>
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

            <div className='flex dark:bg-slate-700 bg-gray-100 rounded'>
                {option.map(opt => (
                    <div className='' key={opt.text} onClick={() => handleThemeChange(opt.text)}>
                        <button className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && " text-orange-600"}`}>
                            {opt.icon}
                        </button>
                    </div>
                ))}
            </div>

            <Link to="contactus">
                <Button style={{ background: "#F66C3B", padding: "0.8rem 1.3rem", fontWeight: "700", borderRadius: "0.7rem" }} variant="contained">
                    Contact Us
                </Button>
            </Link>
        </div>
    );
}

export default Navbar;
