import React from 'react';
import ninjaImge3 from "./ninjaImg3.png";
import seminar from "../Screen/images/seminar.png"
import Page3card from './Page3card';

const Page3 = () => {
    const Eventsdata = [
        {
            img: ninjaImge3,
            name: "Workshop",
            discription: "By scheduling frequent workshop, we make sure that your path to becoming a master programmer is seamless"
        },
        {
            img: seminar,
            name: "Seminar",
            discription: "We host seminars featuring industry leaders that help students prepare for the workplace and also improve their skills.",
        },
        { 
            img: seminar,
            name: "Codathone",
            discription: "We host codathons for all to assess coding skills, enhance abilities, and advance technical careers."
        },
        {  
            img: seminar,
            name: "Hackathone",
            discription: "A showcase event for programmers and enthusiasts to create and present software programs to experienced individuals."
        },
        {
            img: seminar,
            name: "Expert talk",
            discription: "In expert talks, professionals share precise insight, fostering collaborative learning environments."
        },
        {
            img: seminar,
            name: "Fun & Cultural Events",
            discription: "Cultural events foster understanding through diverse traditions, art, music, and dialogue, creating vibrant experiences."
        }
    ];
    return (
        <div className='mt-24'>
            <div className='text-6xl font-bold text-center' style={{ lineHeight: '1.3' }}>
                Events We <span className='text-[#F66C3B]'>Organize</span><br /> for you!
            </div>
            <div className=' mr-16 ml-16 flex flex-wrap items-center justify-center gap-16  mt-8'>
            {Eventsdata.map((data, index) => (
               <Page3card data={data}/>
            ))}
            </div>
        </div>
    );
}

export default Page3;
